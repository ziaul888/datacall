import React from 'react'
import bImg from "../../asset/images/benefit-img-1.26a7de.svg"
import bImg1 from "../../asset/images/benefit-img-2.51a3d4.svg"
import {doData1} from "./DoDota"
import {doData2} from "./DoDota"

export const DoMore = () => {
    return (
<>
<main>
    <section className="common-hero-section">
      <div className="container">
        <div className="content">
          <h1 className="heading" data-aos="fade-down">Do more with Data Call</h1>
        </div>
      </div>
    </section>

    
    <section className="benefit-section">
      <div className="container">
        <div className="row flex-column-reverse flex-xl-row">
          <div className="col-xl-6">
            <div className="benefit-block">
             {
               doData2.map((item)=>{
                     const {image,text,id,title}=item
                     return(
                      <div class="benefit" key={id}data-aos="fade-up">
                      <div class="benefit-img">
                        <img src={image} alt="icon"/>
                      </div>
      
                      <div class="benefit-info">
                      <p class="text">{text}<br/>{title}</p>
                      </div>
                    </div>
                     )
               })
             }

            </div>
          </div>
          <div className="col-xl-6">
            <div className="img-container" data-aos="fade-left">
              <img src={bImg} alt="big"/>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-6">
            <div className="img-container justify-content-start" data-aos="fade-right">
              <img src={bImg1} alt="im"/>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="benefit-block">
            {
               doData1.map((item)=>{
                     const {image,text,id,title}=item
                     return(
                      <div class="benefit" key={id} data-aos="fade-up">
                      <div class="benefit-img">
                        <img src={image} alt="icon"/>
                      </div>
      
                      <div class="benefit-info">
                     <p class="text">{text}<br/>{title}</p>
                      </div>
                    </div>
                     )
               })
             }
              
            </div>
          </div>
        </div>
      </div>
    </section>
    </main>
 </>   )
}
