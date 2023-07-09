import React, {useState} from "react"
import { styled } from "styled-components"
import Modal from "./Modal"

const MovieStyled = styled.div`
 
   
    
    height: 794px 
    border-radius: 5px;
    margin: 1em;
    box-shadow: 0 0 7px 2px rgba(0,0,0,.03);

    button {
        &:hover .details{
        cursor: pointer;
        border-radius: 0 0 5px 5px;
        border: 1px solid gray;
    }
}
    
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
function Movie({    

title,
releaseYear,
description,
programType,
images
}){
    const [modalState, chanceModalState] = useState(false);
    return(
        
        <MovieStyled>
        <div className="details"> 
            <h2 className="Big"><strong>Movie</strong></h2>
            <h2>{title}</h2>
            <p>{releaseYear}</p>
            <div className="Modal">
            <Modal
                state = {modalState}
                chanceState = {chanceModalState}
            >
             <h2>{title}</h2>              
            <p>{description}</p>
            </Modal>
            </div>            
            <p><strong>{programType}</strong></p>
            <button onClick={()=> chanceModalState(!modalState)}>
            <img  loading="lazy" src={images}></img> 
            </button> 
        </div>      
        </MovieStyled>
    )
}

export default Movie