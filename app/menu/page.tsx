"use client"

import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { useCart } from "../contexts/CartContext"
import { useState } from "react"
import { toast } from "react-hot-toast"

const menuItems = [
  {
    id: 1,
    name: "Espresso",
    price: 180,
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=500&q=80",
    description: "Espresso",
    category: "coffee",
  },
  {
    id: 2,
    name: "Cappuccino",
    price: 250,
    image: "https://images.unsplash.com/photo-1600056781444-55f3b64235e3?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Cappuccino",
    category: "coffee",
  },
  {
    id: 3,
    name: "Latte",
    price: 270,
    image: "https://images.unsplash.com/photo-1593443320739-77f74939d0da?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Latte",
    category: "coffee",
  },
  {
    id: 4,
    name: "Americano",
    price: 200,
    image: "https://images.unsplash.com/photo-1551030173-122aabc4489c?w=500&q=80",
    description: "Americano",
    category: "coffee",
  },
  {
    id: 5,
    name: "Mocha",
    price: 290,
    image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=500&q=80",
    description: "Mocha",
    category: "coffee",
  },
  {
    id: 6,
    name: "Cold Brew",
    price: 230,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&q=80",
    description: "Cold Brew",
    category: "coffee",
  },
  {
    id: 7,
    name: "Flat White",
    price: 260,
    image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=500&q=80",
    description: "Flat White",
    category: "coffee",
  },
  {
    id: 8,
    name: "Macchiato",
    price: 240,
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=500&q=80",
    description: "Macchiato",
    category: "coffee",
  },
  {
    id: 9,
    name: "Iced Coffee",
    price: 220,
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&q=80",
    description: "Iced Coffee",
    category: "coffee",
  },
  {
    id: 10,
    name: "Green Tea",
    price: 180,
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?w=500&q=80",
    description: "Green Tea",
    category: "tea",
  },
  {
    id: 11,
    name: "Earl Grey",
    price: 190,
    image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=500&q=80",
    description: "Earl Grey",
    category: "tea",
  },
  {
    id: 12,
    name: "Chai Latte",
    price: 240,
    image: "https://images.unsplash.com/photo-1555251415-4716d9d0b8af?q=80&w=2824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Spiced tea latte with steamed milk",
    category: "tea",
  },
  {
    id: 13,
    name: "Croissant",
    price: 150,
    image: "https://images.unsplash.com/photo-1600521853186-93b88b3a07b0?q=80&w=3435&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Croissant",
    category: "food",
  },
  {
    id: 14,
    name: "Blueberry Muffin",
    price: 180,
    image: "https://images.unsplash.com/photo-1558303420-f814d8a590f5?q=80&w=3465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Blueberry Muffin",
    category: "food",
  },
  {
    id: 15,
    name: "Avocado Toast",
    price: 280,
    image: "https://images.unsplash.com/photo-1623691752358-0be1e4235183?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Avocado Toast",
    category: "food",
  },
]

export default function MenuPage() {
  const { addToCart } = useCart()

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold text-center mb-12">
        
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.map((coffee) => (
          <div key={coffee.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Link href={`/coffee/${coffee.id}`} className="block">
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={coffee.image}
                  alt={coffee.name}
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
            <div className="p-3">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-900">{coffee.name}</h2>
                <button 
                  onClick={() => addToCart({ ...coffee, quantity: 1 })}
                  className="bg-brown-600 text-white px-3 py-1 rounded text-sm hover:bg-brown-700"
                >
                  Add to Cart
                </button>
              </div>
              <div className="mt-2 flex justify-end">
                <span className="text-base font-semibold text-gray-900">₹{coffee.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

