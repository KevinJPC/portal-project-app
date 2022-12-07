import { useState } from 'react'
import PropTypes from 'prop-types'

function useList(activesFunc, inactivesFunc, searchDataFunc) {
	const [listState, setListState] = useState('actives')
	const [searchState, setSearchState] = useState('')

	/**
	 *  Change the list state to switch from the list of active to inactive data
	 */
	const changeListState = value => {
		setListState(value)
	}

	/**
	 *  Receives the page number and uses the RTK Query functions (active and inactive)
	 *  to obtain the data according to the page
	 */
	const changePageNumber = pageNum => {
		if (listState === 'actives') {
			activesFunc(pageNum)
		} else {
			inactivesFunc(pageNum)
		}
	}

	/**
	 *  Receives the search parameters and passes them to the RTK Query function
	 *  and manages a search state to know when there is data
	 */
	const filterSeachData = data => {
		if (data === '') {
			setSearchState(data)
		} else {
			setSearchState(data)
			searchDataFunc(data)
		}
	}

	return {
		listState,
		searchState,
		changeListState,
		changePageNumber,
		filterSeachData,
	}
}

useList.propTypes = {
	activesFunc: PropTypes.func,
	inactivesFunc: PropTypes.func,
	searchDataFunc: PropTypes.func,
}

export default useList
