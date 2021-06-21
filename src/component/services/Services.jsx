import React from 'react'
import image from "../../asset/images/services-img.1b1570.svg"

export const Services = () => {
    return (
        <main>
                <section className="common-hero-section">
            <div className="container">
                <div className="content">
                    <h1 className="heading" data-aos="fade-down">Services</h1>
                </div>
            </div>
        </section>

        
        <section className="services-section">
            <div className="container">
                <div className="row gx-lg-4">
                    <div className="col-lg-6">
                        <div className="content pe-lg-5" data-aos="fade-right">
                            <p className="text">Data Call Solutions is a highly trained call service that gets your practice
                                information
                                about your stalled claims.</p>

                            <p className="text">We find out what your staff needs to do to move the claim forward to
                                completion and
                                payment.</p>

                            <p className="text">Data Call Solutions uses software to securely track and monitor your
                                outstanding claims.
                                Our simple to use web-based
                                platform is customized to your practice. It allows you to easily and quickly track the
                                flow of your
                                outstanding AR.</p>

                            <p className="text">We spend the time-consuming tasks of calling the insurance payers to get you
                                the
                                information you need to get your claims
                                processed and out of AR limbo.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="img-container ps-lg-5" data-aos="fade-left">
                            <img src={image} alt="imag"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </main>
    )
}
