import React from "react";
import PropTypes from "prop-types";

import "./Shot.css";

function Shot(props) {
	function separateCommas(words) {
		let result = '';
		for (let i = 0; i < words.length - 1; i++) {
			result += words[i] + ', ';
		}
		result += words[words.length - 1];
		return result;
	}
	

	return (
		<div>
			
			{props.isShot ?

				<div className="shot">

					<div className="shot-name">
						<span>{props.number}.</span>
						<span style={{ fontWeight: 'bold' }}>{props.name}</span>
					</div>

					<div className="shot-description">
						<span>{props.description}</span>
					</div>

				</div>

				:

				<div className="shot">

					<div className="drink-name">
						<span style={{ fontWeight: 'bold' }}>{props.name}</span>
						{props.price ? <span>{props.price}</span> : null}
					</div>

					<div className="shot-description">
						{props.subcategories ? props.subcategories.map((subcategory, index) => (
							<div key={index} className="drink-subcategory">
								<span>{subcategory.quantity}</span>
								<span>{subcategory.price}</span>
							</div>
						)) : null}
					</div>

				</div>

			}
		</div>
	);
}

Shot.propTypes = {
	number: PropTypes.number,
	name: PropTypes.string.isRequired,
	description: PropTypes.string,
	price: PropTypes.string,
	subcategories: PropTypes.arrayOf(PropTypes.shape({
		quantity: PropTypes.string.isRequired,
		price: PropTypes.string.isRequired
	})),
	isShot: PropTypes.bool.isRequired
};

export default Shot;