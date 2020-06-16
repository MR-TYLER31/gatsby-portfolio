import React from "react"

function Footer() {
  return (
    <div className="footer-container mt-5">
      <ul className="social-list">
        <li>
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-envelope social"></i>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/MR-TYLER31"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github social"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/tyler-snyder-b6484313a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in social"></i>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/Tsnyder406"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter social"></i>
          </a>
        </li>
      </ul>
      <p className="lead text-center">Built with React JS</p>
    </div>
  )
}

export default Footer
