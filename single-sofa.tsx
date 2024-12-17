import Image from 'next/image'

export default function SingleSofa() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="md:w-1/2">
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Asgaard sofa"
            width={400}
            height={400}
            className="w-full h-auto"
          />
          <div className="flex gap-2 mt-4">
            {[1, 2, 3, 4].map((i) => (
              <Image
                key={i}
                src={`/placeholder.svg?height=80&width=80`}
                alt={`Thumbnail ${i}`}
                width={80}
                height={80}
                className="w-20 h-20 object-cover"
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">Asgaard sofa</h1>
          <p className="text-2xl font-semibold mb-4">Rs. 250,000.00</p>
          <div className="flex items-center mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 text-gray-600">(1 customer review)</span>
          </div>
          <p className="text-gray-600 mb-6">
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
          </p>
          <div className="flex items-center gap-4 mb-6">
            <button className="w-8 h-8 bg-purple-600 rounded-full"></button>
            <button className="w-8 h-8 bg-black rounded-full"></button>
            <button className="w-8 h-8 bg-orange-400 rounded-full"></button>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex border rounded">
              <button className="px-3 py-1 text-xl">-</button>
              <span className="px-3 py-1 text-xl">1</span>
              <button className="px-3 py-1 text-xl">+</button>
            </div>
            <button className="bg-orange-400 text-white px-6 py-2 rounded">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

