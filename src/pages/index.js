import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import FeatureBlock from '../components/feature-block/feature-block'
import MailChimp from '../components/mailchimp'

import macComp from './imac.png'

// our inline-styles
// TODO: set up components and related css
const titleWrapperStyles = {
  "position" : "absolute",
  "padding": "50px",
  "top" : "50px",
  "zIndex": "2" 
}

const asideStyles = { 
  "background": "white",
  "padding": "50px",
  "margin": "2rem auto",
  "maxWidth": "960px"
}

const stickyFooterStyles = { 
  "background": "#000",
  "padding": "50px",
  "width": "100%",
  "position": "sticky",
  "zIndex": "99",
  "bottom": "0"
}

const imgStyles = { 
  "margin" : "auto auto 0 auto",
  "padding" : "0",
  "position" :"relative",
  "top" : "50px"
}

const statementStyle = {  
  "margin" : "100px 0 50px 0",
  "textAlign" : "center",
  "fontWeight" : "300",
}

const wrapperStyles = { 
  "position" :"relative",
}

const bannerStyles = { 
  "backgroundColor" : "#f2f2f2",
  "padding" : "6rem 0"
}

const bannerContentStyles = { 
  "background": "#f2f2f2",
  "padding": "50px",
  "margin": "2rem auto",
  "maxWidth": "960px",
  "textAlign": "center"
}

const imgWrapperStyles = { 
  "display" : "flex",
  "backgroundColor" : "#f2f2f2",
  "width" : "100%",
  "maxHeight" : "90vh",
  "minHeight" : "550px"
}

const leadintStyle = {
  "fontSize" : "40px",
}

const IndexPage = ({ data }) => (
  <div style={ wrapperStyles }>
    <div style={ titleWrapperStyles }>
      <Header siteTitle={ data.site.siteMetadata.title } tagline={ data.site.siteMetadata.tagline }/>
    </div>
    <div style={ imgWrapperStyles }>
      <img src={ macComp } style={ imgStyles }/>
    </div>
    <div style={ asideStyles }>
      <h2 style={ statementStyle }>A new web application to help screenwriters create and collaborate.</h2>
      <FeatureBlock/>
    </div>
    <div style={ bannerStyles }>
      <div style={ bannerContentStyles }>
        <h2 style={ leadintStyle }>We choose to be creators...</h2><p>We choose to be part of the next chapter. To work day and night, so you can be free to make the next great screenplay. We hope that you will join us on this exciting journey.</p>
      </div>
    </div>
    <div style={ stickyFooterStyles }>
      <MailChimp/>
    </div>
  </div>
)

export default IndexPage

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        tagline
      }
    }
  }
`
