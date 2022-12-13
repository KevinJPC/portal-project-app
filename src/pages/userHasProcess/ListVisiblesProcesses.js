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
		<>
			<SearchBar title='Procesos' />
			{isLoadingGetVisiblesProcesses ? (
				<div className='mt-6 flex justify-center items-center'>
					<p className='text-p-blue font-fira-medium mr-2'>Cargando...</p>
					<Spinner />
				</div>
			) : visiblesProcesses?.data.userProcesses.total > 0 ? (
				<>
					{visiblesProcesses?.data.userProcesses.data.map(process => (
						<VisibleProcess
							key={process.id}
							visibleProcesses={process}
						/>
					))}
					<div className='mt-6'>
						<Pagination
							changePage={getVisiblesProcessesData}
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
