import express from 'express';
import { authenticate } from '../middleware/Auth.js';

const router = express.Router();


// Este endpoint usa el middleware para obtener el usuario desde el token
router.get('/profile', authenticate, (req, res) => {
  const { idUsuario, nombreDelUsuario, tarjetas, cuentas } = req.user;

  res.status(200).json({
    data: {
      idUsuario,
      nombreDelUsuario,
      tarjetas,
      cuentas
    }
  });
});

export default router;