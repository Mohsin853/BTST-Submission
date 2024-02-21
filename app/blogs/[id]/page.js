import React from 'react'
import { notFound } from "next/navigation"

export const dynamicParams = true

export async function generateStaticParams(){
    const res = await fetch('http://localhost:4000/blogs')

    const blogs = await res.json()

    return blogs.map((blog)=>({
        id: blog.id
    }))
}

async function getBlogs(id){
    
    await new Promise(resolve => setTimeout(resolve, 1000))

    const res = await fetch('http://localhost:4000/blogs/'+id,{
        next:{
            revalidate: 60 
        }
    })

    if (!res.ok){
        notFound()
    }
    return res.json()
}

export default async function BlogDetails({params}) {

  const blog =await getBlogs(params.id)

  return (
    <main>
        <nav>
            <h2>Blog in Detail</h2>
        </nav>
        <div className="card">
            <h3>{blog.title}</h3>
            <small>Written by {blog.author} on {blog.date}</small>
            <p>{blog.body}</p>
        </div>
    </main>
  )
}
