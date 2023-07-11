import React, {useState,useEffect} from 'react'
import { styled } from "styled-components"
import Loading from './Loading'




const AccessStyled = styled.div`
@media(max-width: 759px){
display: grid;
grid-row-gap: 1rem;
grid-template-columns:   
grid-auto-flow: columns;
grid-column-gap: 1rem;
grid-template-columns: repeat(auto-fill, minMax(0, 125px)); 
border-radius: 5px;
margin: 2rem;
box-shadow: 0 0 7px 2px rgba(0,0,0,.03);
}
@media(min-width: 759px){
    display: grid;
    grid-row-gap: 2rem;
    grid-template-columns:   
    grid-auto-flow: columns;
    grid-column-gap: 1rem;
    grid-template-columns: repeat(auto-fill, minMax(0, 150px)); 
    border-radius: 5px;
    margin: 5rem;
    box-shadow: 0 0 7px 2px rgba(0,0,0,.03);
    }


img{      
    width: 100%;    
    object-fit: cover; 
    &:hover {
        cursor: pointer;
        border-radius: 0 0 5px 5px;
        border: 1px solid gray;
    } 
                
}


`

function Access() {
    const [loading, setLoading] = useState();
    const cambiarEstado=()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);    
        }, 5000)
    }


    if(loading){
        return(
            <Loading/>
        )
    }else{   

  return (
    
        <AccessStyled>
            
            
            <a onClick={()=>cambiarEstado()} href='/Series'>            
            <img className="img1" src="https://i.ibb.co/4fkTz0H/Capture1.png"     alt="This is a one picture about movies" title='Series'/>  
            Popular Series
            </a> 
            
                  
            <a onClick={()=>cambiarEstado()} href='/Movies'>            
             <img src="https://i.ibb.co/bgKsXsn/Capture2.png"     alt="This is a one picture about series" title='Series'/>  

             Popular Movies
             </a>            
                       
        </AccessStyled>
           
    
);}}

export default Access