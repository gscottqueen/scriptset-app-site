import React, { Component } from "react"
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { validate } from 'email-validator'

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
    this.setState({ email: event.target.value })
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
          } 
        })
      } else {
        // Email address succesfully subcribed to Mailchimp
        this.setState({       
          response: {
            result: response.result,
            msg: response.msg
          } 
        })
      }
    })
    .catch(err => {
      // Network failures, timeouts, etc
      this.setState({
        response: {
          result: response.result,
          msg: response.msg
        } 
      })
    })
  })();

  render () {
    return (
      <div>
      { this.state.response.result === `error` ? 
      <div id="mce-responses" className="input-group">
        <div className={ this.state.response.result } id="mce-response">
          <h2 className="response error">Sorry...</h2>
          <p className="msg">{ this.state.response.msg }</p>
        </div>
      </div> : null }
      { this.state.response.result === `success` ? (
        <div id="mce-responses" className="input-group">
            <div className={ this.state.response.result } id="mce-response">
              <h2 className="response success">Perfect</h2>
              <p className="msg">{ this.state.response.msg }</p>
            </div>
          </div>
      ) : (
      <form 
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
        className="mc-input--error-msg" >*</span></label> : 
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
          {/* input error message */}
          { this.state.inputClass === `mc-input--error` ? 
          <span className="mc-input--error-msg" >Something's not right...Give it another go?</span> : null }
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
      )}
    </div> 
    )
  }
}

export default MailChimp;