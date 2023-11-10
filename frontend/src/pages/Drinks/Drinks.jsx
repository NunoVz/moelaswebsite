import { useMediaQuery } from 'react-responsive'
import { Shot } from '../../components'

import './Drinks.css'

const Drink = () => {
	// todo - fetch from backend instead of hardcoding
	const drinks = [
		{ "name": "Shots", "price": "1.10" },
		{ "name": "Finos", "subcategories": [{ "quantity": "200ml", "price": "1.10" }, { "quantity": "500ml", "price": "2.00" }] },
		{ "name": "Packs", "subcategories": [{ "quantity": "5 fichas", "price": "1.10" }, { "quantity": "10 fichas", "price": "2.00" }] },
		{ "name": "Chupas", "price": "1.10" },
		{ "name": "Sangria", "subcategories": [{ "quantity": "200ml", "price": "1.10" }, { "quantity": "500ml", "price": "2.00" }] },
		{ "name": "Caipirinhas", "subcategories": [{ "quantity": "morango", "price": "1.10" }, { "quantity": "maracuja", "price": "2.00" }] },
	]

	const isMobile = useMediaQuery({ maxWidth: 768 });

	return isMobile ? (
		<div className="drinks" id='precario'>
			<div className="drinks-table">
				<div className="drinks-table-column">
					{drinks.map((drink) => (
						<Shot
							key={drink.name}
							name={drink.name}
							price={drink.price}
							subcategories={drink.subcategories}
							isShot={false}
						/>
					))}
				</div>
			</div>
		</div>
	) : (
		<div className="drinks" id='precario'>
			<div className="shots-table">
				<div className="shots-table-column-left">
					{drinks.map((drink) => (
						<Shot
							key={drink.name}
							name={drink.name}
							price={drink.price}
							subcategories={drink.subcategories}
							isShot={false}
						/>
					))}
				</div>

				<div className="line"></div>

				<div className="shots-table-column-right">
					{drinks.map((drink) => (
						<Shot
							key={drink.name}
							name={drink.name}
							price={drink.price}
							subcategories={drink.subcategories}
							isShot={false}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Drink