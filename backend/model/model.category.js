import mongoose from 'mongoose';

const postScheama = mongoose.Schema(
    {
        rent: { type:Number,required: true,},
        Name: { type: String,required: true, trim: true },
        Vehicles: [{
			type: mongoose.Schema.Types.ObjectId,
			trim: true,
            ref: "postVehicle",
            
		}],
       },
    {
        versionKey: false
    }
);

const postCategory = mongoose.model('postCategory', postScheama);
export default postCategory;