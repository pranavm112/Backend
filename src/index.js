//require('dotenv'.config({path: './env'}))

import dotenv from "dotenv"
import express from "express";
import connectDB from "./db/index.js"


//import mongoose, { connect } from "mongoose"
//import { DB_NAME } from "./constants.js"

dotenv.config()

const app = express();

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT || 8000 }`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!!", err);
})



/*
import express from "express"
const app = express

//function connectDB() {}    //1st approach
//connectDB()

;( async() => {
    try{
       await  mongoose.connect(`${process.env.MONGODB_URI}`/`${DB_NAME}`)
       app.on("error", (err) => {
        console.log("ERR:", error);
        throw error
       })

       app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`)
       });

    }
    catch(error) {
        console.error("ERROR:or", err)
        throw err
    }
})()
*/

