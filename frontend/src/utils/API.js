const BASE_URL = "http://localhost:3000"

const getHeaders = (isPrivate = false) => {
  const headers = {
    "Content-type": "application/json",
  }

  if (isPrivate) {
    const token = localStorage.getItem("authToken")
    if(token){
      headers["Authorization"] = `Bearer ${token}`
    } else {
      console.log("Error al obtener el token")
    }
  }

  return headers
}

const request = async (endpoint, method = "GET", data = null, isPrivate = false) => {
  const options = {
    method,
    headers: getHeaders(isPrivate)
  }
  
  if (data) {
    options.body = JSON.stringify(data)
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, options)
  const result = await response.json()

  if(!response.ok){
    throw new Error(result.message || "Error al realizar la peticion")
  }

  return result
}

export const api = {
  post: (endpoint, data, isPrivate=false) => request(endpoint, "POST", data, isPrivate),
}