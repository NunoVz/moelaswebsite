import logo from '../../images/logo.jpg'

import './Home.css'

export default function Home() {
	return (
		<div className="home">
			<div className="bg-image"></div>
			<img className='moelas_logo' src={logo} alt="moelas_logo" />
		</div>
	)
}