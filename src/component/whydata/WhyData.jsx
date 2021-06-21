import React from 'react'
import whtImg from "../../asset/images/work-desk.1955d1.svg"

export const WhyData = () => {
    return (
        <>
            <main>
      
        <section className="common-hero-section">
            <div className="container">
                <div className="content">
                    <h1 className="heading" data-aos="fade-down">Why Data Call</h1>
                </div>
            </div>
        </section>

       
        <section className="why-data-call-section">
            <div className="container">
                <div className="row gx-lg-4">
                    <div className="col-lg-6">
                        <div className="feed-block pe-lg-4">
                            <div className="feed">
                                <p className="text">We bring it all together with the right team.</p>
                            </div>
                            <div className="feed">
                                <p className="text">Our software platform allows us to communicateclaim status with you in
                                    real time.</p>
                            </div>
                            <div className="feed">
                                <p className="text">Share information securely and effortlessly.</p>
                            </div>
                            <div className="feed">
                                <p className="text">We determine why the claim has not processed and what needs to be done.
                                </p>
                            </div>
                            <div className="feed">
                                <p className="text">Our collaboration with you keeps the claims moving forward.</p>
                            </div>
                            <div className="feed">
                                <p className="text">Secure, HiPPA compliant, web platform to see all the detailed claim
                                    notes and
                                    communications.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="img-container ps-lg-4">
                            <img src={whtImg} alt="imag"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

        </>
    )
}
