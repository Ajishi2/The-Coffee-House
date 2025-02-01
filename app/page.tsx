import Image from "next/image";
import Link from "next/link";

const featuredCoffees = [
  { id: 1, name: "Espresso", image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=500&q=80" },
  { id: 2, name: "Cappuccino", image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=500&q=80" },
  { id: 6, name: "Cold Brew", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&q=80" },
];

export default function Home() {
  return (
    <div>
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1500&q=80"
            alt="Coffee shop interior"
            fill
            className="object-cover"
            quality={100}
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to The Coffee House</h1>
          <p className="text-xl mb-8">Experience the finest coffee in town</p>
          <Link
            href="/menu"
            className="bg-brown-500 hover:bg-brown-600 text-white font-bold py-3 px-6 rounded-full transition duration-300"
          >
            View Our Menu
          </Link>
        </div>
      </section>

      <section className="py-12">
        <h1 className="text-5xl font-bold text-center mb-8 flag-wave">
          Our Specialties
        </h1>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCoffees.map((coffee) => (
              <Link
                href={`/coffee/${coffee.id}`}
                key={coffee.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={coffee.image || "/placeholder.svg"}
                  alt={coffee.name}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{coffee.name}</h3>
                  <p className="text-gray-600">Discover our signature blend</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <Image
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=500&q=80"
                alt="Coffee shop"
                width={500}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-8">
              <h2 className="text-3xl font-bold mb-4">About Us</h2>
              <p className="text-gray-600 mb-4">
                The Coffee House has been serving premium coffee since 2010. We source our beans from the finest coffee
                regions around the world and roast them to perfection in-house.
              </p>
              <Link href="/about" className="text-brown-500 hover:text-brown-600 font-semibold">
                Learn More About Us →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
