import React from "react"
import Navbar from "./Globals/Navbar"
// import Footer from "../Footer"

function Skills() {
  return (
    <div className="jumbotron">
      <Navbar />
      <div id="skills-header">
        <h1>Skills</h1>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-4 col-sm-6">
            <div className="card btn08 skills-card mt-3">
              <div className="card-body text-center">
                <i className="fab fa-html5 fa-5x"></i>
                <p className="text-white">HTML5</p>
                <div className="ovrly"></div>
                <div className="hover-text">
                  <h5 className="text-white text-center">HTML Images</h5>
                  <h5 className="text-white text-center">Forms</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="card btn08 skills-card mt-3">
              <div className="card-body text-center">
                <i className="fab fa-css3-alt fa-5x"></i>
                <p className="text-white">CSS3</p>
                <div className="ovrly"></div>
                <div className="hover-text">
                  <h5 className="text-white text-center">Bootstrap</h5>
                  <h5 className="text-white text-center">Materialize</h5>
                  <h5 className="text-white text-center">Bulma</h5>
                  <h5 className="text-white text-center">Material UI</h5>
                  <h5 className="text-white text-center">FlexBox</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="card btn08 skills-card mt-3">
              <div className="card-body text-center">
                <i className="fab fa-js fa-5x"></i>
                <p className="text-white">JavaScript</p>
                <div className="ovrly"></div>
                <div className="hover-text">
                  <h5 className="text-white text-center">JQuery</h5>
                  <h5 className="text-white text-center">Web APIs</h5>
                  <h5 className="text-white text-center">AJAX</h5>
                  <h5 className="text-white text-center">Axios</h5>
                  <h5 className="text-white text-center">ES6</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4 col-sm-6">
            <div className="card btn08 skills-card mt-3">
              <div className="card-body text-center">
                <i className="fab fa-node fa-5x"></i>
                <p className="text-white">Node.js</p>
                <div className="ovrly"></div>
                <div className="hover-text">
                  <h5 className="text-white text-center">Express</h5>
                  <h5 className="text-white text-center">MVC</h5>
                  <h5 className="text-white text-center">NPM</h5>
                  <h5 className="text-white text-center">Passport.js</h5>
                  <h5 className="text-white text-center">Handlebars</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="card btn08 skills-card mt-3">
              <div className="card-body text-center">
                <i className="fas fa-database  fa-5x"></i>
                <p className="text-white">MySQL - NoSQL</p>
                <div className="ovrly"></div>
                <div className="hover-text">
                  <h5 className="text-white text-center">Sequelize</h5>
                  <h5 className="text-white text-center">MongoDB</h5>
                  <h5 className="text-white text-center">Mongoose</h5>
                  <h5 className="text-white text-center">MySQL Workbench</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="card btn08 skills-card mt-3">
              <div className="card-body text-center">
                <i className="fab fa-react fa-5x"></i>
                <p className="text-white">React JS</p>
                <div className="ovrly"></div>
                <div className="hover-text">
                  <h5 className="text-white text-center">React Hooks</h5>
                  <h5 className="text-white text-center">The Context API</h5>
                  <h5 className="text-white text-center">Redux</h5>
                  <h5 className="text-white text-center">React Router</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Skills
