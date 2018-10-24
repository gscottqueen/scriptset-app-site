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
  <div style={bannerStyles}>
    <div style={bannerContentStyles}>
        <h2 style={statementStyle}>We choose to be creators...</h2>
          <p>When telling your story, there can be many obstacles to overcome. Don't let outdated screenwriter software keep you from getting there. Beta versions of Scriptset will be released as early as June 2019.</p>
    </div>
  </div>
)

export default StatementBanner