import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import MailChimp from '../components/mailchimp'

import macComp from './imac.png'
import livecolab from './icon--livecolab.png'
import storyclock from './icon--storyclock.png'
import storyboard from './icon--storyboard.png'
import proof from './icon--proof.png'
import write from './icon--write.png'
import storycard from './icon--storycard.png'


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
  "background": "white",
  "padding": "10px 50px",
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
  "top" : "-50px"
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

const listStyle = {
  "display" : "flex",
  "flexWrap": "wrap",
  "justifyContent" : "space-around",
  "margin" : '0px',
  "marginBottom" : '50px'
}

const listItemStyle = { 
  "listStyle" : "none",
  "padding" : "20px",
  "margin" : "20px",
  "maxWidth" : "25%",
  "minWidth" : "200px"
}

const firstListIcnStyle = { 
  "margin" : "0",
  "padding" : "0",
  "position" : "relative",
  "left" : "-1rem"
}

const icnStyle = {
  "margin" : "0",
  "padding" : "0",
}

const descriptionStyle = {
  "fontSize" : "small",
  "lineHeight" : "1.5"
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
      <ul style={ listStyle }>
        <li style={ listItemStyle }>
          <img src={ write } style={ firstListIcnStyle }/>
          <h3>Write</h3>
          <p style={ descriptionStyle }>Styleguide driven intuitive interface lets you focus on creating.</p>
        </li>
        <li style={ listItemStyle }>
          <img src={ proof } style={ icnStyle } alt=""/>
          <h3>Proof</h3>
          <p style={ descriptionStyle }>Easy editing, proofing, and versioning.</p>
        </li>
        <li style={ listItemStyle }>
          <img src={ livecolab } style={ icnStyle } alt=""/>
          <h3>Live Colab</h3>
          <p style={ descriptionStyle }>Keep in sync with cloud based team collaboration.</p>
        </li>
        <li style={ listItemStyle }>
          <img src={ storyclock } style={ icnStyle } alt=""/>
          <h3>Storyclock</h3>
          <p style={ descriptionStyle }>Know exactly where you are in time with Storyclock organization.</p>
        </li>
        <li style={ listItemStyle }>
          <img src={ storyboard } style={ icnStyle } alt=""/>
          <h3>Storyboard</h3>
          <p style={ descriptionStyle }>Full digital whiteboard for brainstorming and outlining complex ideas.</p>
        </li>
        <li style={ listItemStyle }>
          <img src={ storycard } style={ icnStyle } alt=""/>
          <h3>Storycard</h3>
          <p style={ descriptionStyle }>Reshape your storyline with ease using drag and drop storycards.</p>
        </li>
      </ul>
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
