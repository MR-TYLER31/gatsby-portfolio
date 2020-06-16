import React from "react"
import { Spring } from "react-spring/renderprops"
import Navbar from "./Globals/Navbar"
import Footer from "./Globals/Footer"
// import PortfolioBtn from "../PortfolioBtn"

import { Link } from "gatsby"


const headerStyle = {
  background: "white",
  color: "blue",
  padding: "1.5rem",
}

function Home() {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 500, duration: 500 }}
    >
      {props => (
        <div style={props}>
          <div className="jumbotron" style={{ headerStyle }}>
            <Navbar />
            <div className="container">
              <Spring
                from={{ opacity: 0, marginTop: 50 }}
                to={{ opacity: 1, marginTop: 150 }}
                config={{ delay: 1000, duration: 1000 }}
              >
                {props => (
                  <div style={props}>
                    <div id="header-section">
                      <hr
                        style={{
                          width: "40%",
                          borderBottom: "5px solid #3489eb",
                        }}
                      />
                      <h1 className="text-center my-4">Tyler Snyder</h1>
                      <p
                        className="lead text-center"
                        style={{ fontWeight: "bold" }}
                      >
                        Web Developer
                      </p>
                      <hr
                        style={{
                          width: "40%",
                          borderBottom: "5px solid #3489eb",
                        }}
                      />

                      <Link
                        to="/portfolio"
                        style={{
                          textDecoration: "none",
                        }}
                      >
                        {/* <PortfolioBtn renderAs="button"></PortfolioBtn> */}
                      </Link>
                    </div>
                  </div>
                )}
              </Spring>
            </div>
            <Footer />
          </div>
        </div>
      )}
    </Spring>
  )
}

export default Home
