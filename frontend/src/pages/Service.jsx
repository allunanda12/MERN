import React, { useContext } from 'react'
import '../App.css'
import ThemeContext from '../Context/ThemeContext'
import AuthContext from '../Context/AuthContext'

const Service = () => {
  const themeValue = useContext(ThemeContext)
  const authValue = useContext(AuthContext)
  const theme = themeValue?.theme ?? 'light'
  const user = authValue?.user ?? null

  return (
    <div className="container">
      <h1>Service</h1>
      <p><strong>Theme:</strong> {theme}</p>
      {user ? (
        <>
          <p><strong>User ID:</strong> {user.id}</p>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </>
      ) : (
        <p>Not logged in. User data will appear here when you log in.</p>
      )}
    </div>
  )
}

export default Service