import React from 'react'
import Link from 'next/link'

export default function Notfound() {
  return (
    <main className="text-center">
    <h2 className="text-3xl">There was a problem </h2>
    <p>We could not find the blog you were looking for :(</p>
    <p>Go back to the main <Link href="/blogs">Blogs Page</Link></p>

    </main>

  )
}
