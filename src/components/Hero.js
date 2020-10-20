import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const heroQuery = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(heroQuery)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"> </div>
            <h1>i'm michelle</h1>
            {/* TODO: Typing effect for titles */}
            <h4>Software Developer</h4>
            <Link to="/about" className="btn">
              About Me
            </Link>
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" alt={"Michelle Tanzil"} />
      </div>
    </header>
  )
}

export default Hero
