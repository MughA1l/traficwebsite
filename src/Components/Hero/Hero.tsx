import React from 'react';
import Image from 'next/image'
import { ArrowRightIcon } from 'lucide-react'
import './Hero.css'

export default function Component() {
    const trustedPartners = [
      { name: '', logo: '/assets/awards/Gaia 1.png' },
      { name: 'MDP', logo: '/assets/awards/ntdp for black bg 1.png' },
      { name: 'SDAIA', logo: '/assets/awards/Sdaia for black bg 1.png' },
      { name: 'AL KHOBAR', logo: '/assets/awards/Garage for Black bg 1.png' }
    ]
    const awards = [
        { name: '', logo: '/assets/awards/Gaia 1.png' },
        { name: 'MDP', logo: '/assets/awards/ntdp for black bg 1.png' },
        { name: 'SDAIA', logo: '/assets/awards/Sdaia for black bg 1.png' },
        { name: 'AL KHOBAR', logo: '/assets/awards/Garage for Black bg 1.png' }
    ]

  return (
    <div className="parents">
      <section className="hero relative bg-[#001a2c] text-white min-h-screen flex flex-col justify-between p-8 md:p-12 overflow-hidden ml-1">
        <div className="relative z-10 max-w-2xl mt-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4  ">
            Leveraging Artificial Intelligence to Make Cities Smarter
          </h1>
          <p className="text-lg md:text-xl mb-8">
            AI is the Core of Everything We do
          </p>
          <button className="glow-button bg-[#38b2ac] hover:bg-[#319795] text-white font-bold py-2 px-4 rounded flex items-center">
            Contact Us
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </button>
        </div>

        <div className="py-12 px-4 md:px-8 text-white relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between gap-8" style={{
                marginTop:'8%'
            }}>
              {/* Trusted By Section */}
              <div className="w-full md:w-1/2  bg-opacity-80 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl  mb-6 text-white" style={{textShadow: '0 0 10px rgba(255,255,255,0.5)'}}>Trusted By</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {trustedPartners.map((partner) => (
                    <div key={partner.name} className="flex items-center justify-center p-2 rounded">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={100}
                        height={50}
                        className="max-w-full h-auto"
                        style={{filter: 'brightness(1.2) contrast(1.2)'}}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Awards Section */}
              <div className="w-full md:w-1/2  bg-opacity-80 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl  mb-6 text-white" style={{textShadow: '0 0 10px rgba(255,255,255,0.5)'}}>Awards</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {awards.map((award) => (
                    <div key={award.name} className="flex items-center justify-center  p-2 rounded">
                      <Image
                        src={award.logo}
                        alt={award.name}
                        width={100}
                        height={50}
                        className="max-w-full h-auto"
                        style={{filter: 'brightness(1.2) contrast(1.2)'}}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-image"></div>

        {/* Bubbles on the right side */}
        <div className="bubbles">
          {/* Bubble elements can be added here if needed */}
        </div>
      </section>
    </div>
  )
}