import { ArrowRightIcon } from 'lucide-react'
import Image from "next/image"

export default function Component() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: 'url("/assets/Vector 2.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
     <div className="relative flex flex-col lg:flex-row w-full max-w-10xl bg-black rounded-xl overflow-hidden" style={{
  minHeight: '60vh',
  maxWidth: '1200px',
  width: '95%',
  borderRadius: '41.44px'
}}>
  {/* Main Content */}
  <div className="flex flex-col justify-center p-8 lg:w-1/2 z-10">
    <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold mb-6 text-white">
      Ready to Boost Your Efficiency?
    </h1>
    <button className="flex items-center w-40 bg-teal-500 hover:bg-teal-400 text-white font-semibold py-2 px-4 rounded transition duration-300 shadow-[0_0_10px_rgba(13,148,136,0.5)] hover:shadow-[0_0_20px_rgba(13,148,136,0.8)]">
      Contact Us <ArrowRightIcon className="ml-2 h-4 w-4" />
    </button>
  </div>

  {/* Image on Right */}
  <div className="lg:w-1/2 z-10 py-8 px-4 lg:py-0 lg:px-0 lg:-ml-12 lg:-mb-33 mt-5">
    <div className="relative aspect-square mx-auto lg:mx-0" style={{
      maxWidth: '388.9px',
      borderRadius: '11.84px',
      marginBottom: '12%',
      marginTop: '12%'
    }}>
      <div className="absolute inset-0 lg:ml-[22%] mt-6"style={{
                width: '305.49px',
                height: '291.9px',
                borderRadius: '11.84px 0px 0px 0px'
            


          }}>
        <Image
          src="/assets/rect.png"
          alt="Two men collaborating, one with a laptop and one with a notebook"
          layout="fill"
          objectFit="cover"
          className="rounded-lg " 
        />
      </div>
    </div>
  </div>
</div>
    </div>
  )
}