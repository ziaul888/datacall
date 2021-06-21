import React from "react"
import {NavBar} from "../component/navBar/navBar"
import Hero from "../component/hero/Hero"
import { Contact } from "../component/Contact/Contact"
import { Footer } from "../component/Footer/Footer"
import Feature from "../component/feature/Feature"


const HomePage=()=>{
    return(
     <>
     <NavBar/>
     <Hero/>
     <Feature/>
     <Contact/>
     <Footer/>
     </>

    )
}
export default HomePage