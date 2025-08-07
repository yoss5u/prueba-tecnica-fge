import jwt from 'jsonwebtoken';
import InfoUser from '../models/Accounts.js';

export const authenticate = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(400).json({ data: "Se requiere estar autenticado" });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    const user = await InfoUser.findById(decodedToken.userId);

    if (!user) {
      return res.status(404).json({ data: "Usuario inválido" });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ data: "Token no válido" });
  }
};