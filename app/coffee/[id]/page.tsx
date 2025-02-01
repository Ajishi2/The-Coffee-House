"use client"

import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { useCart } from "../../contexts/CartContext"
import { useState } from "react"
import { toast } from "react-hot-toast"

const menuItems = [
  {
    id: 1,
    name: "Espresso",
    price: 180,
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=500&q=80",
    description: "A concentrated shot of coffee served in a small, strong dose.",
    category: "coffee",
  },
  {
    id: 2,
    name: "Cappuccino",
    price: 250,
    image: "https://images.unsplash.com/photo-1600056781444-55f3b64235e3?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Equal parts espresso, steamed milk, and milk foam, often topped with cocoa powder.",
    category: "coffee",
  },
  {
    id: 3,
    name: "Latte",
    price: 270,
    image: "https://images.unsplash.com/photo-1593443320739-77f74939d0da?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Espresso with steamed milk and a small layer of milk foam on top.",
    category: "coffee",
  },
  {
    id: 4,
    name: "Americano",
    price: 200,
    image: "https://images.unsplash.com/photo-1551030173-122aabc4489c?w=500&q=80",
    description: "Espresso diluted with hot water, similar in strength to regular drip coffee.",
    category: "coffee",
  },
  {
    id: 5,
    name: "Mocha",
    price: 290,
    image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=500&q=80",
    description: "Espresso with chocolate syrup, steamed milk, and often topped with whipped cream.",
    category: "coffee",
  },
  {
    id: 6,
    name: "Cold Brew",
    price: 230,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&q=80",
    description: "Coffee steeped in cold water for 12-24 hours, resulting in a smooth, less acidic taste.",
    category: "coffee",
  },
  {
    id: 7,
    name: "Flat White",
    price: 260,
    image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=500&q=80",
    description: "Similar to a latte but with a higher coffee to milk ratio and velvety microfoam.",
    category: "coffee",
  },
  {
    id: 8,
    name: "Macchiato",
    price: 240,
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=500&q=80",
    description: "Espresso with a small amount of steamed milk, creating a 'stained' appearance.",
    category: "coffee",
  },
  {
    id: 9,
    name: "Iced Coffee",
    price: 220,
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&q=80",
    description: "Chilled coffee served over ice, often sweetened and with a splash of milk.",
    category: "coffee",
  },
  {
    id: 10,
    name: "Green Tea",
    price: 180,
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?w=500&q=80",
    description: "Light, refreshing tea with a delicate flavor and numerous health benefits.",
    category: "tea",
  },
  {
    id: 11,
    name: "Earl Grey",
    price: 190,
    image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=500&q=80",
    description: "Black tea flavored with oil of bergamot, offering a distinctive citrusy aroma.",
    category: "tea",
  },
  {
    id: 12,
    name: "Chai Latte",
    price: 240,
    image: "https://images.unsplash.com/photo-1555251415-4716d9d0b8af?q=80&w=2824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Spiced tea mixed with steamed milk, creating a warm and comforting beverage.",
    category: "tea",
  },
  {
    id: 13,
    name: "Croissant",
    price: 150,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&q=80",
    description: "Flaky, buttery pastry perfect for breakfast or as a snack.",
    category: "food",
  },
  {
    id: 14,
    name: "Blueberry Muffin",
    price: 180,
    image: "https://images.unsplash.com/photo-1558303420-f814d8a590f5?q=80&w=3465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Moist, cake-like muffin studded with fresh blueberries.",
    category: "food",
  },
  {
    id: 15,
    name: "Avocado Toast",
    price: 280,
    image: "https://images.unsplash.com/photo-1623691752358-0be1e4235183?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Toasted artisan bread topped with mashed avocado, salt, and pepper.",
    category: "food",
  },
]

export default function CoffeePage({ params }: { params: { id: string } }) {
  const { addToCart } = useCart()
  const [isAdding, setIsAdding] = useState(false)

  const item = menuItems.find((c) => c.id === Number.parseInt(params.id))

  if (!item) {
    notFound()
  }

  const handleAddToCart = () => {
    setIsAdding(true)
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
    })
    toast.success(`${item.name} added to cart!`)
    setTimeout(() => setIsAdding(false), 1000)
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <Link href="/menu" className="text-brown-500 hover:text-brown-600 mb-8 inline-block">
        ← Back to Menu
      </Link>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-8">
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.name}
            width={500}
            height={500}
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 px-4">
          <h1 className="text-4xl font-bold mb-4">{item.name}</h1>
          <p className="text-2xl text-brown-500 mb-4">₹{item.price.toFixed(2)}</p>
          <p className="text-gray-600 mb-8">{item.description}</p>
          <button
            className={`bg-brown-500 hover:bg-brown-600 text-white font-bold py-2 px-4 rounded ${
              isAdding ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleAddToCart}
            disabled={isAdding}
          >
            {isAdding ? "Adding..." : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  )
}

