import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><strong>Wine App</strong></li>
      </ul>
      <ul>
        <li>
            <button>
            <a href="/entry/create" >New Entry</a>
            </button>


           
        </li>

      </ul>
      <ul>
      <Link href="/wines">Wines</Link>
      </ul>
    </nav>
  )
}
