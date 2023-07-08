import React from 'react'
import { styled } from "styled-components"
import {BrowserRouter , Link, Route} from 'react-router-dom';
import MovieList from './movie-list';
import SeriesList from './series-list';

const AccesStyled = styled.div`

img{  
    
    border-radius: 3%;  
    width: 35%;
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
    <BrowserRouter>
        <AccesStyled>
            
                <Link to ="./movie-list.js">
                    Movies
                </Link>  
                <img src="https://img.freepik.com/vector-premium/clapper-pelicula-pelicula-icono-diseno_24877-23150.jpg?w=2000"     alt="This is a one picture about movies" /> 
            
            
              
            <Link to ="./series-list.js" >
                Series
             </Link>         
             <img src="https://img.freepik.com/vector-premium/clapper-pelicula-pelicula-icono-diseno_24877-23150.jpg?w=2000"     alt="This is a one picture about series" />   
            
            <Route path='./movie-list.js'>
                <MovieList/>
            </Route>
            <Route path='./series-list.js'>
                <SeriesList/>
            </Route>            
        </AccesStyled>
    </BrowserRouter>
)}

export default Acces