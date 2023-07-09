import React from "react"
import { styled } from "styled-components"

const FooterStyled = styled.div`


color: white;
position: fixed;
left: 0;
width: 100%;
bottom: 0;
background-color: #2E3133;
height: 19%;



@media(max-width: 759px){
.ul1{
    display: flex; 
    
    .ul2{
        margin-left: 0;
    }
}
}
@media(min-width: 759px){
    .ul1{
        display: flex;    
        align-items: center;
        text-align: left;
        .ul2{
            margin-left: 30%;
        }
    }
}


@media(max-width: 759px){
    .one{
        margin-left: 0;
    }
    a{        
        font-size: 0.8rem;
    }
    .ul1 img{    
        width: 100%;    
        object-fit: cover;    
    }
    .ul2 img{
        width: 40%;    
        object-fit: cover;
    }
        
}
@media(min-width: 759px){
    .one{
        margin-left: 5rem;
    }
    a{
        margin-left: 2rem;
        font-size: 1rem;
    }
    .copy{
        margin-left: 5rem;
    }
}
`
function Footer(){

return(
    <FooterStyled>
        <footer className="Footer1">
            <nav>
            <a className="one">Home |</a>
            <a>Terms and conditions |</a>
            <a>Privacy Policy |</a>
            <a>Collection Statements |</a>
            <a>Help |</a>
            <a>Manage Acount</a>
            </nav>
            <nav>
                <a className="copy">Copyright 2016 DEMO Streaming.All Rights Reserved</a>
            </nav>

            <ul className="ul1">
            <a>
                <img src="https://i.ibb.co/p4jC3FJ/Facebook.png" alt="This is an icon to Facebook" />
            </a>   
            <a>
                <img src="https://i.ibb.co/QKVLNsS/twitter.png" alt="This is an icon to Twitter" />
            </a>       
            <a>
                <img src="https://i.ibb.co/ZK3dtXG/Instagram.png" alt="This is an icon to Instagram" />
            </a>
            <ul className="ul2">                       
            <a>
                <img src="https://i.ibb.co/RjP012L/Appstore.png" alt="This is an icon to app store" />
            </a>
            <a>
                <img src="https://i.ibb.co/FDV9n6q/Google-Play.png" alt="This is an icon to Google Play" />
            </a>            
            <a>
                <img src="https://i.ibb.co/z2rYVxD/Microsoft.png" alt="This is an icon to Microsoft" />
            </a>
            </ul> 
            </ul>
            
            
        </footer>

    </FooterStyled>
)}

export default Footer