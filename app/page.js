import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Dashboard</h1>
      <p>Hi!</p>
      <p>I am Mohsin Shanavas. Welcome to my blog app submission for BTST. I have coded this using Next.Js. Dummy data for blog posts have been added to db.json in the _data directory. You can also create your own blog posts by moving to 'Create Blog' page. Feel free to surf through the page.</p>
      <p>Hoping to hear from you soon :)</p>

      <div className="flex justify-center my-8">
        <Link href="/blogs">
          <button className="btn-primary">View Blogs</button>
        </Link>
      </div>
    </main>
  )
}