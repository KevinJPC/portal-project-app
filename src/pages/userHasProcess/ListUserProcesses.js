import React, { useEffect } from 'react'
import { useLazyGetUserProcessesQuery } from '../../app/services/userHasProcessApi'
import ListEmptyMessage from '../../components/ListEmptyMessage'
import MyProcesses from '../../components/MyProcesses'
import Pagination from '../../components/pagination/Pagination'
import SearchBar from '../../components/SearchBar'

function ListUserProcesses() {
	const [getUserProcesses, { data: userProcesses, isSuccess }] =
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
			{userProcesses?.data.userProcesses.total > 0 ? (
				// userProcesses?.data.userProcesses.data.map(process => (
				// 	<MyProcesses
				// 		key={process.id}
				// 		userProcesses={process}
				// 	/>
				// ))
				<p>Sopa do Makaku</p>
			) : (
				<ListEmptyMessage text='El listado de mis procesos está vacío' />
			)}
			<div className='mt-6'>
				<Pagination
					changePage={changePageNumber}
					pageCount={Math.ceil(userProcesses?.data.userProcesses.lastPage)}
				/>
			</div>
		</>
	)
}

export default ListUserProcesses
