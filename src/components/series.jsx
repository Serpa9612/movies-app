import React, {useState} from "react"
import { styled } from "styled-components"
import Modal from "./Modal"

const SeriesStyled = styled.div` 

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
function Series({

title,
releaseYear,
description,
programType,
images

}){
    const [modalState, chanceModalState] = useState(false);
    
    return(
        
        <SeriesStyled>
        <div className="details">             
            <h2>{title}</h2>            
            <div className="Modal">
            <Modal 
            state = {modalState}
            chanceState = {chanceModalState}
            >
            <h2>{title}</h2>            
            <p>{description}</p>            
            <p>{releaseYear}</p>            
            <p><strong>{programType}</strong></p>            
            <img src={images}></img> 
            </Modal>            
            <button onClick={()=> chanceModalState(!modalState)}>
            <img  loading="lazy" src={images} alt="https://i.ibb.co/bgKsXsn/Capture2.png"></img> 
            </button> 
            </div>
        </div>      
        </SeriesStyled>
    )
}

export default Series