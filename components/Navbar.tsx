import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><strong>Wine App</strong></li>
      </ul>
   
      <ul>
        <button className='ml-2 px-2 py-1 bg-red-500 text-white rounded'>
        <a href="/wines">List of Wines</a>
        </button>
     
      </ul>
    </nav>
  )
}
