import Image from "next/image"

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">About The Coffee House</h1>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-8">
          <Image
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=500&q=80"
            alt="Coffee shop"
            width={500}
            height={300}
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 px-4">
          <p className="text-gray-600 mb-4">
            The Coffee House has been serving premium coffee since 2010. We source our beans from the finest coffee
            regions around the world and roast them to perfection in-house.
          </p>
          <p className="text-gray-600 mb-4">
            Our mission is to provide our customers with the best coffee experience possible. We believe in sustainable
            and ethical sourcing practices, working directly with farmers to ensure fair compensation and
            environmentally friendly cultivation methods.
          </p>
          <p className="text-gray-600">
            At The Coffee House, we're not just serving coffee; we're creating a community. We host regular events,
            workshops, and tastings to share our passion for coffee with our customers and help them explore the rich
            world of coffee.
          </p>
        </div>
      </div>
    </div>
  )
}

