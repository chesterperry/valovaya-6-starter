import React from 'react'
import PropTypes from 'prop-types'
import rehypeReact from "rehype-react"
import MessageInfo from './MessageInfo'
import MessageWarning from './MessageWarning'
import Citation from './Сitation'


export const HTMLContent = ({ content, className }) => (
  renderAst(content)
)

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: 
    { "messageinfo": MessageInfo , 
    "messagewarning": MessageWarning,
    "citation": Citation    
  }
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
