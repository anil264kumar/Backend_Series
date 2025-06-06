import mongoose from "mongoose";


const doctorSchema = new mongoose.Schema(
    {
        name :{
            type : String,
            requried: true
        },
        salary :{
            type: String,
            requried: true
        },
        qualification: {
            type: String,
            requried: true
        },
        experienceInYears: {
            type: Number,
            default :0
        },
        worksInHospitals: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref : "Hospital"
            },
        ]
        
    }, { timestamps: true });

export const Doctor = mongoose.model("Doctor",doctorSchema);
