import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import FeatureBlock from '../components/feature-block/feature-block'
import LeadIn from '../components/lead-in'
import StatementBanner from '../components/statment-banner'
import MailChimp from '../components/mail-chimp/mailchimp'

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
  // "maxWidth": "960px",
  "margin": "0 auto",
  // "position": "sticky",
  // "zIndex": "99",
  // "bottom": "0"
}

const imgStyles = { 
  "margin" : "auto auto 0 auto",
  "padding" : "0",
  "position" :"relative",
  "top" : "50px"
}

const wrapperStyles = { 
  "position" :"relative",
}

const imgWrapperStyles = { 
  "display" : "flex",
  "backgroundColor" : "#f2f2f2",
  "width" : "100%",
  "maxHeight" : "90vh",
  "minHeight" : "550px"
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
      <LeadIn/>
      <FeatureBlock/>
    </div>
    <StatementBanner/>
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
