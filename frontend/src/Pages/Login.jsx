import React, { useState } from 'react'
import { api } from '../utils/API'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState({username: "", password: ""})

  const handleLogin = async () => {
    let newError = {username: "", password: ""}

    if (!username.trim()) {
      newError.username = "Ingrese usuario"
    }

    if (!password.trim()) {
      newError.password = "Ingrese contraseña"
    }

    setError(newError)

    const isValid = !newError.username && !newError.password
    if (isValid) {
      try {
        const response = await api.post("/auth/login", {
          username, password
        })
        localStorage.setItem("authToken", response.data)
        navigate("/menu", {replace:true})
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className='w-full max-w-md px-6 py-8'>
        <div className='bg-purple-700 text-white rounded-t-xl px-4 py-3 flex items-center space-x-2'>
          <span className='text-lg font-semibold'>Iniciar Sesion</span>
        </div>

        <div className='bg-white shadow-md rounded-b-xl px-6 pt-6 pb-10'>
          <h2 className='text-2xl font-bold text-purple-700'>Bienvenido</h2>
          <p className='text-gray-500 text-sm mb-6'>Hola, inicia sesion para continuar</p>

          <div className='mb-4'>
            <input
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              type='text'
              placeholder='Usuario'
              className='w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-500' />
              {error.username && <p className='text-red-500 text-sm mt-1'>{error.username}</p>}
          </div>

          <div className='mb-2'>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              placeholder='Contraseña'
              className='w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-500' />
              {error.password && <p className='text-red-500 text-sm mt-1'>{error.password}</p>}
          </div>

          <button 
          onClick={handleLogin}
          className='w-full bg-purple-500 text-white py-2 rounded-lg'>
            Iniciar Sesión
          </button>

        </div>
      </div>
    </div>
  )
}

export default Login