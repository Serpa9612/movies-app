import React, {useEffect, useState} from "react"
import { styled } from "styled-components"
import Movie from "./movie"
import {useSelector, useDispatch} from 'react-redux'
import Serie from "./series"

const SeriesListStyled = styled.div`
    display: grid;
    grid-row-gap: 2.3em;
    grid-template-columns:
    background: var(--background);
    justify-content: center;
    border: 1px solid red;
    padding: 0.01em 0.01em;
`
function SeriesList(){
    const dispatch = useDispatch()
    const seriesList = useSelector((state) => state.seriesList)
    console.log('The state of my app is:, ', seriesList)
    //const [seriesList, setSeriesList] = useState([])
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
            //setSeriesList(data.entries)
            //console.log(list.entries)
        })
        .catch(()=>{
            console.log("We have an error")
        })
    }, [dispatch])
        return(
            <SeriesListStyled>
                {                    
                    seriesList.map(({title, releaseYear, description, programType, images})=>{
                        return(
                        <Serie
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
                         

            </SeriesListStyled>
        )
    }
    
    export default SeriesList