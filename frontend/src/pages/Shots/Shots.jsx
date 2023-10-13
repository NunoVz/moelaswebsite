import React from "react";
import { Shot } from "../../components";

import "./Shots.css";

const Shots = () => {
	const shots = Array.from({ length: 20 }, (_, i) => ({
		number: i + 1,
		name: `Shot ${i + 1}`,
		description: [
			`Ingredient ${Math.floor(Math.random() * 10) + 1}`,
			`Ingredient ${Math.floor(Math.random() * 10) + 1}`,
			// `Ingredient ${Math.floor(Math.random() * 10) + 1}`,
		],
	}));

	return (
		<div className="shots">
			<p>LISTA DE SHOTS</p>
			<div className="shots-table">
				{/* for each shot in the db, display 10 shots on the left and 10 shots on the right */}
				<div className="shots-table-column-left">
					{shots.slice(0, 10).map((shot) => (
						<Shot
							key={shot.number}
							number={shot.number}
							name={shot.name}
							description={shot.description}
							isShot={true}
						/>
					))}
				</div>

				{/* <div className="line"></div> */}
				<vr />

				<div className="shots-table-column-right">
					{shots.slice(10).map((shot) => (
						<Shot
							key={shot.number}
							number={shot.number}
							name={shot.name}
							description={shot.description}
							isShot={true}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Shots;