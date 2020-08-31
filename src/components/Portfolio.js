import React from "react"
import Navbar from "../components/Globals/Navbar"
import Footer from "../components/Globals/Footer"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";


const getProducts = graphql`
{
  projects: allContentfulProjects {
    edges {
      node {
        id
        name
        description
        built
        site
        github
         image {
            fluid(maxHeight: 426) {
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
      }
    }
  }
}
`;

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
// })

function Portfolio() {
  // const classes = useStyles()
  return (
    <StaticQuery
      query={getProducts}
      render={data => {
        return (
          <div className="jumbotron">
            <Navbar />
            <div id="skills-header">
              <h1>Projects</h1>
            </div>
            <div className="container">
              <div className="row mt-5 align-items-center">
                {data.projects.edges.map(({ node: project }) => (
                  <div
                    key={project.id}
                    className=" col-xl-4 col-lg-6  col-md-6 col-sm-12  align-self-center"
                  >
                    <div className="card project-card dtl24 mt-3 h-80">
                      <Img
                        fluid={project.image.fluid}
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{project.name}</h5>
                        <p>{project.description}</p>
                        <h5>Built with</h5>
                        <p>{project.built}</p>
                        <div className="card-btn dtl">
                          <a
                            href={project.site}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn top"
                          >
                            Site
                          </a>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn bottom"
                          >
                            Github
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Footer />
          </div>
        )
        
      }}
    />
  )
}

export default Portfolio
