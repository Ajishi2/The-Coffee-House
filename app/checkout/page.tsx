"use client"

import { useState } from "react"
import { useCart } from "../contexts/CartContext"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { useRouter } from "next/navigation"

export default function Checkout() {
  const { cart, getCartTotal, clearCart } = useCart()
  const router = useRouter()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the order data to your backend
    // For this example, we'll just simulate a successful order
    const orderDetails = { ...formData, cart, total: getCartTotal() }
    console.log("Order placed:", orderDetails)

    try {
      // Send confirmation email
      const response = await fetch("/api/send-confirmation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          orderDetails,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to send confirmation email")
      }

      clearCart()
      router.push("/order-confirmation")
    } catch (error) {
      console.error("Error:", error)
      // Handle error (e.g., show error message to user)
    }
  }

  const tax = getCartTotal() * 0.1 // 10% tax
  const total = getCartTotal() + tax

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Checkout</h1>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>₹{(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="border-t pt-2 mt-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{getCartTotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax (10%)</span>
              <span>₹{tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold mt-2">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <Input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <Textarea id="address" name="address" value={formData.address} onChange={handleInputChange} required />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                City
              </label>
              <Input type="text" id="city" name="city" value={formData.city} onChange={handleInputChange} required />
            </div>
            <div>
              <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
                Postal Code
              </label>
              <Input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleInputChange}
                required
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-brown-600 hover:bg-brown-700 text-white"
            >
              Place Order
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

