import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <Input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <Textarea id="message" name="message" rows={4} required />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-brown-600 hover:bg-brown-700 text-white"
            >
              Send Message
            </Button>
          </form>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-2">
            <strong>Address:</strong> 123 Coffee Street, Cityville, State 12345
          </p>
          <p className="mb-2">
            <strong>Phone:</strong> (555) 123-4567
          </p>
          <p className="mb-2">
            <strong>Email:</strong> info@thecoffeehouse.com
          </p>
          <h3 className="text-xl font-semibold mt-6 mb-2">Opening Hours</h3>
          <p className="mb-1">Monday - Friday: 7:00 AM - 8:00 PM</p>
          <p className="mb-1">Saturday: 8:00 AM - 6:00 PM</p>
          <p>Sunday: 9:00 AM - 5:00 PM</p>
        </div>
      </div>
    </div>
  )
}

