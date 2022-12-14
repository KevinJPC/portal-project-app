import React from 'react'
import PropTypes from 'prop-types'
import ReactPaginate from 'react-paginate'

function Pagination({ pageCount, changePage }) {
	const handlePageClick = page => {
		changePage(page.selected + 1)
	}

	return !pageCount ? null : (
		<div className='mt-auto max-h-20 pt-5'>
			<ReactPaginate
				breakLabel='...'
				nextLabel='>'
				previousLabel='<'
				prevPageRel='...'
				onPageChange={page => handlePageClick(page)}
				pageRangeDisplayed={0}
				marginPagesDisplayed={1}
				pageCount={pageCount}
				containerClassName='pagination'
				pageLinkClassName='page-num'
				previousLinkClassName='page-num'
				nextLinkClassName='page-num'
				activeLinkClassName='active'
			/>
		</div>
	)
}

Pagination.propTypes = {
	changePage: PropTypes.func,
	pageCount: PropTypes.number,
}

export default Pagination
