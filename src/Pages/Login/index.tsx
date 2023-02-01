import { useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import "./style-login.css";
import axios from "axios";
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify'

const cookies = new Cookies();

function Login() {
  const [login, setLogin] = useState< string | null >('')
  const [password, setPassword] = useState< string | null >('')
  
  const Botao = () =>{
    toast.success(`O Usuario digitado foi: ${login}`)
    toast.error(`A senha digitada foi: ${password}`)
}

  return (
    <body>
      <header>
        
        <h2>Fazenda Eletrônica</h2>
        
      </header>
      <main>
        <div className="box">
          <div className="form">
            <h2>Sign in</h2>
            <div className="inputBox">
              <input type='login' onChange={(e: ChangeEvent<HTMLInputElement>) => {setLogin(e.target.value)}} />
              <span>Username</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input type='password' onChange={(e: ChangeEvent<HTMLInputElement>) => {setPassword(e.target.value)}} />
              <span>Senha</span>
              <i></i>
            </div>
            <button onClick={Botao}>Clique</button>
              <div className="links">
              <Link to="/login/forgot">Esqueceu a Senha?</Link>
              </div>
          </div>
        </div>
      </main>
    </body>
  );
}

export default Login;