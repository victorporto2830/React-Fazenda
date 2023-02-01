import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import axios from "axios";
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify'


const cookies = new Cookies();

function Principal() {

  return (
    <body>
      <header>
        
        <h2>Fazenda Eletrônica</h2>
        
      </header>

      <main>
          <div className="main-area1">
            <div className="bloco">
                <div className="effect bloco-dados">
                    <h1>Gado em Campo</h1>
                    <h1>15</h1>
                </div>
            </div>
            <div className="bloco">
                <div className="effect bloco-dados">
                    <h1>Gado Morto/Mês</h1>
                    <h1>15</h1>
                </div>
            </div>
            <div className="bloco">
                <div className="effect bloco-dados">
                    <h1>Gado Vendido/Mês</h1>
                    <h1>15</h1>
                </div>
            </div>
        </div>

        <div className="main-area2">
            <div className="form">
                <div className="effect">
                    <h3>Fomulário de Pagamento</h3>
                    <div className="dados">
                        <div className="dados-linha1">
                            <div>
                                <label htmlFor="date">Data de Pagamento</label>
                                <input type="date" name="" id="date"/>
                            </div>
                            <div>
                                <label htmlFor="valor">Valor (R$)</label>
                                <input type="number" name="" id="valor" placeholder="R$" className="dinheiro"/>
                            </div>   
                        </div>
                        <div className="dados-linha2">
                            <div>
                                <label htmlFor="tipoPag">Tipo de Pagamento</label><br/>
                                <select name="" id="tipoPag">
                                    <option value="">Selecione opção</option>
                                    <option value="A">Opção A</option>
                                    <option value="B">Opção B</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="tipo">Tipo</label><br/>
                                <select name="" id="tipo">
                                    <option value="">Selecione opção</option>
                                    <option value="entrada">Entrada</option>
                                    <option value="saida">Saida</option>
                                </select>
                            </div>
                        </div>
                        <div className="dados-linha3">
                            <label htmlFor="descricao">Descrição</label><br/>
                            <input type="text" name="" id="descricao"/>
                        </div>
                        <div className="dados-linha4">
                            <input type="button" value="Enviar"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="price">
                <div className="effect table">
                    <h3>Fluxo de Caixa</h3>
                    <table>
                        <tr>
                            <td>Entrada</td>
                            <td></td>
                            <td><input type="number" name="" id="entrada"/></td>
                        </tr>
                        <tr>
                            <td>Saída</td>
                            <td></td>
                            <td><input type="number" name="" id="saida"/></td>
                        </tr>
                        <tr>
                            <td>Fluxo</td>
                            <td></td>
                            <td><input type="text" id="resultado"/></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
                  
    </main>
      
    </body>
  );
}

export default Principal;