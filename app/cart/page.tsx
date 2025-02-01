"use client"

import { useCart } from "../contexts/CartContext"
import Link from "next/link"
import { Button } from "../ui/button"

export default function Cart() {
  const { cart, removeFromCart, getCartTotal } = useCart()

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
      {cart.length === 0 ? (
        <p>
          Your cart is empty.{" "}
          <Link href="/menu" className="text-brown-500 hover:text-brown-600">
            Go to Menu
          </Link>
        </p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b py-4">
              <div>
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <div className="flex items-center">
                <p className="text-lg font-semibold mr-4">₹{(item.price * item.quantity).toFixed(2)}</p>
                <Button variant="destructive" onClick={() => removeFromCart(item.id)}>
                  Remove
                </Button>
              </div>
            </div>
          ))}
          <div className="mt-8">
            <p className="text-2xl font-bold">Total: ₹{getCartTotal().toFixed(2)}</p>
            <Link href="/checkout">
              <Button 
                className="mt-4 w-full md:w-auto bg-brown-600 hover:bg-brown-700 text-white"
              >
                Proceed to Checkout
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

