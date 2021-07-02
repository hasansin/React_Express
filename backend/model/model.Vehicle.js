import mongoose from 'mongoose';

const postScheama = mongoose.Schema(
    {

        Code: { type:String},
        Model: { type:String},
        Type: { type:String},
        Name: { type:String},
        date: { type: Date,  default: Date.now() },
        Categories: [{type: mongoose.Schema.Types.ObjectId, ref: "postCategory", trim: true }],
    },
    {
        versionKey: false
    }
);

const postVehicle = mongoose.model('postVehicle', postScheama);
export default postVehicle;