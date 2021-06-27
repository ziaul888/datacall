import React from 'react'
import { NavBar } from '../component/navBar/navBar'
import { Contact } from '../component/Contact/Contact'
import { Footer } from '../component/Footer/Footer'
import { DoMore } from '../component/DoMore/DoMore'

export const DoMorePage = () => {
    return (
        <div>
            <NavBar/>
            <DoMore/>
            <Contact/>
            <Footer/>
        </div>
    )
}
