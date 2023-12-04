import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Aboute from '../nav/Aboute'
import Home from '../nav/HOme'
import Serveres from '../nav/Serveres'

export default function Bar() {
  return (
    <div>
        <Link to={'/'}>home</Link>
        <Link to={'/about'}>Aboute</Link>
        <Link to={'/server'}>Serveres</Link>
        <h1>hi rajan singh</h1>
      
    </div>
  )
}
