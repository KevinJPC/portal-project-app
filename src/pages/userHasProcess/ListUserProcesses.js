import React, { useEffect } from 'react'
import ListEmptyMessage from '../../components/ListEmptyMessage'
import Pagination from '../../components/pagination/Pagination'
import MyProcess from '../../components/MyProcess'
import SearchBar from '../../components/SearchBar'
import Spinner from '../../components/Spinner'
import useUserHasProcess from '../../hooks/useUserHasProcess'

function ListUserProcesses() {
	const { getUserProcessesData, userProcesses, isLoadingGetUserProcess } =
		useUserHasProcess()

	useEffect(() => {
		getUserProcessesData()
	}, [])

	return (
		<>
			<SearchBar title='Mis procesos' />
			{isLoadingGetUserProcess ? (
				<div className='mt-6 flex justify-center items-center'>
					<p className='text-p-blue font-fira-medium mr-2'>Cargando...</p>
					<Spinner />
				</div>
			) : userProcesses?.data.userProcesses.total > 0 ? (
				<>
					{userProcesses?.data.userProcesses.data.map((process, i) => (
						<MyProcess
							key={i}
							userProcesses={process}
						/>
					))}
					<div className='mt-6'>
						<Pagination
							changePage={getUserProcessesData}
							pageCount={Math.ceil(userProcesses?.data.userProcesses.lastPage)}
						/>
					</div>
				</>
			) : (
				<ListEmptyMessage text='El listado de mis procesos está vacío' />
			)}
		</>
	)
}

export default ListUserProcesses
