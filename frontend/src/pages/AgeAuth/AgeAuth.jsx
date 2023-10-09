import React from 'react'
import './AgeAuth.css'

const AgeAuth = () => {
	return (
		<div className="age-auth">
			<h1>Tem mais de 18 anos?</h1>
			
			<a href="/home">
				<button className='green-button'>
					yes
				</button>
			</a>

			<a href="/home">
				<button className='red-button'>
					no
				</button>
			</a>

		</div>
	)
}

export default AgeAuth