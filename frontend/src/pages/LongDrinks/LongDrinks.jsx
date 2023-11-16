// React imports
import React from "react";
import { useMediaQuery } from "react-responsive";
import ReactPaginate from "react-paginate";

// Local imports
import { Shot } from "../../components";
import ShotsJSON from '../../assets/longdrinks.json'
import left from "../../images/chevron-left-solid.svg";
import right from "../../images/chevron-right-solid.svg";

import "../Shots/Shots.css";

// TODO: Make the index of longdrinks persistent when the user searches for something

export default function LongDrinks() {
	const isMobile = useMediaQuery({ maxWidth: 768 });

	var itemsPerPage = 14;

	if (isMobile) {
		itemsPerPage = itemsPerPage / 2;
	}

	const [shots] = React.useState(ShotsJSON);
	const [itemOffset, setItemOffset] = React.useState(0);
	const [searchTerm, setSearchTerm] = React.useState("");
	const [filteredShots, setFilteredShots] = React.useState(Object.values(shots));


	const endOffset = itemOffset + itemsPerPage;

	const currentItems = filteredShots.slice(itemOffset, endOffset);
	const pageCount = Math.ceil(filteredShots.length / itemsPerPage);
	console.log("Page count: " + pageCount);

	// Handle user clicks on pagination buttons
	const handlePageClick = (event) => {
		const newOffset = event.selected * itemsPerPage;
		console.log(
			'User requested page number ${event.selected}, which is offset ${newOffset}'
		);
		setItemOffset(newOffset);
	};

	const normalizeString = (str) => {
		return str
			.toLowerCase()
			.replace(/[áàãâä]/g, "a")
			.replace(/[éèêë]/g, "e")
			.replace(/[íìîï]/g, "i")
			.replace(/[óòõôö]/g, "o")
			.replace(/[úùûü]/g, "u")
			.replace(/[ç]/g, "c")
			.replace(/\s/g, "");
	};

	// Handle user input on search bar
	const handleSearch = (event) => {
		const term = normalizeString(event.target.value);

		setSearchTerm(term);

		const filtered = shots.filter((shot) => {
			const shotName = normalizeString(shot.name);
			const shotIngredients = normalizeString(shot.ingredients.join(', '));
			return shotName.includes(term) || shotIngredients.includes(term);
		});

		setFilteredShots(filtered);
		setItemOffset(0); // Reset offset when the search term changes
	};

	return !isMobile ? (
		// * Desktop
		<div className="shots" id="shots">
			<div className="shots-header">
				<h1>LISTA DE LONG DRINKS</h1>
				<div className="search-bar">
					<input
						type="text"
						placeholder="Procurar..."
						value={searchTerm}
						onChange={handleSearch}
					/>
				</div>
			</div>
			<div className="shots-table">
				<div className="shots-table-column-left">
					{currentItems.slice(0, itemsPerPage / 2).map((shot, index) => (
						<Shot
							key={index}
							number={index + itemOffset + 1}
							name={shot.name}
							price={shot.price}
							description={Array.isArray(shot.ingredients) ? shot.ingredients.join(', ') : ''}
							isShot={false}
						/>
					))}
				</div>
				<div className="shots-table-column-right">
					{currentItems.slice(itemsPerPage / 2, itemsPerPage).map((shot, index) => (
						<Shot
							key={index}
							number={index + itemOffset + itemsPerPage / 2 + 1}
							name={shot.name}
							price={shot.price}
							description={Array.isArray(shot.ingredients) ? shot.ingredients.join(', ') : ''}
							isShot={false}
						/>
					))}
				</div>
			</div>
			<div className="shots-pagination">
				<ReactPaginate
					breakLabel="..."
					nextLabel={<img src={right} alt="right" />}
					previousLabel={<img src={left} alt="left" />}
					onPageChange={handlePageClick}
					pageRangeDisplayed={10}
					pageCount={pageCount}
					renderOnZeroPageCount={null}

					containerClassName={"pagination"}
					pageClassName={"page-item"}
					activeClassName={"page-active"}

					pageLinkClassName={"page-link"}
					nextLinkClassName={"page-link"}
					previousLinkClassName={"page-link"}
				/>
			</div>
		</div>
	) : (
		// * Mobile
		<div className="shots" id="shots">
			<div className="shots-header">
				<h1>LISTA DE LONG DRINKS</h1>
				<div className="search-bar">
					<input
						type="text"
						placeholder="Procurar..."
						value={searchTerm}
						onChange={handleSearch}
					/>
				</div>
			</div>
			<div className="shots-table">
				<div className="shots-table-column">
					{currentItems.slice(0, itemsPerPage).map((shot, index) => (
						<Shot
							key={index}
							number={index + itemOffset + 1}
							name={shot.name}
							price={shot.price}	
							description={Array.isArray(shot.ingredients) ? shot.ingredients.join(', ') : ''}
							isShot={false}
						/>
					))}
				</div>
			</div>
			<div className="shots-pagination">
				<ReactPaginate
					breakLabel="..."
					//bigger labels for mobile
					nextLabel={<img src={right} alt="right" />}
					previousLabel={<img src={left} alt="left" />}
					onPageChange={handlePageClick}
					pageRangeDisplayed={2}
					pageCount={pageCount}
					renderOnZeroPageCount={null}

					containerClassName={"pagination"}
					pageClassName={"page-item"}
					activeClassName={"page-active"}
					nextClassName={"nav-item"}
					previousClassName={"nav-item"}

					pageLinkClassName={"page-link"}
					nextLinkClassName={"page-link"}
					previousLinkClassName={"page-link"}
				/>
			</div>
		</div>
	);
}