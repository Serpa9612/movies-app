import React, {useState} from "react" 
import { styled } from "styled-components"
import BurButton from './BurguerButton'




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
          <a href = "/">LogIn</a>
          <button> Start your free trial </button>          
        </div>
        
        <div className='burguer'>
        <BurButton clicked = {clicked} handleClick = {handleClick}/>
        </div>        
      </NavContainer>
    </nav>
  )
}

export default Navbar


const NavContainer = styled.nav`
  h2{
    color: white;
    font-weight: 400px;
    font-size: 2.5rem;
    margin-left: 2rem;
    span{    
    font-weight: bold;
    } 
  }
  
  a{    
    color: white;
    text-text-decoration: none;
    margin-right: 1rem;
  }
  padding: .6rem;
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