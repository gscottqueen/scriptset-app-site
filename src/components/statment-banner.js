import React from 'react'

// nodes
import Fade from 'react-reveal/Fade';

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

const statementStyle = {
  "fontSize" : "40px",
}

const StatementBanner = () => (
  <div style={ bannerStyles }>
    <div style={ bannerContentStyles }>
      <Fade bottom big>
        <h2 style={ statementStyle }>We choose to be creators...</h2><p>We choose to be part of the next chapter. To work day and night, so you can be free to make the next great screenplay. We hope that you will join us on this exciting journey.</p>
      </Fade>
    </div>
  </div>
)

export default StatementBanner