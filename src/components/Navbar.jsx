import React, {useState} from "react" 
import { styled } from "styled-components"
import BurButton from './BurguerButton'

const NavContainer = styled.nav`
@media(max-width: 759px){
  h2{
    color: white;
    font-weight: 400px;
    font-size: 1.3rem;
    margin-left: 1.5rem;    
    span{    
    font-weight: bold;
    } 
  }
}
@media(min-width: 760px){
  h2{
    color: white;
    font-weight: 400px;
    font-size: 2.5rem;
    margin-left: 1.5rem;    
    span{    
    font-weight: bold;
    } 
  }
}

  
  a{    
    color: white;
    text-text-decoration: none;
    margin-right: 1rem;
  }
  padding: 0;
  margin: 0;
  background-color: #0970C2;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .links{
    position: absolute;
    top -700px;
    left: -2000px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    a{
      color: black;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){   
      position: initial;
      margin: 0;
      a{
        font-size: 1.5rem;
        color: white;
        display: inline;
      }
      button{  
      cursor: pointer;
       position: relative;
       border-radius: 6px; 
       color: white;
       border: none;
       outline: none;
       width: 170px;
       height: 55px;
       background-color: #2E3133;
       font-size: 1rem;
      } 
      @media screen and (min-width: 768px){
        button:hover{          
          background-color: #555E65;
        }
      }
    }
  }

  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0; 
    text-align: center;
    a{
      color: #333;
    }
    
  }

  
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`


function Navbar() {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
    //Chance of state  True to false or !=
  }
  return (
    <nav>
      <NavContainer>
        <h2>
          DEMO <span>Streaming</span>
        </h2>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a href="/Login">Log In</a>
          <a href="/SingUp"><button href="/SingUp"> Start your free trial </button></a>

        </div>
        
        <div className='burguer'>
        <BurButton clicked = {clicked} handleClick = {handleClick}/>
        </div>        
      </NavContainer>
    </nav>
  )
}

export default Navbar


