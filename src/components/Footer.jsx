import React from "react"
import { styled } from "styled-components"

const FooterStyled = styled.div`


color: white;
left: 0;
width: 100%;
bottom: 0;
background-color: #2E3133;
height: 19%;
cursor: pointer;

a {
    color: white;
}

.ul1 {
    margin-block-end: 0px;
}

@media(max-width: 759px){

.ul1{
    display: flex; 
    
    
    .ul2{
        margin-left: 0;
    }
}
}
@media(min-width: 759px){
    position: fixed;
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
        color: white;
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
    color: white;
    .one{
        margin-left: 5rem;
    }
    a{
        margin-left: 2rem;
        margin-right: 2rem;
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
        <div class="row copyright">
        <div class="footer-menu">

        <a href="/">Home</a>
        <span>|</span>
        <a>Terms and Conditions</a>
        <span>|</span>
        <a>Privacy Policy</a>
        <span>|</span>
        <a>Collection Statement</a>
        <span>|</span>
        <a>Help</a>
        <span>|</span>
        <a>Manage Account</a>

        </div>

        <div>
            <p>Copyright &copy; 2016 Streaming all rights reserved</p>
        </div>

        
        </div>
            

            <ul className="ul1">
            <a href="https://es-la.facebook.com/">
                <img src="https://i.ibb.co/p4jC3FJ/Facebook.png" alt="This is an icon to Facebook" />
            </a>   
            <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Des">
                <img src="https://i.ibb.co/QKVLNsS/twitter.png" alt="This is an icon to Twitter" />
            </a>       
            <a href="https://www.instagram.com/">
                <img src="https://i.ibb.co/ZK3dtXG/Instagram.png" alt="This is an icon to Instagram" />
            </a>
            <ul className="ul2">                       
            <a href="https://www.apple.com/co/app-store/">
                <img src="https://i.ibb.co/RjP012L/Appstore.png" alt="This is an icon to app store" />
            </a>
            <a href="https://play.google.com/store/games?hl=es_419&gl=US&pli=1">
                <img src="https://i.ibb.co/FDV9n6q/Google-Play.png" alt="This is an icon to Google Play" />
            </a>            
            <a href="https://www.microsoft.com/es-ad/store/b/home">
                <img src="https://i.ibb.co/z2rYVxD/Microsoft.png" alt="This is an icon to Microsoft" />
            </a>
            </ul> 
            </ul>
            
            
        </footer>

    </FooterStyled>
)}

export default Footer