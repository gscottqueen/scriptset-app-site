/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
exports.modifyBabelrc = ({ babelrc }) => ({
  ...babelrc,
  plugins: babelrc.plugins.concat(
    ['transform-runtime'],
    ['transform-regenerator']
  ),
}) // to deal with our async issue on static files https://github.com/gatsbyjs/gatsby/issues/3931
