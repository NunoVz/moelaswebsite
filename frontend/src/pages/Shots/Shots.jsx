import React from "react";
import { useMediaQuery } from "react-responsive";
import { Shot } from "../../components";
import ShotsJSON from '../../assets/shots.json'


import "./Shots.css";

const Shots = () => {
	const [shots] = React.useState(ShotsJSON);


	const isMobile = useMediaQuery({ maxWidth: 768 });

	return !isMobile ? (
		<div className="shots" id="shots">
			<h1>LISTA DE SHOTS</h1>
			<div className="shots-table">
				<div className="shots-table-column-left">
					{Object.keys(shots).slice(0, 10).map((shot, index) => (
						<Shot
							key={index}
							number={index + 1}
							name={shot}
							description={shots[shot]}
							isShot={true}
						/>
					))}
				</div>

				{/* <vr /> */}

				<div className="shots-table-column-right">
					{Object.keys(shots).slice(10, 20).map((shot, index) => (
						<Shot
							key={index}
							number={index + 10 + 1}
							name={shot}
							description={shots[shot]}
							isShot={true}
						/>
					))}
				</div>
			</div>
		</div>
	) : (
		<div className="shots" id="shots">
			<h1>LISTA DE SHOTS</h1>
			<div className="shots-table">
				<div className="shots-table-column">
					{Object.keys(shots).map((shot, index) => (
						<Shot
							key={index}
							number={index + 1}
							name={shot}
							description={shots[shot]}
							isShot={true}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Shots;