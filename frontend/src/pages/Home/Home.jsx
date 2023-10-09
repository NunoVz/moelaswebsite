import React from 'react'
import logo from '../../images/logo.jpg'

import './Home.css'

const Home = () => {
	return (
		<div className="home">
			<div className="bg-image"></div>
			<img className='moelas_logo' src={logo} alt="moelas_logo" />
		</div>
	)
}

export default Home