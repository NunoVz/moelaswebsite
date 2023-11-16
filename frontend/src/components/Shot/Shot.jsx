import PropTypes from "prop-types";

import "./Shot.css";

export default function Shot(props) {
	return props.isShot ? (
		// * This is a shot
		<div>
			<div className="shot">
				<div className="shot-name">
					<span>{props.number}.</span>
					<span style={{ fontWeight: 'bold' }}>{props.name}</span>
				</div>
				<div className="shot-description">
					<span>{props.description}</span>
				</div>
			</div>
		</div>
	) : (
		// * This is a long drink
		<div>
			<div className="shot">
				<div className="drink-name">
					<div className="drink-left">
						<span>{props.number}.</span>
						<span style={{ fontWeight: 'bold' }}>{props.name}</span>
					</div>
					<div className="drink-right">
						<span>{props.price}</span>
					</div>
				</div>
				<div className="shot-description">
					<span>{props.description}</span>
				</div>
			</div>
		</div>
	)
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