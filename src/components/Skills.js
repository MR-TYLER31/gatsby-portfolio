import React from "react"
import Navbar from "./Globals/Navbar"
import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaGitSquare,
} from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import { GrMysql, GrGatsbyjs } from "react-icons/gr"
import { DiMongodb } from 'react-icons/di'
import Footer from "./Globals/Footer"


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
                <FaHtml5 className="skills-icon" />
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
                <FaCss3Alt className="skills-icon" />
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
                <IoLogoJavascript className="skills-icon" />
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
                <FaNodeJs className="skills-icon" />
                <p className="text-white">Node JS</p>
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
                <GrGatsbyjs className="skills-icon" />
                <p className="text-white">Gatsby</p>
                <div className="ovrly"></div>
                <div className="hover-text">
                  <h5 className="text-white text-center">GraphQL</h5>
                  <h5 className="text-white text-center">Gatsby Plugins</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="card btn08 skills-card mt-3">
              <div className="card-body text-center">
                <FaReact className="skills-icon" />
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
        <div className="row mt-5">
          <div className="col-md-4 col-sm-6">
            <div className="card btn08 skills-card mt-3">
              <div className="card-body text-center">
                <GrMysql className="skills-icon" />
                <p className="text-white">MySQL</p>
                <div className="ovrly"></div>
                <div className="hover-text">
                  <h5 className="text-white text-center">Sequelize</h5>
                  <h5 className="text-white text-center">MySQL Workbench</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="card btn08 skills-card mt-3">
              <div className="card-body text-center">
                <DiMongodb className="skills-icon" />
                <p className="text-white">NoSQL</p>
                <div className="ovrly"></div>
                <div className="hover-text">
                  <h5 className="text-white text-center">MongoDB</h5>
                  <h5 className="text-white text-center">Mongoose</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="card btn08 skills-card mt-3">
              <div className="card-body text-center">
                <FaGitSquare className="skills-icon" />
                <p className="text-white">Git</p>
                <div className="ovrly"></div>
                <div className="hover-text">
                  <h5 className="text-white text-center">Github</h5>
                  <h5 className="text-white text-center">
                    Command Line Interface
                  </h5>
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

export default Skills
