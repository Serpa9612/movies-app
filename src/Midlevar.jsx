import React from 'react'
import { styled } from "styled-components"

let title = "Titles";

const MidlevarStyled = styled.nav`

padding: .01rem;
background-color: #2E3133;
display: flex;
align-items: center;
justify-content: space-between;

h2{
    color: white;    
    font-weight: 400px;
    font-size: 2.5rem;
    margin-left: 2rem;
}
`

function Midlevar() {
  return (
    <MidlevarStyled>
    <nav>
        <h2>Popular {title}</h2>
    </nav>
    </MidlevarStyled>    
  )
}

export default Midlevar