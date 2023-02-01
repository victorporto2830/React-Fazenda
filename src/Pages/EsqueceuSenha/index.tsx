import { useState } from "react";
import { Link } from "react-router-dom";
import "./style-recover.css";
import axios from "axios";
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify'

const cookies = new Cookies();

function EsqueceuSenha() {

  return (
    <body>

      <header>
        
        <h2>Fazenda Eletrônica</h2>
        
      </header>
          
        <main>
            <div className="box">
                <div className="form">
                    <h2>Recuperação de Senha</h2>
                    <div className="inputBox">
                        <input type="text"/>
                        <span>Username/E-mail</span>
                        <i></i>
                    </div>
                    <div className="links">
                        <a href="#">Ja possui conta?</a>
                    </div>
                    <input type="submit" value="Enviar E-mail"/>
                    
                </div>
            </div>
        </main>
    </body>
  );
}

export default EsqueceuSenha;