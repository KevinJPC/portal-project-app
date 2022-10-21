import React, { useEffect } from 'react'
import { useLazyGetVisiblesProcessQuery } from '../../app/services/processApi'
import ListEmptyMessage from '../../components/ListEmptyMessage'
import Pagination from '../../components/pagination/Pagination'
import SearchBar from '../../components/SearchBar'
import VisiblesProcesses from '../../components/VisiblesProcesses'

function ListVisiblesProcesses() {
	const [getVisiblesProcess, { data: visiblesProcesses, isSuccess }] =
		useLazyGetVisiblesProcessQuery()

	useEffect(() => {
		getVisiblesProcess(1)
	}, [isSuccess])

	/**
	 * takes a value as an argument and sets the pageCount state to
	 * that value.
	 */
	const changePageNumber = value => {
		getVisiblesProcess(value)
	}

	// const getdata = data => {
	// 	if (data === '') {
	// 		console.log('vacio')
	// 	} else {
	// 		setProcessSearch(data)
	// 		trigger(data)
	// 	}
	// }

	return (
		<>
			<SearchBar
				// getdata={getdata}
				title='Procesos'
			/>
			{visiblesProcesses?.data.userProcesses.total > 0 ? (
				visiblesProcesses?.data.userProcesses.data.map(process => (
					<VisiblesProcesses
						key={process.id}
						visibleProcesses={process}
					/>
				))
			) : (
				<ListEmptyMessage text='El listado de procesos está vacío' />
			)}
			<div className='mt-6'>
				<Pagination
					changePage={changePageNumber}
					pageCount={Math.ceil(visiblesProcesses?.data.userProcesses.lastPage)}
				/>
			</div>
		</>
	)
}

export default ListVisiblesProcesses
