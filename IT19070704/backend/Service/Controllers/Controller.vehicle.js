import Vehicle from '../models/model.vehicle.js';
import product from '../models/model.product.js';




export const getAllvehicles = async (req, res) => {
    try {
       
        const vehicles = await Vehicle.find();
        res.status(200).json(vehicles);
       
   } catch (error) {
        res.status(404).json({ message: error.message });
   }
}

export const CreateVehicle = async (req, res) => {
    console.log(req.body);
    const newVehicle= new Vehicle(req.body);
    
    try {
        
        await newVehicle.save();
        console.log(newVehicle);
        res.status(201).json(newVehicle);
    } catch (error) {
        
        res.status(409).json({message:error.message});
    }
}


export const getAllProductsInVehicle = async (req, res) => {
	if (req.params.id) {
		try {
			
			
			const AllProductsInVehicle = await Vehicle.findById(
				req.params.id
            ).populate("Products", "Code Amount Instock Name");
            
            
			res.status(200).json({ Products: AllProductsInVehicle.Products });
		} catch (error) {
			res.status(401).json({ message: error.message });
		}
	}
};


export const calculatedeliveryCharges = async (req, res) => {
	console.log(req.body);
	if (req.body.type) {
		try {
			
			 selectedproduct= await product.findById(req.body.product);
			
			
			           
           const totalTripCharges = selectedproduct.Amount + 1000;
		   
			return res.status(200).json({ charges: totalTripCharges });
		} catch (error) {
			return res.status(406).json({ message: error.message });
		}
	}

	return res.status(406).json({ message: "trip type not mentioned" });
}
