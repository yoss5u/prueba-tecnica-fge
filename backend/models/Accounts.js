import mongoose from 'mongoose';

const tarjetaSchema = new mongoose.Schema({
  numeroTarjeta: { type: String, required: true },
  tipo: { type: String, required: true },
  nombre: { type: String, required: true }
});

const cuentaSchema = new mongoose.Schema({
  numeroCuenta: { type: String, required: true },
  saldo: { type: String, required: true }
});

const infoUserSchema = new mongoose.Schema({
  idUsuario: { type: String, required: true, unique: true },
  nombreDelUsuario: { type: String, required: true },
  tarjetas: [tarjetaSchema],
  cuentas: [cuentaSchema]
});

const InfoUser = mongoose.model('InfoUser', infoUserSchema);

export default InfoUser;