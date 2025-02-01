"use client"

import Link from "next/link"
import { useCart } from "../contexts/CartContext"
import { useAuth } from "../contexts/AuthContext"
import { ShoppingCart, User } from "lucide-react"
import { Button } from "../ui/button"

const Header = () => {
  const { cart } = useCart()
  const { user, logout } = useAuth()

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="fixed top-0 left-0 right-0 bg-brown-900 text-white z-10">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          The Coffee House
        </Link>
        <ul className="flex space-x-6 items-center">
          <li>
            <Link href="/" className="hover:text-brown-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/menu" className="hover:text-brown-300">
              Menu
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-brown-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-brown-300">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/cart" className="hover:text-brown-300 flex items-center">
              <ShoppingCart className="mr-1" />
              <span>{cartItemsCount}</span>
            </Link>
          </li>
          {user ? (
            <>
              <li>
                <User className="mr-1" />
                <span>{user.name}</span>
              </li>
              <li>
                <Button onClick={logout} variant="ghost">
                  Logout
                </Button>
              </li>
            </>
          ) : (
            <li>
              <Link 
                href="/login" 
                className="flex items-center justify-center w-8 h-8 rounded-full bg-brown-100 hover:bg-brown-200 transition-colors"
              >
                <span className="text-lg">👤</span>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Header

