import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

// Updated product data
const products = [
  {
    tag: "Traffic Management",
    title: "Manage City Traffic with the Help Of AI",
    description: "Inlights revolutionizes your planning with advanced forecasting tools. Anticipate needs, schedule proactively, and optimize resources to keep operations running smoothly.",
    image: "/assets/card/card_img.png"
  },
  {
    tag: "Premise Security",
    title: "Manage Who Enters your Premises",
    description: "Inlights revolutionizes your planning with advanced forecasting tools. Anticipate needs, schedule proactively, and optimize resources to keep operations running smoothly.",
    image: "/assets/card/card_img.png"
  }
]

export default function Component() {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl  mb-12 text-gray-700">Our Products</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-black rounded-3xl overflow-hidden flex flex-col">
              <div className="p-8 space-y-4">
                <span className="inline-block bg-white text-black rounded-full px-4 py-2 text-sm font-semibold">
                  {product.tag}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white" style={{
                    font:'Lato',
                    whiteSpace:'wrap'
                }}>{product.title}</h3>
                <p className="text-white" style={{
                    font:'Lato'
                }}>{product.description}</p>
                <a href="#" className="inline-flex items-center text-white hover:text-blue-300 text-lg font-semibold" style={{
                    font:'Lato'
                }}>
                  Explore More <ArrowUpRight className="ml-2 h-5 w-5" />
                </a>
              </div>
              {/* Image section */}
              <div className="relative w-full h-64 md:h-80 px-8  " style={{
                    width: '448px',
                    height: '159px',
                    marginBlockStart: 'auto',
                    
                
              }}>
                <Image
                  src={product.image}
                  alt={product.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg "
                />
                {/* Overlay image similar to the screenshot */}
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
