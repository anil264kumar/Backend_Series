import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
    {
       name : {
        type: String,
        required : true
       },
       diagonsedWith: {
        type:String,
        required: true
       },
       address: {
        type: String,
        required: true
       },
       age: {
        type : Number,
        requried: true
       },
       bloodGroup: {
        type: String,
        requried: true
       },
       gender:{
        type: String,
        enum: ["M", "F", "O"],
        requried: true
       },
       admittedIn : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
       }
    }, { timestamps: true });

export const Patient = mongoose.model("Patient",patientSchema);
