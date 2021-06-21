import React from 'react'
import image from "../../asset/images/about-img.defb56.svg"


export const About = () => {
    return (
      <main>
        <section className="common-hero-section">
          <div className="container">
            <div className="content">
              <h1 className="heading" data-aos="fade-down">
                About
              </h1>
            </div>
          </div>
        </section>
        <section className="about-section">
          <div className="container">
            <div className="row gx-lg-4">
              <div className="col-lg-6">
                <div className="img-container pe-lg-5" data-aos="fade-right">
                  <img src={image} alt="img" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="content ps-lg-5" data-aos="fade-left">
                  <p className="text">
                    Long has there been a need in the billing industry for
                    specialized phone calls to find out claim information. A/R
                    calling requires a deep understanding of the multiple issues
                    that cause denials or delays in payments. These issues
                    require corrective measures to be taken.
                  </p>

                  <p className="text">
                    Busy practices may struggle finding the time to make these
                    insurance calls. Calling the payer often burdensome due to
                    excessive hold time or dropped calls.
                  </p>

                  <p className="text">
                    Data Call Solutions is the answer to this problem. Our call
                    flow software allows us to bundle claim call backs in an
                    efficient and effective manner. We get the claim information
                    for your practice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
}
