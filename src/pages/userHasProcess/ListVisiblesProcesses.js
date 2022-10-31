import React, { useEffect, useState } from 'react'
import { useLazyGetVisiblesProcessQuery } from '../../app/services/processApi'
import ListEmptyMessage from '../../components/ListEmptyMessage'
import Pagination from '../../components/pagination/Pagination'
import SearchBar from '../../components/SearchBar'
import Spinner from '../../components/Spinner'
import VisiblesProcesses from '../../components/VisiblesProcesses'

function ListVisiblesProcesses() {
	const [
		getVisiblesProcess,
		{ data: visiblesProcesses, isSuccess, isLoading },
	] = useLazyGetVisiblesProcessQuery()

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

	return (
		<>
			<SearchBar
				// getdata={getdata}
				title='Procesos'
			/>
			{isLoading ? (
				<div className='mt-6 flex justify-center items-center'>
					<p className='text-p-blue font-fira-medium'>Cargando...</p>
					<Spinner />
				</div>
			) : visiblesProcesses?.data.userProcesses.total > 0 ? (
				<>
					{visiblesProcesses?.data.userProcesses.data.map(process => (
						<VisiblesProcesses
							key={process.id}
							allVisiblesProcesses={visiblesProcesses?.data.userProcesses.data}
							visibleProcesses={process}
						/>
					))}
					<div className='mt-6'>
						<Pagination
							changePage={changePageNumber}
							pageCount={Math.ceil(
								visiblesProcesses?.data.userProcesses.lastPage
							)}
						/>
					</div>
				</>
			) : (
				<ListEmptyMessage text='El listado de procesos está vacío' />
			)}
		</>
	)
}

export default ListVisiblesProcesses
