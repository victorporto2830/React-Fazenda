import { useState } from "react";
import { Link } from "react-router-dom";
import "./style-cadastro.css";
import axios from "axios";
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify'
const cookies = new Cookies();

function Login() {
  
  const Botao = () =>{
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    
    toast.success(`O Usuario digitado foi: ${login}`)
    toast.error(`A senha digitada foi ${password}`)
}

  return (
    <body>
      <header>
        
        <h2>Fazenda Eletrônica</h2>
        
      </header>
      <main>
        
        <div className="box">
          
            <div className="form">
                <h2>Cadastro</h2>
                <div className="inputBox">
                    <input type="text"/>
                    <span>Nome</span>
                    <i></i>
                </div>
                  
                <div className="inputBox">
                    <input type="text"/>
                    <span>Nome de Usuário</span>
                    <i></i>
                </div>
                  
                <div className="inputBox">
                    <input type="text"/>
                    <span>E-mail</span>
                    <i></i>
                </div>
                  
                <div className="inputBox">
                    <input type="text"/>
                    <span>Senha</span>
                    <i></i>
                </div>
                  
                <div className="links">
                    <a href="#">Ja possui conta?</a>
                </div>
                <input type="submit" value="Criar conta"/>
            </div>
                  
        </div>
                  
    </main>
      
    </body>
  );
}

export default Login;