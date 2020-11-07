import React from "react";
// import PropTypes from 'prop-types'

const MessageDevelop = ({ children }) => {
	return (
		<article className="message is-info">
			<div class="message-body">{children}</div>
		</article>
	);
};

export default MessageDevelop;
