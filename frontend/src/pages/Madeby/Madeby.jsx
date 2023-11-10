import insta from '../../images/instagram.svg'
import face from '../../images/facebook.svg'

import './Madeby.css'

export default function Madeby() {
	return (
		<div className='madeby'>
			<div className="madeby-contact">
				<span>Contacto</span>
				<a href="mailto:moelasbar@gmail.com">moelasbar@gmail.com</a>
			</div>

			<div className="madeby-socials">
				<div className="madeby-socials-links">
					<div className="madeby-socials-links-item">
						<a href="https://www.instagram.com/omoelas/"><img src={insta} alt="" /></a>
					</div>
					<div className="madeby-socials-links-item">
						<a href="https://www.facebook.com/profile.php?id=100064256636893"><img src={face} alt="" /></a>
					</div>
				</div>
			</div>

			<div className="madeby-madeby">
				<span>Made by:</span>
				<div className='madeby-names'>
					<ul className='madeby-list'>
						<li className='madeby-list-item'><a href="https://www.linkedin.com/in/hugosbarros/">		Hugo </a></li>
						<li className='madeby-list-item'><a href="https://www.linkedin.com/in/pedromig/">				Pedro </a></li>
						<li className='madeby-list-item'><a href="https://www.linkedin.com/in/nunovasques/">		Nuno</a></li>
						<li className='madeby-list-item'><a href="https://www.behance.net/martababau">					Marta</a></li>
						<li className='madeby-list-item'><a href="https://www.linkedin.com/in/estevao-abreu/">	Estêvão</a></li>
					</ul>
				</div>
			</div>
		</div>
	)
}