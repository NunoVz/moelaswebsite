import { useRouteError } from "react-router-dom";
import "./ErrorPage.css";
import logo from '../../images/logo.jpg'
// * This page is shown when the user tries to access a non-existent route

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<div id="error-page" className="center-column fullscreen">
			<img className='error-logo' src={logo} alt="moelas_logo" style={{ width: '50vw' }} />
			<p style={{ fontSize: '3rem' }}>404</p>

			<h1>Oops...</h1>
			<h1>Parece que estás perdid@!</h1>
			<p>ESTA PÁGINA NÃO EXISTE OU FOI ALTERADA</p>
		</div>
	);
}	