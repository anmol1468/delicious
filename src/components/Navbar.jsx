import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <Nav>
      <NavLink to='/'>
        <h2>Delicious</h2>
      </NavLink>
    </Nav>
  )
}

export default Navbar


const Nav = styled.div`
padding: 1.26rem 0;

  a {
    text-decoration: none;
  }
  
  h2 {
    font-size: 2.15rem;
    color: #000;
    font-family: 'Fasthand', cursive, sans-serif;
  }
`