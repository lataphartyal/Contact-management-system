import React from 'react'
import { Link } from 'react-router-dom'
export default function Nav() {
  return (
    <div>
    <nav className="bg-white-500 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl text-black font-semibold">My App</Link>
          <div className="space-x-4">
            <Link to="/" className="text-black hover:text-gray-300">Contacts</Link>
            <Link to="/add" className="text-black hover:text-gray-300">Add Contact</Link>
          </div>
        </div>
      </div>
    </nav>
    <hr/>
    </div>
  )
}
