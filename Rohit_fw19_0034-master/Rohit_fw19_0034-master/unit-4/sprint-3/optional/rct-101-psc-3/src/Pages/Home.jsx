
import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

const Home = () => {

    const { toggleAuth } = useContext(AuthContext)

  return (
    <div>
      <h1>Home</h1>
      <button onClick={toggleAuth}>LogOut</button>
    </div>
  )
}

export default Home
