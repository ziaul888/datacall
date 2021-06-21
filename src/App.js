 
import './App.scss';
import {useEffect} from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import {BrowserRouter} from "react-router-dom"
import { RouterApp } from './Router/RouterApp';
import Aos from "aos"
import "aos/dist/aos.css"


function App() {

  useEffect(() => {
    Aos.init({duration:1000})
    
  }, [])
  return (
    <BrowserRouter>
    <RouterApp/>
    </BrowserRouter>
  
  );
}

export default App;
