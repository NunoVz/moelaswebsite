import React from "react";
import { useMediaQuery } from "react-responsive";
import ReactPaginate from "react-paginate";
import PropTypes from "prop-types";

import { Shot } from "../../components";
import ShotsJSON from '../../assets/shots.json'
import left from "../../images/chevron-left-solid.svg";
import right from "../../images/chevron-right-solid.svg";

import "./Shots.css";

function Shots({ itemsPerPage }) {
	const [shots] = React.useState(ShotsJSON);

	// console.log('shots: ' + Object.keys(shots));

	const [itemOffset, setItemOffset] = React.useState(0);

	const endOffset = itemOffset + itemsPerPage;
	// import items from '../../assets/shots.json'

	const currentItems = Object.keys(shots).slice(itemOffset, endOffset);
	const pageCount = Math.ceil(Object.keys(shots).length / itemsPerPage);
	console.log("Page count: " + pageCount);

	// Handle user clicks on pagination buttons
	const handlePageClick = (event) => {
		const newOffset = event.selected * itemsPerPage;
		console.log(
			'User requested page number ${event.selected}, which is offset ${newOffset}'
		);
		setItemOffset(newOffset);
	};

	const isMobile = useMediaQuery({ maxWidth: 768 });

	// console log current items
	console.log(currentItems);

	return !isMobile ? (
		<div className="shots" id="shots">
			<h1>LISTA DE SHOTS</h1>
			<div className="shots-table">
				<div className="shots-table-column-left">
					{currentItems.slice(0, itemsPerPage/2).map((shot, index) => (
						<Shot
							key={index}
							number={index + itemOffset + 1}
							name={shot}
							description={shots[shot]}
							isShot={true}
						/>
					))}
				</div>

				<div className="shots-table-column-right">
					{currentItems.slice(itemsPerPage/2, itemsPerPage).map((shot, index) => (
						<Shot
							key={index}
							number={index + itemOffset + itemsPerPage/2 + 1}
							name={shot}
							description={shots[shot]}
							isShot={true}
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

					disabledClassName={"disabled"}
					pageLinkClassName={"page-link"}
					previousClassName={"pagination-navigation"}
					nextClassName={"pagination-navigation"}
					previousLinkClassName={"page-link"}
					nextLinkClassName={"page-link"}
					breakLinkClassName={"page-link"}
				/>
			</div>
		</div>
	) : (
		<div className="shots" id="shots">
			<h1>LISTA DE SHOTS</h1>
			<div className="shots-table">
				<div className="shots-table-column">
					{Object.keys(shots).map((shot, index) => (
						<Shot
							key={index}
							number={index + 1}
							name={shot}
							description={shots[shot]}
							isShot={true}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

Shots.propTypes = {
	itemsPerPage: PropTypes.number
};

export default Shots;