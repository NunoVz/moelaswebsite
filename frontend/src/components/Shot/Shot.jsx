import React from "react";

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
						{props.subcategories ? props.subcategories.map((subcategory) => (
							<div className="drink-subcategory">
								<span>{subcategory.quantity}</span>
								<span>{subcategory.price}</span>
							</div>
						)) : null}
					</div>

				</div>

			}
		</div>
	)
}

export default Shot;