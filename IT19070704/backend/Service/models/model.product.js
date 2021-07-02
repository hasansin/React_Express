import mongoose from 'mongoose';

const postScheama = mongoose.Schema(
    {

        Code: { type:String},
        Amount: { type:Number},
        Instock: { type:Number},
        Name: { type:String},
         Vehicles: [{type: mongoose.Schema.Types.ObjectId, ref: "vehicles", trim: true }],
    },
    {
        versionKey: false
    }
);

const postProducts = mongoose.model('Products', postScheama);
export default postProducts;