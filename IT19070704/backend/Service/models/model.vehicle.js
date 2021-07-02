import mongoose from 'mongoose';

const postScheama = mongoose.Schema(
    {
        type: { type:String,required: true, trim: true },
        owner: { type: String, required: true, trim: true },
        description: { type: String,required: true, trim: true },
        Products: [{
			type: mongoose.Schema.Types.ObjectId,
			trim: true,
            ref: "Products",
            
		}],
       },
    {
        versionKey: false
    }
);

const postVehicles = mongoose.model('Vehicles', postScheama);
export default postVehicles;