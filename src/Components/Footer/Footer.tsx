import { ArrowRightIcon, Youtube, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">
            <span className="text-cyan-400">IN</span>LIGHTS
          </h2>
          <p className="text-sm">INLIGHTS</p>
          <p className="text-sm">HQ - the garage riyadh, Saudi Arabia</p>
          <p className="text-sm">NSTP, NUST, H-12 Islamabad, ICT 24090 Pakistan</p>
          <p className="text-sm">National Incubation Center for Aerospace Technologies - NICAT</p>
        </div>

        {/* Let's Talk */}
        <div className="space-y-4">
          
        <h1 className="text-sm">Let&apos;s Talk</h1>
          <p className="text-sm">Enter your email and our representatives will reach out to you.</p>
          <div className="flex space-x-2">
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent border border-white text-white p-2 rounded-md"
            />
            <button className="flex items-center bg-white text-black hover:bg-gray-200 font-semibold py-2 px-4 rounded transition duration-300">
              <ArrowRightIcon className="h-4 w-4" />
            </button>
          </div>
          <div className="flex space-x-4 mt-4">
            <button className="bg-transparent border border-white p-2 rounded-full hover:bg-gray-800 transition duration-300">
              <Youtube className="h-4 w-4 text-white" />
            </button>
            <button className="bg-transparent border border-white p-2 rounded-full hover:bg-gray-800 transition duration-300">
              <Linkedin className="h-4 w-4 text-white" />
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>About us</li>
            <li>Inlights Security</li>
            <li>Inlights Traffic</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Solutions</h3>
          <ul className="space-y-2 text-sm">
            <li>Web Development</li>
            <li>Product Design</li>
            <li>AI Automation</li>
            <li>Computer Vision</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">support@inlights.com</p>
        <p className="text-sm mt-4 md:mt-0">© 2024 Inlights. All rights reserved</p>
      </div>
    </footer>
  )
}
