import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-brown-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">The Coffee House</h3>
            <p>Serving premium coffee since 2010</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
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
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p>123 Coffee Street</p>
            <p>Cityville, State 12345</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@thecoffeehouse.com</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 The Coffee House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

