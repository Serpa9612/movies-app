import React from "react"
import { styled } from "styled-components"

const FooterStyled = styled.div`

display: flex;
color: white;
position: fixed;
left: 0;
width: 100%;
bottom: 0;
background-color: #2E3133;
text-align: left;
height: 10rem;
font-size: 1.2rem;
justify-content: left;
a{
margin-left: 2rem;

}
span{
    font-size: 10em;
    color: blue;
}
.one{
    margin-left: 5rem
}
`
function Footer(){

return(
    <FooterStyled>
        <footer className="Footer1">
            <a className="one">Home |</a>
            <a>Terms and conditions |</a>
            <a>Privacy Policy |</a>
            <a>Collection Statements |</a>
            <a>Help |</a>
            <a>Manage Acount |</a>
            
            
        </footer>

    </FooterStyled>
)}

export default Footer