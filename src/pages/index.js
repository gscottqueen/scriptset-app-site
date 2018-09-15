import React from 'react'

// nodes
import Fade from 'react-reveal/Fade';

// our components
import Header from '../components/header'
import FeatureBlock from '../components/feature-block/feature-block'
import LeadIn from '../components/lead-in'
import StatementBanner from '../components/statment-banner'
import MailChimp from '../components/mail-chimp/mailchimp'

// our assets
import macComp from './imac.png'

// our inline-styles
// TODO: set up components and related css
const titleWrapperStyles = {
  "position" : "absolute",
  "padding": "50px",
  "zIndex": "2" 
}

const asideStyles = { 
  "background": "white",
  "padding": "50px",
  "margin": "auto",
  "maxWidth": "960px"
}

const stickyFooterStyles = { 
  "background": "#000",
  "padding": "15px 50px 5px 50px",
  "width": "100%",
  "margin": "0 auto",
  "position": "sticky",
  "zIndex": "99",
  "bottom": "0",
  "border": "2px solid #000"
}

const statementStyles = {
  "fontSize": "2.1rem",
  "fontWeight": "900",
  "padding": "150px 16%",
  "background": "black",
  "color": "white",
  "lineHeight": "1.2",
  "width": "100%",
  "textAlign": "center",
  "wordBreak": "normal"
}

const imgStyles = { 
  "margin" : "auto",
  "padding" : "0",
  "position" :"relative",
}

const wrapperStyles = { 
  "position" :"relative",
}

const imgWrapperStyles = { 
  "display" : "flex",
  "backgroundColor" : "#f2f2f2",
  "width" : "100%",
  "maxHeight" : "110vh",
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
    <div style={ statementStyles }>A new web application to help screenwriters create and collaborate.</div>
    <div style={ asideStyles }>
      <LeadIn/>
      <FeatureBlock/>
    </div>
    <StatementBanner/>
    <Fade bottom big delay="500" duration="2500">
      <div style={ stickyFooterStyles }>
        <MailChimp/>
      </div>
    </Fade>
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
