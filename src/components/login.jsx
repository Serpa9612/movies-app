import React, {useState} from 'react'
import { styled } from "styled-components"
import axios from 'axios'

const LoginStyled = styled.div`

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
                 
            position: relative;
            padding: 5% 10%;
            text-decoration: none;
            color: black;            
            transition: all 0.6s ease;
            top: 50px;
            background-color: #AAABB2;
        }  

        .btn-1{
           border: 3px solid;
        }

        .btn-1:hover{
            background-color: # 0970C2;
            box-shadow: 0 0 20px #0970C2;
            border-color: #0970C2;
        }

        

    }

`



function Login() {
    const [post, setPost] = useState({
        User: "",
        Password: ""
    })
    const handleInput = (event)=>{
        setPost({...post, [event.target.name]: event.target.value})
        
    }
    
    function handleSubmit(event){
        event.preventDefault()
        axios.post('http://192.168.1.45:8000/login', {post})        
        .then(response => console.log(response))
        .catch(err => alert(err))
    }
    return (
        <LoginStyled>
            <form onSubmit={handleSubmit} className="input-group">
                <h1>Log In</h1>
                <h2>
                    User
                </h2>
                <input name='User' onChange={handleInput} type="text" class="input" />
                <h2>
                    Password
                </h2>
                <input     name='Password' onChange={handleInput} type="password" class="input" />
                <div >
                    <button href='' class="btn btn-1">
                        Sing In</button>           
                </div>
            </form>
        </LoginStyled>

    )
}

export default Login

//"http://192.168.1.45:8000/login"


