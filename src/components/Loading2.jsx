import React, {useEffect} from "react"
import { styled } from "styled-components"


const LoadingStyled = styled.div`
    
`
function Loading(){    

    return(
    <LoadingStyled> 
        <h1>Loading...</h1>
        <br />
        <div>
            <ClipLoader color={'#D0021B'}  size={100}/> 
        </div>         
    </LoadingStyled>
        
    )
}

export default Loading