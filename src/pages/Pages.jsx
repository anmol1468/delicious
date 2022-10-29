import React from 'react'
import Home from './Home'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Cuisine from './Cuisine'
import Searched from '../pages/Searched'
import Recipe from '../components/Recipe'

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/cuisine/:id" element={<Cuisine/>} />
      <Route path="/searched/:search" element={<Searched />} />
      <Route path="/recipe/:id" element={<Recipe/>} />
      <Route path="/cuisine/:id/recipe/:id" element={<Recipe/>} />
      <Route path="/searched/:search/recipe/:id" element={<Recipe />} />
    </Routes>
  )
}

export default Pages