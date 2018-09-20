import React, { Component } from "react"
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { validate } from 'email-validator'

// nodes
import Fade from 'react-reveal/Fade';

import './mailchimp.css'

class MailChimp extends Component {

  constructor() {
    super()
    this.state = {
      email: '',
      response: {
        result: '',
        msg: ''
      },
      inputClass: 'mc-input',
    }
  }

  // our input event
  handleEmailChange = event => {
    this.setState({ 
      email: event.target.value,
      inputClass: 'mc-input'
     })
  }

  // wrapping this async function as a workaround to bug in babel, should be resolved in Gatsby v2 https://github.com/babel/babel/issues/4550
  handleSubmit = () => (async () => {
    // validate our email
    let userEmail = this.state.email
    const isEmailValid = validate(userEmail)
    if (!isEmailValid) {
      this.setState({
        response: {
          result: `error`,
          msg: 'Must be a valid email address.'
        },
        inputClass: 'mc-input--error',
      })
    }

    // send to mailchimp
    const response = await addToMailchimp(this.state.email)
    .then(response => {
      // Mailchimp always returns a 200 response
      // So we check the result for MC errors & failures
      if (response.result !== `success`) {
        this.setState({       
          response: {
            result: response.result,
            msg: response.msg
          },
          inputClass: 'mc-input--error',
        })
      } else {
        // Email address succesfully subcribed to Mailchimp
        this.setState({       
          response: {
            result: response.result,
            msg: response.msg
          },
          inputClass: 'mc-input--success',
        })
      }
    })
    .catch(err => {
      // Network failures, timeouts, etc
      this.setState({
        response: {
          result: response.result,
          msg: response.msg
        },
        inputClass: 'mc-input--success',
      })
    })
  })();

  render () {
    return (
      <div>
      <form 
        className={this.state.inputClass + "-msg"}
        onSubmit={
          (event) => {
            {/* prevent submit from reloading the page */}
            event.preventDefault()
            event.stopPropagation()
            this.handleSubmit(this.state.email)
          }
        }
        id="mc-embedded-subscribe-form" 
        name="mc-embedded-subscribe-form" 
        className="mc-embedded-subscribe-form"
        noValidate>
        <div className="mc-field-group">
        { this.state.inputClass === `mc-input--error` ? 
        <label 
          htmlFor="mce-EMAIL"
          className="mc-label required">Email Address<span 
          className={this.state.inputClass} >*</span></label> : 
        <label 
          htmlFor="mce-EMAIL"
          className="mc-label required">Email Address</label>}
          <div className="input-group">
            <input 
              type="email" 
              onChange={ this.handleEmailChange }
              value={ this.state.email }  
              name="EMAIL"
              placeholder="Get a beta invite" 
              className={ this.state.inputClass }
              id="mce-EMAIL"/>
              <input 
                type="submit" 
                value="Notify Me" 
                name="subscribe" 
                id="mc-embedded-subscribe" 
                className="mc-embedded-subscribe"/>
            </div>
          </div>
          {/* input response message */}
          { this.state.response.result === `error` || `success` ? 
            <span className={this.state.inputClass + "-msg"}  dangerouslySetInnerHTML={{__html: this.state.response.msg}} />
           : null }
          {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
          <div 
            hidden 
            aria-hidden="true">
            <input 
              type="text" 
              name="b_c96c18d057c48b5a5c698e040_7b1d3d1a01" 
              tabIndex="-1" 
              value=""/>
          </div>
        </form>
        {/* } */}
    </div> 
    )
  }
}

export default MailChimp;