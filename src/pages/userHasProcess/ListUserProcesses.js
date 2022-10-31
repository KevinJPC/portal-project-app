import React, { useEffect } from 'react'
import { useLazyGetUserProcessesQuery } from '../../app/services/userHasProcessApi'
import ListEmptyMessage from '../../components/ListEmptyMessage'
import MyProcesses from '../../components/MyProcesses'
import Pagination from '../../components/pagination/Pagination'
import SearchBar from '../../components/SearchBar'
import Spinner from '../../components/Spinner'

function ListUserProcesses() {
	const [getUserProcesses, { data: userProcesses, isSuccess, isLoading }] =
		useLazyGetUserProcessesQuery()

	useEffect(() => {
		getUserProcesses(1)
	}, [isSuccess])

	const changePageNumber = value => {
		getUserProcesses(value)
	}

	return (
		<>
			<SearchBar
				// getdata={getdata}
				title='Mis procesos'
			/>
			{isLoading ? (
				<div className='mt-6 flex justify-center items-center'>
					<p className='text-p-blue font-fira-medium'>Cargando...</p>
					<Spinner />
				</div>
			) : userProcesses?.data.userProcesses.total > 0 ? (
				<>
					{userProcesses?.data.userProcesses.data.map((process, i) => (
						<MyProcesses
							key={i}
							userProcesses={process}
						/>
					))}
					<div className='mt-6'>
						<Pagination
							changePage={changePageNumber}
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
