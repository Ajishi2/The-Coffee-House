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
        <div className="flex flex-col items-center gap-4 mt-8">
          <div className="flex gap-4">
            <a 
              href="#" 
              className="w-40 h-12 bg-black hover:bg-gray-900 rounded-lg flex items-center justify-center"
            >
              <img 
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                alt="Download on the App Store"
                className="h-8 w-auto"
              />
            </a>
            <a
              href="#"
              className="w-40 h-12 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center"
            >
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                className="h-14 w-auto -mt-1"
              />
            </a>
          </div>
          <p className="text-sm text-gray-500">
            Download our app for better experience
          </p>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 The Coffee House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

