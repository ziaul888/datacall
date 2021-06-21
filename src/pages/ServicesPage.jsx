import React from 'react'
import { Services } from '../component/services/Services'
import {NavBar} from "../component/navBar/navBar"
import {Footer} from "../component/Footer/Footer"
import { Contact } from '../component/Contact/Contact'


 const ServicesPage = () => {
    return (
        <div>
            <NavBar/>
            <Services/>
            <Contact/>
            <Footer/>
        </div>
    )
}
export default ServicesPage
