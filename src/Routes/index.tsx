import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PrivateRouter from "./PrivateRouter";
import LoggedRouter from './LoggedRouter'

import Login from '../Pages/Login'
import Cadastro from '../Pages/Cadastro'
import Principal from '../Pages/Principal'
import EsqueceuSenha from '../Pages/EsqueceuSenha'

export default function Router() {
    return(
        <BrowserRouter>
            <Routes>

                <Route path="/login" element={<LoggedRouter/>}>
                    <Route path="/login" element={<Login/>}/>
                </Route>

                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/login/forgot" element={<EsqueceuSenha/>}/>
              
                <Route path="/home" element={<Principal/>}/>
            </Routes>
        </BrowserRouter>
    )
}