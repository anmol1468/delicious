import React, { useState } from 'react'
import { useEffect } from 'react';
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import { useNavigate } from "react-router-dom";


function Veggie() {

  const [veggie, setVeggie] = useState();

  const navigate = useNavigate();
  
  useEffect(() => {
    getVeggie()
  }, [])


  const getVeggie = async () => {

  const check = localStorage.getItem('veggie');

  if (check) {
    setVeggie(JSON.parse(check))
  } else {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=025b5d10aa334f3aa1960f6f0152ca90&number=9&tags=vegetarian`)
    
    const data = await api.json();

    localStorage.setItem('veggie', JSON.stringify(data.recipes))

    setVeggie(data.recipes)
  }
  }


  return (
    <div>
      <Wrapper>
      <h3>Our Veggie Picks</h3>
    <Splide options={{
      perPage:4,
      perMove:1,
      arrows: false,
      drag: 'free',
      pagination: false,
      gap: '2rem'
    }}>
      
      {veggie?.map((recipe) => {
        return (
          <SplideSlide key={recipe.id}>
        
          <Card onClick={() => {
            navigate(`recipe/${recipe.id}`)
          }}>
            <h3>{recipe.title.length<40? recipe.title: recipe.title.slice(0,40)+ ' . . .'}</h3>
            <img src={recipe.image} alt={`${recipe.title} image`} />
            <Gradient />
          </Card>
          </SplideSlide>
        )
      })}
    </Splide>
    </Wrapper>
    </div>
  )
}

export default Veggie



const Wrapper = styled.div`
  margin: 3rem 0;
`

const Card = styled.div`
  min-height: 12.4rem;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    object-fit: cover;
    left: 0;
    border-radius: 0.6rem;
  }

  h3 {
    position: absolute;
    top: 60%;
    left: 10%;
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    z-index: 10;
  }
`

const Gradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0));
  z-index: 3;
`