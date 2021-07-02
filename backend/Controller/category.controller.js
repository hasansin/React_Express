import category from '../model/model.category.js';

export const getAllCategories = async (req, res) => {
    try {
       
        const postCategory = await category.find();
        res.status(200).json(postCategory);
       
   } catch (error) {
        res.status(404).json({ message: error.message });
   }
}



export const CreateCategories= async (req,res) => {
    console.log(req.body);
    const newCategories= new category(req.body);
    
    try {
        
        await newCategories.save();
        console.log(newCategories);
        res.status(201).json(newCategories);
    } catch (error) {
        
        res.status(409).json({message:error.message});
    }
}


export const getAllVehiclesInCategory = async (req, res) => {
	if (req.params.id) {
		try {
			
			
			const allVehiclesInCategory = await category.findById(
				req.params.id
			).populate("Vehicles", "Code Model Type Name");

			res.status(200).json({ Vehicles: allVehiclesInCategory.Vehicles });
		} catch (error) {
			res.status(401).json({ message: error.message });
		}
	}
};


export const calculateTripCharges = async (req, res) => {
	console.log(req.body);
	if (req.body.type) {
		try {
			
			const selectedCategory = await Category.findById(req.body.type);
			
			
			           
           const totalTripCharges = selectedCategory.rent * req.body.duration;
		   
			return res.status(200).json({ charges: totalTripCharges });
		} catch (error) {
			return res.status(406).json({ message: error.message });
		}
	}

	return res.status(406).json({ message: "trip type not mentioned" });
}

