import mongoose from "mongoose";

const userdata = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    Cpassword:{
      type:String,
      require:true
    }
})

const userdataSchema =  mongoose.model("userData", userdata);
export default userdataSchema;