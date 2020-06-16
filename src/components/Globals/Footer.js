import React from "react"
import { FaEnvelope, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa"

function Footer() {
  return (
    <div className="footer-container mt-5">
      <ul className="social-list">
        <li>
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
            target="_blank"
            rel="noopener noreferrer"
            className="social"
          >
            <FaEnvelope />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/MR-TYLER31"
            target="_blank"
            rel="noopener noreferrer"
            className="social"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/tyler-snyder-b6484313a/"
            target="_blank"
            rel="noopener noreferrer"
            className="social"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/Tsnyder406"
            target="_blank"
            rel="noopener noreferrer"
            className="social"
          >
            <FaTwitter />
          </a>
        </li>
      </ul>
      <p className="lead text-center">Built with React JS</p>
    </div>
  )
}

export default Footer
