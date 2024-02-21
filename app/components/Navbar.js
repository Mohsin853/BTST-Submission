import React from 'react'
import Link from 'next/link'


export default function Navbar() {
  return (
    <nav>
        <h1>BTST Blog App</h1>
        <Link href="/">Dashboard</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/blogs/create">Create Blog</Link>
    </nav>
  )
}
