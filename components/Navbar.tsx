import React from 'react'

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
    </nav>
  )
}
