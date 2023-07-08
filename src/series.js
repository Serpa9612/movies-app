import React from "react"
import { styled } from "styled-components"

const SeriesStyled = styled.div`
    width: 305px;
    height: 794px 
    border-radius: 5px;
    margin: 1em;
    box-shadow: 0 0 7px 2px rgba(0,0,0,.03);
    
    img{
        width: 100%;
        object-fit: cover;        
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
function Series({
title,
releaseYear,
description,
programType,
images
}){
    return(
        <SeriesStyled>
            <h2 className="Big"><strong>Series</strong></h2>
            <h2>{title}</h2>
            <p>{releaseYear}</p>
            <p>{description}</p>
            <p><strong>{programType}</strong></p>
            <img loading="lazy" src={images}></img>        
        </SeriesStyled>
    )
}

export default Series