import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import {motion, useAnimation} from 'framer-motion'

function Recipe(id) {

  const [recipe, setRecipe] = useState('');

  const [displayInstructions, setDisplayInstructions] = useState(true);

  const setDisplay = function () {
    setDisplayInstructions(!displayInstructions)
  }

  const params = useParams();

  const animate1 = useAnimation();
  const animate2 = useAnimation();

  useEffect(() => {
    getRecipe()
  },[])

  const getRecipe = async function () {

    const api = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=025b5d10aa334f3aa1960f6f0152ca90`);

    const data = await api.json();

    setRecipe(data)
    
  }

  return (
    // <div dangerouslySetInnerHTML={{__html: recipe.instructions}}></div>
    <motion.div
    initial={{
      opacity:0
    }}

    animate={{
      opacity:1
    }}

    transition={{
      duration:1
    }}
    >
      <Container>
      <div className='image'>
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt="" />
      </div>
      <div className="info">
        <button onClick={setDisplay}>Instructions</button>
        <button onClick={setDisplay}>Ingredients</button>
        <div className='data'>
          <motion.div 
          animate={animate1}
          style={{display: displayInstructions? 'initial': 'none'}}
          className="instructions" dangerouslySetInnerHTML={{__html: recipe.instructions}} ></motion.div>
          {/* <div>{recipe.instructions}</div> */}
          <br />
          <br />
          <br />
          <br />
          <motion.div
          animate={animate2}
          style={{display: displayInstructions? 'none': 'initial'}}
          >
            {recipe.extendedIngredients?.map((item) => {
              return <li key={item.id}>{item.original}</li>
            })}
          </motion.div>
          </div>
        
      </div>
      </Container>
    </motion.div>
  )
}

export default Recipe


const Container = styled.div`
  /* display: grid;
  
  grid-template-columns: 1fr 1fr; */
  display: flex;
  position: relative;
  padding: 3rem 0;

  .image {
    width: 50%;

    img {
      width: 100%;
    }
  }

  .info {
    width: 50%;
    padding: 1rem 2rem;
  }
`