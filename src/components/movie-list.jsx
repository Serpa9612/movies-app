import React, {useEffect} from "react"
import { styled } from "styled-components"
import Movie from "./movie"
import {useSelector, useDispatch} from 'react-redux'

const MovieListStyled = styled.div`
    display: grid;
    grid-row-gap: 2.3em;
    grid-template-columns:   
    grid-auto-flow: columns;
    grid-column-gap: 80px;
    grid-template-columns: repeat(auto-fill, minMax(0, 264px));
    background: var(--background);
    justify-content: center;
    border: 1px solid red;
    padding: 0.01em 0.01em;
`
function MovieList(){
    const dispatch = useDispatch()
    const movieList = useSelector((state) => state.movieList)

    const resultsQuery = movieList.filter((type)=>{    
        if(type.programType == "movie" && type.releaseYear >= 2010){
            return true;        
        }
    })
    console.log(resultsQuery); 

       
    
    //console.log('The state of my app is:, ', movieList)
    //const [movieList, setMovieList] = useState([])
    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json")
        .then((response)=>{
           return response.json()
        })
        .then((list)=>{
            dispatch({
                type: 'SET_MOVIE_LIST',
                payload: list.entries
            })
            //setMovieList(data.entries)
            //console.log(list.entries)
        })
        .catch(()=>{
            console.log("We have an error")
        })
    }, [dispatch])
        return(
            <MovieListStyled>
                {                    
                    resultsQuery.map(({title, releaseYear, description, programType, images})=>{
                        
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