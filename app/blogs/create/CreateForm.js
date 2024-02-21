"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CreateForm() {
  const router = useRouter()

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('')
  const [imageUrl, setimageUrl] = useState('')
  const [date, setDate] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e)  => {
    e.preventDefault()
    setIsLoading(true)

    const newBlog = { title, body, author, imageUrl, date }

    const res = await fetch('http://localhost:4000/blogs', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newBlog)
    })

    if (res.status === 201) {
      router.refresh()
      router.push('/blogs')
    }
    
  }

  return (
    <form onSubmit={handleSubmit} className="w-1/2">
      <label>
        <span>Title:</span>
        <input
          required 
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Body:</span>
        <textarea
          required
          onChange={(e) => setBody(e.target.value)}
          value={body}
        />
      </label>
      <label>
        <span>Author Name:</span>
        <input
          type="text"
          required
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        />
      </label>
      <label>
        <span>Profile Pic URL:</span>
        <textarea
          required
          onChange={(e) => setimageUrl(e.target.value)}
          value={imageUrl}
        />
      </label>
      <label>
        <span>Date:</span>
        <input
          required 
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </label>
      <button 
        className="btn-primary" 
        disabled={isLoading}
      >
      {isLoading && <span>Adding...</span>}
      {!isLoading && <span>Add Blog</span>}
    </button>
    </form>
  )
}