import express from 'express'
import connectDB from './db/DB.js'
import authRoutes from './routes/Auth.js'
import userRoutes from './routes/User.js'
import cors from 'cors'

const app = express();
const PORT = process.env.PORT || 3000

app.use(cors());

connectDB()

app.use(express.json())

app.use('/auth', authRoutes)

app.use('/user', userRoutes)

app.listen(PORT, ()=>{
  console.log("Servidor Arriba")
})
