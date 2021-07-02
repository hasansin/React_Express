import vehicle from '../model/model.Vehicle.js';
import category from '../model/model.category.js';

export const getAllVehicles = async (req, res) => {
    try {
       
        const postVehicle = await vehicle.find();
        res.status(200).json(postVehicle);
       
   } catch (error) {
        res.status(404).json({ message: error.message });
   }
}

export const CreateVehicle = async (req,res) => {
    console.log(req.body);
    const newVehicle = new vehicle(req.body);
    
    try {
        
     
        await newVehicle.save();
        
        await category.updateMany(
            { _id: newVehicle.Categories},
            { $push: {Vehicles: newVehicle._id } }
        );
        res.status(201).json(newVehicle);
    } catch (error) {
        
        res.status(409).json({message:error.message});
    }
}

export const deleteVehicle =async (request, response) => {
	try {
	  const Vehicle = await vehicle.findByIdAndDelete(request.params.id);
  
	  if (!Vehicle) response.status(404).send("No item found");
	  response.status(200).send();
	} catch (error) {
	  response.status(500).send(error);
	}
  }