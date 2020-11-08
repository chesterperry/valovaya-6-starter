import React from "react";
import PropTypes from 'prop-types';

const DropDownContent = ({ text, children }) => {

	return (
		<div class="dropdown is-hoverable is-up">
			<div class="dropdown-trigger" style={{ "max-height": 1.5 + "em", padding: 0 +'px' }}>
				<button
					class="is-light"
					aria-haspopup="true"
					aria-controls="dropdown-menu4"
				>
					<em>{text}</em>
				</button>
			</div>
			<div class="dropdown-menu" id="dropdown-menu4" role="menu">
				<div class="dropdown-content">
					<div class="dropdown-item">{children}</div>
				</div>
			</div>
		</div>
	);
};

DropDownContent.propTypes = {
text: PropTypes.string,
  }

export default DropDownContent;
