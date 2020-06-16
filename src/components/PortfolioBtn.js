import React from "react"
import { FaArrowRight } from "react-icons/fa"

function PortfolioBtn(props) {
  return (
    <button
      id="portfolio-btn"
      onClick={props.onClick}
      className={`btn btn-outline-primary mt-5`}
    >
      View My Work <i id="button-arrow"><FaArrowRight/></i>
    </button>
  )
}

export default PortfolioBtn
