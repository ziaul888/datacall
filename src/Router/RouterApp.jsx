import React from 'react'
import HomePage from "../pages/HomePage"
import ServicesPage from "../pages/ServicesPage"
import AboutPage from "../pages/AboutPage"
import {DoMorePage} from "../pages/Do-MorePage"
import {

    Switch,
    Route,
    
  } from "react-router-dom";
import WhyDataPage from '../pages/WhyDataPage';

export const RouterApp = () => {
    return (
        <>
        <Switch>
                 <Route exact path="/" component={HomePage}/>
                  <Route  path="/services" component={ServicesPage}/>
                  <Route  path="/about" component={AboutPage}/>
                  <Route path="/whydata" component={WhyDataPage}/>
                  <Route path="/DoMorePage" component={DoMorePage}/>
                 
        </Switch>
        </>
    )
}
