import React from 'react'
import feature from "./data"

 const Feature = () => {
  return (
    <section className="features-section">
            <div className="container">
              <h1 className="title" data-aos="fade-up">Features</h1>
      
              <div className="row gy-5 gx-sm-5 row-cols-1 row-cols-md-2 row-cols-xl-3">
              {
                       feature.map((item)=>{
                         const {image,title,text}=item
                          return(
                            <div className="col mt-5" key={item.id} >
                            <div className="card feature-card" data-aos="fade-up">
                            <div className="img-container">
                                <img src={image}alt="ima"/>
                              </div>
                          <h3 className="feature-title">{title}</h3>
                          <p className="feature-text">{text}</p>
                            </div>
                          </div>
                          ) 
                       })
                   }
             </div>
            </div>
          </section>
  )
}
export default Feature
