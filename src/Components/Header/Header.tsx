"use client"

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'
import { menuData, MenuKey } from './menudata'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<MenuKey | ''>('')
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = (dropdown: MenuKey) => {
    setActiveDropdown(activeDropdown === dropdown ? '' : dropdown)
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown('')
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const renderSubItems = (data: typeof menuData[MenuKey], key: MenuKey) => {
    if (key === 'products') {
      const midPoint = Math.ceil(data.subItems.length / 2)
      return (
        <div className="flex">
          <div className="w-1/2 border-r border-gray-200">
            {data.subItems.slice(0, midPoint).map((item, index) => (
              <Link
                key={item.name}
                href={item.path}
                className="block px-4 py-2 text-sm text-gray-900 hover:bg-[#0E92AE] hover:text-white transition-colors duration-200"
                role="menuitem"
                style={{
                  animation: `slideIn 0.3s ease-out ${index * 0.05}s both`
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="w-1/2">
            {data.subItems.slice(midPoint).map((item, index) => (
              <Link
                key={item.name}
                href={item.path}
                className="block px-4 py-2 text-sm text-gray-900 hover:bg-[#0E92AE] hover:text-white transition-colors duration-200"
                role="menuitem"
                style={{
                  animation: `slideIn 0.3s ease-out ${(index + midPoint) * 0.05}s both`
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )
    } else {
      return data.subItems.map((item, index) => (
        <Link
          key={item.name}
          href={item.path}
          className="block px-4 py-2 text-sm text-gray-900 hover:bg-[#0E92AE] hover:text-white transition-colors duration-200"
          role="menuitem"
          style={{
            animation: `slideIn 0.3s ease-out ${index * 0.05}s both`
          }}
        >
          {item.name}
        </Link>
      ))
    }
  }

  return (
    <nav className="bg-white shadow-sm" style={{
      borderBottom: '2px solid #E5EAEE'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-black">
              <h2 className="text-2xl font-bold">
                <span className="text-cyan-400">IN</span>LIGHTS
              </h2>
            </div>
          </div>
          <div className="hidden md:block" ref={dropdownRef}>
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-gray-600 hover:text-blue-600 px-3 py-2">
                Home
              </Link>
              {Object.entries(menuData).map(([key, data]) => (
                <div key={key} className="relative">
                  <button
                    onClick={() => toggleDropdown(key as MenuKey)}
                    className="text-gray-600 hover:text-blue-600 px-3 py-2 flex items-center"
                  >
                    {data.name}
                    <ChevronDown className={`h-4 w-4 ml-1 transition-transform duration-200 ${activeDropdown === key ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === key && (
                    <div 
                      className="absolute z-10 left-0 mt-2 w-64 rounded-md shadow-lg bg-white overflow-hidden"
                      style={{
                        animation: 'fadeIn 0.3s ease-out',
                        border: '2px solid #0E92AE',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                      }}
                    >
                      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {renderSubItems(data, key as MenuKey)}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="px-4 py-2 border rounded hover:text-white transition-colors"
              style={{
                border: '1px solid #0E92AE',
                color: '#0E92AE'
              }}
            >
              Contact Us
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="text-gray-600 hover:text-blue-600 block px-3 py-2">
              Home
            </Link>
            {Object.entries(menuData).map(([key, data]) => (
              <div key={key} className="relative">
                <button
                  onClick={() => toggleDropdown(key as MenuKey)}
                  className="text-gray-600 hover:text-blue-600 block px-3 py-2 w-full text-left flex justify-between items-center"
                >
                  {data.name}
                  <ChevronDown className={`h-4 w-4 ml-1 transition-transform duration-200 ${activeDropdown === key ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === key && (
                  <div className="pl-4" style={{ animation: 'fadeIn 0.3s ease-out' }}>
                    {renderSubItems(data, key as MenuKey)}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="block px-4 py-2 text-center text-[#0E92AE] border border-[#0E92AE] rounded hover:bg-[#0E92AE] hover:text-black transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </nav>
  )
}