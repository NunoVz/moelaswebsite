import React from 'react'
import { Shot } from '../../components'

import './Drinks.css'

const Drink = () => {
	const drinks = [
		{ "name": "Shots", "price": "1.10" },
		{ "name": "Finos", "subcategories": [{ "quantity": "200ml", "price": "1.10" }, { "quantity": "500ml", "price": "2.00" }] },
		{ "name": "Packs", "subcategories": [{ "quantity": "5 fichas", "price": "1.10" }, { "quantity": "10 fichas", "price": "2.00" }] },
		{ "name": "Chupas", "price": "1.10" },
		{ "name": "Sangria", "subcategories": [{ "quantity": "200ml", "price": "1.10" }, { "quantity": "500ml", "price": "2.00" }] },
		{ "name": "Caipirinhas", "subcategories": [{ "quantity": "morango", "price": "1.10" }, { "quantity": "maracuja", "price": "2.00" }] },
	]

	return (
		<div className="drinks" id='precario'>
			<div className="shots-table">
				<div className="shots-table-column-left">
					{/* map the drinks array into a Shot component */}
					{drinks.map((drink) => (
						<Shot
							key={drink.name}
							name={drink.name}
							price={drink.price}
							subcategories={drink.subcategories}
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
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Drink