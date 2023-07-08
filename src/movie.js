import React from "react"
import { styled } from "styled-components"

const MovieStyled = styled.div`
    width: 305px;
    height: 794px 
    border-radius: 5px;
    margin: 1em;
    box-shadow: 0 0 7px 2px rgba(0,0,0,.03);
    
    img{        
        width: 100%;
        object-fit: cover;               
    }
    @media screen and (min-width: 768px){
        img:hover{          
          background-color: #555E65;
        }
      }

    .Big{
        font-size: 2.3em;
        padding: 0.2em;
        margin: 0.2em;
    }

    h2{
        font-size: 1.3em;
    }
    p{
        font-size: 1em;
    }
    
`
function Movie({
title,
releaseYear,
description,
programType,
images
}){
    return(
        <MovieStyled>
            <h2 className="Big"><strong>Movie</strong></h2>
            <h2>{title}</h2>
            <p>{releaseYear}</p>
            <p>{description}</p>
            <p><strong>{programType}</strong></p>
            <img  loading="lazy" src={images}></img>        
        </MovieStyled>
    )
}

export default Movie