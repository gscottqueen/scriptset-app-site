import React from 'react'

const bannerStyles = { 
  "backgroundColor" : "#f2f2f2",
  "padding" : "3rem 0px 6rem 0px"
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
        <h2 style={ statementStyle }>We choose to be creators...</h2>
          <p>We choose to be part of the next chapter. To work day and night, so you can be free to make the next great screenplay. We hope that you will join us on this exciting journey.</p>
    </div>
  </div>
)

export default StatementBanner