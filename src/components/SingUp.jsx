import React from 'react'
import { styled } from "styled-components"

const SingUpStyled = styled.div`

height: 95%;   
display: flex;
align-items: center;
justify-content: center;
padding: 2rem;

h2 {
    font-size: 1rem;
}

.input-group {        
    width: 400px;
    min-height: 500px;
    text-align: center;
    font-family: "Roboto",sans-serif;        
    position: relative;
    border-radius: 15px;    
    padding: 20px;
    font-size: 1rem;
    -webkit-box-shadow: -1px 4px 100px 32px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 4px 100px 32px rgba(0,0,0,0.75);
    box-shadow: -1px 4px 100px 32px rgba(0,0,0,0.75);

    .input {
        border: solid 1.5px #9e9e9e;
        border-radius: 1rem;
        background: none;
        padding: 1rem;
        font-size: 1rem;
        color: black;
        transition: border 150ms cubic-bezier(0.4,0,0.2,1);
       }  

    .btn{  

        display: block;
        margin-top: 30px;
        margin-left: 2rem;
        margin-right: 2rem;
        border-radius: 20px;
        padding: 5% 10%;
        text-decoration: none;
        color: black;            
        transition: all 0.6s ease;
        background-color: #AAABB2;
    }  

    .btn-1{
       border: 2px solid;
    }

    .btn-1:hover{
        background-color: # 0970C2;
        box-shadow: 0 0 20px #0970C2;
        border-color: #0970C2;
    }

    

}




`

function SingUp() {
    return (
        <SingUpStyled>
            <form className="input-group">
                <h1>Sign Up</h1>
                <h2>
                    First Name
                </h2>
                <input type="text" class="input" />
                <h2>
                    Last Name
                </h2>
                <input type="text" class="input" />
                <h2>
                    E-mail
                </h2>
                <input type="text" class="input" />
                <div>
                    <h2>
                        Password
                    </h2>
                    <input type="password" class="input" />
                </div>

                <div>
                    <a href='#' class="btn btn-1">
                        Sign Up
                        <span></span>
                        <span></span>
                    </a>
                </div>
            </form>
        </SingUpStyled>

    )
}

export default SingUp
