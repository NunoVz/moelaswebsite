import React from 'react'
import { useMediaQuery } from 'react-responsive'

import './Navbar.css'

function Navbar() {
	const isMobile = useMediaQuery({ maxWidth: 768 })

	return isMobile ? (null) : (
		<div className="navbar">
			<ul className='navbar-links'>
				<li><a href="#sobre">sobre</a ></li >
				<li><a href="#shots">shots</a></li>
				<li><a href="#precario">preçário</a></li>
			</ul >
		</div >
	);
}

export default Navbar