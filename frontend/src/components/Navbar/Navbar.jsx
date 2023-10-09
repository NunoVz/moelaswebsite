import React from 'react'
import './Navbar.css'

function Navbar() {
	return (
		<div className="navbar">
			<ul className='navbar-links'>
				<li><a href="#sobre">sobre</a></li>
				<li><a href="#shots">shots</a></li>
				<li><a href="#precario">preçário</a></li>
				<li><a href="#memorias">memórias</a></li>
			</ul>
		</div>
	)
}

export default Navbar