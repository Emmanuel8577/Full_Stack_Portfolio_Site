import mongoose, { connect } from "mongoose";



const ConnectDB = async () =>{
    try {
        const conn = await connect(process.env.MONGO_URI);
        console.log(`DB has been connected ${conn.connection.host}`)
    } catch (error) {
         console.log("Error connecting database")
         process.exit(1)
    }
}


export default ConnectDB;