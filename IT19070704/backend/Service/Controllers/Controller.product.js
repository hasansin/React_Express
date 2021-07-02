import Product from '../models/model.product.js';
import vehicle from '../models/model.vehicle.js';


export const getAllProducts = async (req, res) => {
    try {
       
        const Products = await Product.find();
        res.status(200).json(Products);
       
   } catch (error) {
        res.status(404).json({ message: error.message });
   }
}

export const CreateProduct = async (req, res) => {
    console.log(req.body);
    const newProduct = new Product(req.body);
    
    try {
        
     
        await newProduct .save();
        
        await vehicle.updateMany(
            { _id: newProduct.Vehicles},
            { $push: {Products: newProduct._id } }
        );
        res.status(201).json(newProduct);
    } catch (error) {
        
        res.status(409).json({message:error.message});
    }
}
