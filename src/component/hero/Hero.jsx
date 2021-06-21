import React from 'react'
import heroImg from "../../asset/images/hero-img.8b5a47.svg"

 const Hero = () => {
    return (
      <>
        <main>
          <section className="hero-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="content pe-lg-5" data-aos="fade-right">
                    <h1 className="heading">
                      Insurance claims to solve? <br />{" "}
                      <span>We make the calls!</span>
                    </h1>
                    <p className="text">
                      We provide all the information you need to move stalled
                      claims forward. Our easy-to-use web-based platform allows
                      you to access the information in a secure, HIPPA compliant
                      site from your office. Data Call Solutions is more than a
                      call service —it is a seamless, smart way to optimize your
                      claim workflow.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="img-container" data-aos="fade-left">
                    <img src={heroImg} alt="imae" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );
}

export default Hero