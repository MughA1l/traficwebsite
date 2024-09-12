"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    quote: "Inlights Solution has transformed our campus management. With real-time tracking and automated scheduling, our facilities are always in top condition, allowing us to focus on educating our students",
    name: "Cameron Williamson",
    title: "CEO",
    image: "/assets/testinomial/testi.png?height=300&width=300"
  },
  {
    quote: "The AI-powered insights provided by Inlights have revolutionized our decision-making process. We've seen a significant improvement in resource allocation and student satisfaction.",
    name: "Emily Rodriguez",
    title: "Director of Operations",
    image: "/assets/testinomial/testi.png?height=300&width=300"
  },
  {
    quote: "Implementing Inlights Solution has streamlined our administrative tasks, giving our staff more time to focus on student needs. It's been a game-changer for our institution.",
    name: "Michael Chang",
    title: "Dean of Student Affairs",
    image: "/assets/testinomial/testi.png?height=300&width=300"
  },
  {
    quote: "The real-time data and analytics from Inlights have helped us identify areas for improvement we never knew existed. Our campus efficiency has improved dramatically.",
    name: "Sarah Johnson",
    title: "Facilities Manager",
    image: "/assets/testinomial/testi.png?height=300&width=300"
  }
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className=" text-white py-16 px-4 relative mt-10" style={{
        background: 'rgba(19, 23, 28, 1)'
    }}>
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg md:text-xl mb-8">
          {testimonials[currentIndex].quote}
        </p>
        <div className="flex flex-col items-center mb-8">
          <Image
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            width={100}
            height={100}
            className="rounded-full mb-4"
            quality={100} // Ensure high-quality rendering
          />
          <h3 className="font-semibold">{testimonials[currentIndex].name}</h3>
          <p className="text-gray-400">{testimonials[currentIndex].title}</p>
        </div>
        <div className="flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-gray-600"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
      <button
        onClick={prevTestimonial}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 rounded-full p-2"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextTestimonial}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 rounded-full p-2"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  )
}
