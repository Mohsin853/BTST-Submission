import React, { Suspense } from 'react'
import BlogList from './BlogList'
import Loading from '../loading'

export default function Blogs() {
  return (
    <main>
        <nav>
            <div>
                <h1><big>Blogs</big></h1>
                <p>Blogs Posted So Far !</p>
            </div>
        </nav>
        <Suspense fallback={<Loading/>}>
            <BlogList/>
       </Suspense>

    </main>
  )
}
