import React, { useEffect, useState } from "react"

const Menu = () => {
  const [user, setUser] = useState("John Smith")
  const [cards, setCards] = useState([])

  useEffect(() => {
    // Esto luego vendría de tu API
    const fakeCards = [
      {
        cardholder: "John Smith",
        cardNumber: "4756 **** **** 9018",
        balance: 11301.11,
        type: "Visa"
      },
      {
        cardholder: "John Smith",
        cardNumber: "5234 **** **** 1234",
        balance: 5820.5,
        type: "MasterCard"
      }
    ]
    setCards(fakeCards)
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Encabezado */}
      <div className="bg-purple-700 text-white p-4 rounded-b-3xl">
        <p className="text-sm">Hola,</p>
        <h2 className="text-lg font-bold">{user}</h2>
      </div>

      {/* Tarjetas */}
      <div className="p-4 space-y-4">
        {cards.map((card, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-md font-semibold">{card.cardholder}</h3>
            <p className="text-gray-600 text-sm">{card.cardNumber}</p>
            <p className="text-purple-700 font-bold text-xl">Q{card.balance.toLocaleString("es-GT", { minimumFractionDigits: 2 })}</p>
            <p className="text-sm text-right mt-2 text-gray-500">{card.type}</p>
          </div>
        ))}
      </div>

      {/* Acciones */}
      <div className="bg-white p-4 rounded-t-3xl mt-6 shadow-inner flex justify-around">
        {["Cuentas y Tarjetas", "Transferencias", "Movimientos"].map((label, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full mb-2" />
            <p className="text-xs text-gray-700">{label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu