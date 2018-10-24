import React from 'react'
// nodes
import Fade from 'react-reveal/Fade';

// assets
import livecolab from './icon--livecolab.svg'
import storyclock from './icon--storyclock.svg'
import storyboard from './icon--storyboard.svg'
import proof from './icon--proof.svg'
import write from './icon--write.svg'
import storycard from './icon--storycard.svg'

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

const FeatureBlock = () => (
  <div>
  <ul style={ listStyle }>
      <Fade bottom big>
        <li style={ listItemStyle }>
          <img src={ write } style={ firstListIcnStyle }/>
          <h3>Write</h3>
          <p style={ descriptionStyle }>Style guide driven intuitive interface lets you focus on creating.</p>
        </li>
      </Fade>
      <Fade bottom big>
        <li style={ listItemStyle }>
          <img src={ proof } style={ icnStyle } alt=""/>
          <h3>Proof</h3>
          <p style={ descriptionStyle }>Easy editing, proofing, and versioning.</p>
        </li>
      </Fade>
      <Fade bottom big>
        <li style={ listItemStyle }>
          <img src={ livecolab } style={ icnStyle } alt=""/>
          <h3>Live Colab</h3>
          <p style={ descriptionStyle }>Keep in sync with cloud based team collaboration.</p>
        </li>
      </Fade>
      <Fade bottom big>
        <li style={ listItemStyle }>
          <img src={ storyclock } style={ icnStyle } alt=""/>
          <h3>Storyclock</h3>
          <p style={ descriptionStyle }>Know exactly where you are in time with Storyclock organization.</p>
        </li>
      </Fade>
      <Fade bottom big>
        <li style={ listItemStyle }>
          <img src={ storyboard } style={ icnStyle } alt=""/>
          <h3>Storyboard</h3>
          <p style={ descriptionStyle }>Full digital whiteboard for brainstorming and outlining complex ideas.</p>
        </li>
      </Fade>
      <Fade bottom big>
        <li style={ listItemStyle }>
          <img src={ storycard } style={ icnStyle } alt=""/>
          <h3>Storycard</h3>
          <p style={ descriptionStyle }>Reshape your storyline with ease using drag and drop story cards.</p>
        </li>
      </Fade>
      </ul>
  </div>
)

export default FeatureBlock