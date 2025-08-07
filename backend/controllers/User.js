import jwt from 'jsonwebtoken'
import User from '../models/User.js'

export const registerNewUser = async(req, res, next) => {
  const { username, password } = req.body

  try {
    const user = new User({username, password})
    await user.save();
    res.status(200).json({data: "Usuario registrado"})
  } catch (error) {
    console.log(error)
    next(error)
  }
}

export const login = async(req, res, next) => {
  const { username, password } = req.body

  try {
    const user = await User.findOne({username})
    if (!user) {
      return res.status(400).json({data: "Usuario no existe"})
    }

    const passwordMatch = await user.comparePassword(password)
    if (!passwordMatch) {
      return res.status(401).json({data: "Contraseña invalida"})
    } 

    const token = jwt.sign({userId: user._id}, process.env.SECRET_KEY, {
      expiresIn: '5m'
    })
    res.status(200).json({data: token})
  } catch (error) {
    console.log(error)
  }
}

