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
		<div className='min-h-full flex flex-col grow'>
			<SearchBar title='Mis procesos' />
			{isLoadingGetUserProcess ? (
				<Spinner />
			) : userProcesses?.data.userProcesses.total > 0 ? (
				<>
					{userProcesses?.data.userProcesses.data.map((process, i) => (
						<MyProcess
							key={i}
							userProcesses={process}
						/>
					))}
				</>
			) : (
				<ListEmptyMessage text='El listado de mis procesos está vacío' />
			)}
			<Pagination
				changePage={getUserProcessesData}
				pageCount={Math.ceil(userProcesses?.data.userProcesses.lastPage)}
			/>
		</div>
	)
}

export default ListUserProcesses
