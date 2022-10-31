import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import { useNavigate } from "react-router-dom";

function Cuisine() {

  const params = useParams();

  const navigate = useNavigate();

  const [cuisine, setCuisine] = useState([]);

  useEffect(() => {
      getCuisine(params.id) 
    },[params.id])


  const getCuisine = async function (name) {

    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=025b5d10aa334f3aa1960f6f0152ca90&number=9&cuisine=${name}`);

    const data = await api.json();

    const recipes = await data.recipes;

    setCuisine(recipes)

  }

  return (
    <Grid>
      {cuisine.map((item) => {
        return (
          <Card onClick={() => {
            navigate(`recipe/${item.id}`)
          }} key={item.id}>
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
          </Card>
        )
      })}
    </Grid>
  )
}

export default Cuisine

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 3rem;
  padding-top: 3rem;
`

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem; 
  }
`