import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const isAuthenticated = (): boolean => {
    const token: string = cookies.get('Token')
    if(token) return true;
    else return false;
};

export default function PrivateRouter () {
    if(isAuthenticated()) return <Outlet/>
    else return <Navigate to="/login"/>
}