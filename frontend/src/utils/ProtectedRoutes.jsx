import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


const ProtectedRoutes = () => {
  const token = localStorage.getItem("authToken")
  const navigate = useNavigate()
  useEffect(() => {
    if (!token) {
      navigate("/", { replace: true })  // Redirige al login
    }
  }, [token, navigate])

  return token ? <Outlet /> : null;

}

export default ProtectedRoutes