import React, {useState} from "react" 
import { styled } from "styled-components"
import BurButton from './BurguerButton'
import Modal from "./Modal"

const NavContainer = styled.nav`

.burger-button {

  color: white !important;
  border: 1px black solid;
  margin-right: 0;
  background-color: gray;
  border-radius: 5px;
  width: 300px;
  padding: 20px;
}

h1{
  font-size: 3rem;
}
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

  h2 {
    font-size: 1.1em;
    margin-top: 2em;
    text-align: center;
  }
  main {
    width: 80%;
    margin: auto;
  }
  
  #modal {
    background-color: #0970C2;
    color: #fff;
    position: fixed;
    top: -100vh;
    left: 0;
    height: 100vh;
    width: 100vw;
    transition: all .5s;
    z-index: 10;
    div {
      width: 90%;
      height: 40%;
      color: white;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      font-size: 1.5em;
      text-align: center;
    } 
  }
  
  #mostrar-modal {
    display: none;
    + label {
      background: steelblue;
      display: table;
      margin: auto;
      color: #fff;
      line-height: 3;
      padding: 0 1em;
      text-transform: uppercase;
      cursor: pointer;
      &:hover {
        background: darken(steelblue,10%);
      }
    }
    &:checked { 
      & ~ #modal {
        top: 0;
      }
      & ~ #cerrar-modal + label {
        display: block;
      }
    }
  }
  
  #cerrar-modal {
    display: none;
    + label {
      position: absolute;
      top: 1em;
      right: 1em;
      z-index: 100;
      color: #fff;
      font-weight: bold;
      cursor: pointer;
      background: tomato;
      width: 25px;
      height: 25px;
      line-height: 25px;
      text-align: center;
      border-radius: 50%;
      display: none;
      transition: all .5s;
    }
    &:checked {
       & ~ #modal {
        top: -100vh;
      }
      & + label {
        display: none;
      }
    }
  }
  }

  .button-burger {
    padding-top: 8px !important;
  }

  
`


function Navbar() {
  const [modalState, chanceModalState, clicked, setClicked] = useState(false)
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
        <div className="burguer">     

              <input id="mostrar-modal" type="radio" name="modal"/>
              <label for="mostrar-modal" className="button-burger"><BurButton clicked = {clicked} handleClick = {handleClick} /></label>
              <input id="cerrar-modal" type="radio" name="modal"/>
              <label for="cerrar-modal">X</label>
              <div id="modal">
              <div className={`links ${clicked ? 'active' : ''}`}>
                <div>
                  <a href="/Login" className="burger-button">Log In</a>
                </div>
                <div>
                  <a href="/SingUp" className="burger-button">Start your free trial</a>
                </div>
                
                
              </div>
              </div>
        </div>
        
        <div className='burguer' id="mostrar-modal">
        
        </div>        
      </NavContainer>
    </nav>
  )
}

export default Navbar


