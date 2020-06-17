import React from "react"
import Navbar from "./Globals/Navbar"
import Footer from "./Globals/Footer"
import { MdPhoneIphone } from 'react-icons/md'
import { FaRegEnvelope } from 'react-icons/fa'

function Contact() {
  return (
    <div className="jumbotron">
      <Navbar />
      <div id="skills-header">
        <h1>Contact</h1>
      </div>
      <div className="container-contact">
        <div className="row contact-row">
          <div className="col-md-12 col-sm-12">
            <div className="col-inner">
              <div className="info-block">
                <div className="contact-icon">
                  <MdPhoneIphone className="contact" />
                </div>
                <div className="contact-text">
                  <p className="p4-5">406 868-6967</p>
                </div>
              </div>
              <div className="info-block ">
                <div className="contact-icon">
                  <FaRegEnvelope className="contact" />
                </div>
                <div className="contact-text">
                  <p>tylersnyder619406@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
