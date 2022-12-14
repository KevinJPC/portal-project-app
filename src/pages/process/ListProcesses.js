import React, { useEffect } from 'react'
import {
	useLazyGetSearchProcessQuery,
	useLazyGetActivesProcessQuery,
	useLazyGetInactivesProcessQuery,
} from '../../app/services/processApi'
import ListEmptyMessage from '../../components/ListEmptyMessage'
import Pagination from '../../components/pagination/Pagination'
import Process from '../../components/Process'
import SearchBar from '../../components/SearchBar'
import Spinner from '../../components/Spinner'
import useList from '../../hooks/useList'
import useProcess from '../../hooks/useProcess'

const ActivesProcesses = () => {
	const {
		listProps: {
			getActivesProcessesData,
			activesProcesses,
			isLoadingGetActivesProcesses,
			isSuccessGetActivesProcesses,
			getInactivesProcessesData,
			inactivesProcesses,
			isLoadingGetInactivesProcesses,
			isSuccessGetInactivesProcesses,
			searchProcess,
			searchProcessData,
			isLoadingSearchProcess,
		},
	} = useProcess()

	const {
		listState,
		searchState,
		changeListState,
		changePageNumber,
		filterSeachData,
	} = useList(getActivesProcessesData, getInactivesProcessesData, searchProcess)

	useEffect(() => {
		getActivesProcessesData()
	}, [isSuccessGetActivesProcesses])

	useEffect(() => {
		getInactivesProcessesData()
	}, [isSuccessGetInactivesProcesses])

	return (
		<div className='min-h-full flex flex-col grow'>
			<SearchBar
				getState={changeListState}
				getdata={filterSeachData}
				title='Procesos'
				buttonText='Nuevo proceso'
				route='registrar'
			/>
			{searchState !== '' ? (
				isLoadingSearchProcess ? (
					<Spinner />
				) : searchProcessData?.data.searchProcesses.total > 0 ? (
					searchProcessData?.data.searchProcesses.data.map(process => (
						<Process
							key={process.id}
							process={process}
							buttonText='Modificar'
						/>
					))
				) : (
					<ListEmptyMessage text='No se encontro ningun proceso con esos parametros de busqueda' />
				)
			) : listState === 'actives' ? (
				isLoadingGetActivesProcesses ? (
					<Spinner />
				) : activesProcesses?.data.activeProcesses.total > 0 ? (
					activesProcesses?.data.activeProcesses.data.map(process => (
						<Process
							key={process.id}
							process={process}
							buttonText='Modificar'
						/>
					))
				) : (
					<ListEmptyMessage text='El listado de procesos activos está vacío' />
				)
			) : isLoadingGetInactivesProcesses ? (
				<Spinner />
			) : inactivesProcesses?.data.inactiveProcesses.total > 0 ? (
				inactivesProcesses?.data.inactiveProcesses.data.map(process => (
					<Process
						key={process.id}
						process={process}
						buttonText='Activar'
					/>
				))
			) : (
				<ListEmptyMessage text='El listado de procesos inactivos está vacío' />
			)}
			<Pagination
				changePage={changePageNumber}
				pageCount={
					listState === 'actives'
						? Math.ceil(activesProcesses?.data.activeProcesses.lastPage)
						: Math.ceil(inactivesProcesses?.data.inactiveProcesses.lastPage)
				}
			/>
		</div>
	)
}

export default ActivesProcesses
