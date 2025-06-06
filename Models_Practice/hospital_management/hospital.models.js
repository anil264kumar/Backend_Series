import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      requried: true,
    },
    addressLine1: {
      type: String,
      requried: true,
    },
    addressLine2: {
      type: String,
      requried: true,
    },
    city: {
      type: String,
      requried: true,
    },
    pincode : {
        type: String,
        requried: true
    },
    specializedIn : [
        {
            type: String
        }
    ]
  },
  { timestamps: true }
);

export const Hospital = mongoose.model("Hospital",hospitalSchema);
