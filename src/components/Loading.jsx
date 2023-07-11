import React, {useEffect} from "react"
import { styled } from "styled-components"
import {Spinner} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const LoadingStyled = styled.div`
    
`
function Loading(){

    

    return(
    <LoadingStyled> 
        <h1>Loading...</h1>
        <div>
            <Spinner color="primary"/>   
        </div>         
    </LoadingStyled>
        
    )
}

export default Loading