import React, { useEffect } from 'react'
import ListEmptyMessage from '../../components/ListEmptyMessage'
import Pagination from '../../components/pagination/Pagination'
import SearchBar from '../../components/SearchBar'
import Spinner from '../../components/Spinner'
import VisibleProcess from '../../components/VisibleProcess'
import useProcess from '../../hooks/useProcess'

function ListVisiblesProcesses() {
	const {
		listProps: {
			getVisiblesProcessesData,
			visiblesProcesses,
			isLoadingGetVisiblesProcesses,
		},
	} = useProcess()

	useEffect(() => {
		getVisiblesProcessesData()
	}, [])

	return (
		<div className='min-h-full flex flex-col grow'>
			<SearchBar title='Procesos' />
			{isLoadingGetVisiblesProcesses ? (
				<Spinner />
			) : visiblesProcesses?.data.userProcesses.total > 0 ? (
				<>
					{visiblesProcesses?.data.userProcesses.data.map(process => (
						<VisibleProcess
							key={process.id}
							visibleProcesses={process}
						/>
					))}

					<Pagination
						changePage={getVisiblesProcessesData}
						pageCount={Math.ceil(
							visiblesProcesses?.data.userProcesses.lastPage
						)}
					/>
				</>
			) : (
				<ListEmptyMessage text='El listado de procesos está vacío' />
			)}
		</div>
	)
}

export default ListVisiblesProcesses
