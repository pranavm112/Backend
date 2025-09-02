import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
     //console.log("MONGODB_URI:", process.env.MONGODB_URI);
     //console.log("DB_NAME:", DB_NAME);

        const connectionInstance = await mongoose.connect
        (`${process.env.MONGODB_URI}/${DB_NAME}?retryWrites=true&w=majority`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host} \n`);
    }
    catch (error) {
        console.log("MONGODB connection error", error);
        process.exit(1);
    }
}

export default connectDB;   