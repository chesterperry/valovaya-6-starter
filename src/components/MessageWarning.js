import React from "react";
// import PropTypes from 'prop-types'

const MessageWarning = ({ children }) => {
	return (
		<article className="message is-warning">
			<div class="message-body">{children}</div>
		</article>
	);
};

export default MessageWarning;
