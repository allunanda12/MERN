import React from 'react'
import '../App.css'

const Home = ({ name = 'Guest' }) => {
  return (
    <div className="container">
      <h1>Home</h1>
      <p>Welcome, {name}!</p>
      <p>
        Welcome to our website. This is the home page where you can find information about our company and services.
      </p>
      <p>
        We provide quality services and solutions to meet your needs. Feel free to explore our website and learn more about what we offer.
      </p>
      <p>
        Use the navigation bar to visit different sections of our website including About, Contact, and Services pages.
      </p>
    </div>
  )
}

export default Home