import React from 'react'
import PropTypes from 'prop-types'
import Counter from "../components/counter"
import rehypeReact from "rehype-react"



export const HTMLContent = ({ content, className }) => (
  renderAst(content)
)

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "interactive-counter": Counter },
}).Compiler

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
)

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes

export default Content
