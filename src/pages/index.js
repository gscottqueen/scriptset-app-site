import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import MailChimp from '../components/mailchimp'

import macComp from './Imac2.png'
import iconOne from './if_422-Speech_Bubble_Communication_2124417.png'
import iconTwo from './if_180-Time_2123970.png'
import iconThree from './if_105-Map_2123982.png'
import iconFour from './if_54-Write_2123877.png'
import iconFive from './if_291-Book_2124172.png'
import iconSix from './if_22-Password_2672773.png'


// our inline-styles
// TODO: set up components and related css
const titleWrapperStyles = {
  "position" : "absolute",
  "padding": "50px",
  "top" : "50px"
}

const asideStyles = { 
  "background": "white",
  "padding": "50px",
  "margin": "2rem auto",
  "maxWidth": "960px"
}

const imgStyles = { 
  "margin" : "auto auto 0 auto",
  "padding" : "0",
  "position" :"relative",
  "top" : "50px"
}

const statementStyle = {  
  "marginTop" : "25px", 
  "textAlign" : "center",
  "fontWeight" : "300",
  "margin" : "50px 0"
}

const wrapperStyles = { 
  "position" :"relative",
  "top" : "-50px"
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
          <img src={ iconFive } style={ firstListIcnStyle }/>
          <h3>Write</h3>
          <p style={ descriptionStyle }>Styleguide driven intuitive interface lets you focus on creating.</p>
        </li>
        <li style={ listItemStyle }>
          <img src={ iconFour } style={ icnStyle }/>
          <h3>Proof</h3>
          <p style={ descriptionStyle }>Easy editing, proofing, and versioning.</p>
        </li>
        <li style={ listItemStyle }>
          <img src={ iconOne } style={ icnStyle }/>
          <h3>Live Colab</h3>
          <p style={ descriptionStyle }>Keep in sync with cloud based team collaboration.</p>
        </li>
        <li style={ listItemStyle }>
          <img src={ iconTwo } style={ icnStyle }/>
          <h3>Storyclock</h3>
          <p style={ descriptionStyle }>Know exactly where you are in time with Storyclock organization.</p>
        </li>
        <li style={ listItemStyle }>
          <img src={ iconThree } style={ icnStyle }/>
          <h3>Storyboard</h3>
          <p style={ descriptionStyle }>Full digital whiteboard for brainstorming and outlining complex ideas.</p>
        </li>
        <li style={ listItemStyle }>
          <img src={ iconSix } style={ icnStyle }/>
          <h3>Storycard</h3>
          <p style={ descriptionStyle }>Reshape your storyline with ease using drag and drop storycards.</p>
        </li>
      </ul>
      <h2 style={ leadintStyle }>We choose to be creators...</h2><p>We choos to be part of the next chapter. To work day and night, so you can be free to make the next great screenplay. We hope that you will join us on this exciting journey. Get updates, early releases, and more by signing up now.</p>
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
