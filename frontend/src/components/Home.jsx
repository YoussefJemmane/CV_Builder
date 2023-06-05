import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  
  return (
    <div>
      <Navbar/>
      <div className="container mx-auto p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">CV Builder</h1>
        <p className="text-gray-600">
          Create a professional resume in minutes with our easy-to-use CV builder.
        </p>
      </header>
      <main className="text-center">
        <form action="/create" method="get">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
          Start Building
        </button>
        <p>You don't have an account</p>
        <a href="/register" className="text-blue-500 hover:text-blue-700">Register</a>
        </form>
        
      </main>
    </div>
    </div>
  )
}

export default Home