// NavbarLinks.js

import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"


const NavItem = styled(Link)`
  text-decoration: none;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  position: relative;
  font-size: 30px;
  color: #b0b0b0;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #940002;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    font-size: 30px;
    color: grey;
  }

  :active {
    color: #333333;
  }

  @media (max-width: 768px) {
    padding: 15px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`


const NavbarLinks = () => {
 const data = useStaticQuery(graphql`
   {
     allFile(filter: { extension: { eq: "pdf" } }) {
       edges {
         node {
           publicURL
           name
         }
       }
     }
   }
 `)
  return (
    
    <>
      <NavItem to="/" style={{ textDecoration: "none" }}>
        <span style={{ color: "black" }}>Tyler </span>
        <span style={{ color: "#b0b0b0" }}>Snyder</span>
      </NavItem>
      <NavItem to="/skills" style={{ textDecoration: "none" }}>
        Skills
      </NavItem>
      <NavItem to="/portfolio" style={{ textDecoration: "none" }}>
        Portfolio
      </NavItem>
       {data.allFile.edges.map(file => {
      return (
        <a
          href={file.node.publicURL}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
          id="resume-link"
          key={file.node.name}
        >
          Resume
        </a>
      )
        })}
      <NavItem to="/contact" style={{ textDecoration: "none" }}>
        Contact
      </NavItem>
    </>
  )
}

export default NavbarLinks
