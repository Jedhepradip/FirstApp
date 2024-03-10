import mongoose from "mongoose";

const db = mongoose.connect("mongodb+srv://pradip:pradip123@appnew.o1fi0ge.mongodb.net/?retryWrites=true&w=majority&appName=AppNew")
.then(()=>{
    console.log("Database Connected Successfully")
})
.catch((err)=>{
    console.log(err)
})

export default db;