import React from 'react'
import { styled } from "styled-components"
import SeriesList from './series-list'
import MovieList from './movie-list'


const AccesStyled = styled.div`

img{  
    
    border-radius: 3%;  
    width: 30%;
    float: left;
    margin-left: 10%;
    text-align: center;
    object-fit: cover;               
}
border: soli;
box-size: 10 rem;
`

function Acces() {

  return (
    
        <AccesStyled>          
            

            


            {/* <img src="https://img.freepik.com/vector-premium/clapper-pelicula-pelicula-icono-diseno_24877-23150.jpg?w=2000"     alt="This is a one picture about movies" /> 
            
            
              
                   
             <img src="https://img.freepik.com/vector-premium/clapper-pelicula-pelicula-icono-diseno_24877-23150.jpg?w=2000"     alt="This is a one picture about series" />    */}
            
                       
        </AccesStyled>
    
)}

export default Acces