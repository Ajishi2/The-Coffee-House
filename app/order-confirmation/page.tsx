import Link from "next/link"
import { Button } from "../ui/button"

export default function OrderConfirmation() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">Thank You for Your Order!</h1>
      <p className="text-xl mb-8">Your order has been successfully placed.</p>
      <p className="mb-4">An email confirmation has been sent to your email address.</p>
      <Link href="/">
        <Button>Return to Home</Button>
      </Link>
    </div>
  )
}

