import React from 'react'
import { styled } from "styled-components"

let title = "Titles";

const MidlevarStyled = styled.nav`

padding: .01rem;
background-color: #2E3133;
display: flex;
align-items: center;
justify-content: space-between;

@media(max-width: 759px){
h2{
    color: white;    
    font-weight: 400px;
    font-size: 1.3rem;
    margin-left: 2rem;
}
}
@media(min-width: 759px){
  h2{
      color: white;    
      font-weight: 400px;
      font-size: 1.3rem;
      margin-left: 2rem;
  }
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