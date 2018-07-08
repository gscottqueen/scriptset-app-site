import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'regenerator-runtime/runtime'
import './ImacSocial.png'

import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title + ' | ' + data.site.siteMetadata.titleDescription }
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: data.site.siteMetadata.keywords },
        { property:'og:description', content: data.site.siteMetadata.description },
        { property: 'og:image', content: '//www.written-app.io.com/static/' + data.site.siteMetadata.image },
        { property: 'og:url', content: '//written-app.io/'},
        { property: 'twitter:description', content: data.site.siteMetadata.description },
        { property: 'twitter:image', content: '//www.written-app.io.com/static/' + data.site.siteMetadata.image },
        { property: 'twitter:url', content: '//written-app.io/'},
      ]}
    />
    <div
      style={{
        paddingTop: 0,
        fontFamily: 'Avenir, Helvetica, Arial, sans-serif',
        textRendering: 'optimizeLegibility'
      }}
    >
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteMetaQuery {
    site {
      siteMetadata {
        title
        titleDescription
        description
        image
        keywords
      }
    }
  }
`
