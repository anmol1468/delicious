import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

function Searched() {

  const params = useParams()

  const navigate = useNavigate();
  
  const [searched, setSearched] = useState([]);

  useEffect(() => {
      getSearched(params.search)
    },[params.search])


  const getSearched = async function (name) {

    const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${name}&apiKey=e6c1d7c799f5422a9e00ab32b1e9a871&number=8`);

    const data = await api.json();

    const recipes = await data.results;

    setSearched(recipes)

  }

  return (
    <Grid>
      {searched.map((item) => {
        return (
          <Card onClick={() => {
            navigate(`recipe/${item.id}`)
          }}  key={item.id}>
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
          </Card>
        )
      })}
    </Grid>
  )
}

export default Searched



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