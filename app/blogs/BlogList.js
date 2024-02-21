"use client"

import React from 'react';
import Link from 'next/link';
import {useState} from 'react'

async function getBlogs(){


    const res = await fetch('http://localhost:4000/blogs',{
        next:{
            revalidate: 0 // use 0 to opt out of using cache
        }
    })
    return res.json()
}

export default async function BlogList() {
    const [search, setSearch] = useState('') 
    
    const blogs = await getBlogs()

    await new Promise(resolve => setTimeout(resolve, 1000))

    return (
        <div>
            <form style={{ marginRight: '-10px' }}>
            <label>
                <input
                required 
                type="text"
                placeholder="search by keyword"
                onChange={(e)=> setSearch(e.target.value)}
                
                />
            </label>

            </form>
            

            {blogs.filter((blog)=>{
                    const includesSearch = blog.title.toLowerCase().includes(search.toLowerCase());
                    console.log(blog.title, search, includesSearch);
                    return search.trim() === '' || includesSearch;
                

            }).map((blog) =>(
                <div key={blog.id} className = "card my-5">
                    <div className="rounded-full overflow-hidden w-16 h-16 mt-4">
                    <img
                        src={blog.imageUrl}
                        alt={blog.title}
                        style={{ width: '100%', height: '100%' }}
                        className="object-cover object-center"
                    />
                    </div>
                    
                    <h3>{blog.title}</h3>
                    <p>{blog.body.slice(0,200)}...<Link href={`/blogs/${blog.id}`}>Read More</Link></p>
                    <h4><small>Published by {blog.author} on {blog.date} </small></h4>

                </div>
            ))}
            {blogs.length === 0 && <p className="text-center">There are no blogs so far!</p>}

        </div>
    
  )
}
