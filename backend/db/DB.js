import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config(); 

const connectDB = async () => {
  try{
    await mongoose.connect(process.env.MONGODB_URI,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("Conexion a MongoDB realizada")
  } catch(error) {
    console.log(error)
    console.log("Error realizando la conexion")
  }
}

export default connectDB;