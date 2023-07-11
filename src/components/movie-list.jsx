import React, {useEffect} from "react"
import { styled } from "styled-components"
import Movie from "./movie"
import {useSelector, useDispatch} from 'react-redux'
import swal from "sweetalert"




const MovieListStyled = styled.div`
    display: grid;
    grid-row-gap: 2.3em;
    grid-template-columns:   
    grid-auto-flow: columns;
    grid-column-gap: 80px;
    grid-template-columns: repeat(auto-fill, minMax(0, 264px));
    background: var(--background);
    justify-content: center;
    padding: 0.01em 0.01em;


    #loading-frame {
        padding-top: 30px;
    }

`
function MovieList(){
    const showAlert =()=>{
        swal("Oops.., something went wrong ")
    }

    const dispatch = useDispatch()
    const movieList = useSelector((state) => state.movieList)

    const resultsQuery = movieList.filter((type)=>{    
        if(type.programType == "movie" && type.releaseYear >= 2010){
            return true;        
        }
    })
    
    const orderQuery = resultsQuery.sort((a,b)=>{
        a = a.title;
        b = b.title;
        a = a.toLowerCase();
        b = b.toLowerCase();
        if(a == b){
            return 0;
        }else if(a < b){
            return -1;
        }else{
            return 1;
        }
    })

    const result = orderQuery.slice(0,20);       
    
    
        useEffect(()=>{
        fetch("http://192.168.1.45:8000/programs")
        //fetch("https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json")
        .then((response)=>{            
           return response.json()
        })
        .then((list)=>{
            document.getElementById("loading-frame").style.display = "none";
            dispatch({
                type: 'SET_MOVIE_LIST',
                payload: list.entries
            })
            
        })
        .catch(()=>{
            showAlert();
            document.getElementById("loading-frame").style.display = "none";
        })
    }, [dispatch])
        return(
            <MovieListStyled>
                <div id="loading-frame">
                <h1>Loading...</h1>
                    <div>
                        <img src="../loading.gif" />
                    </div>
                 </div>
                {                    
                    result.map(({title, releaseYear, description, programType, images})=>{
                        
                        return(
                        <Movie
                            title = {title}
                            key = {title}
                            releaseYear = {releaseYear}
                            description = {description}
                            programType = {programType}
                            images = {images['Poster Art'].url}
                        /> 
                                 
                        )
                    })
                }
            </MovieListStyled>
        )
    }
    
    export default MovieList