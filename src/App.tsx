import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from './Routes'

export default function App() {
  return (
    <>
      <Router />
      <ToastContainer autoClose={3000} className="toast-container"/>
    </>
  )
}