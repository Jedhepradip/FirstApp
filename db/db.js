import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const db = mongoose.connect(process.env.db)

.then(()=>{
    console.log("Database Connected Successfully")
})
.catch((err)=>{
    console.log(err)
})

// comment added from testing purpus
export default db;
