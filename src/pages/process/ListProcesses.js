import React, { useEffect, useState } from 'react'
import {
	useLazyGetSearchProcessQuery,
	useLazyGetActivesProcessQuery,
	useLazyGetInactivesProcessQuery,
} from '../../app/services/processApi'
import ListEmptyMessage from '../../components/ListEmptyMessage'
import Pagination from '../../components/pagination/Pagination'
import Processes from '../../components/Processes'
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
		<>
			<SearchBar
				getState={changeListState}
				getdata={filterSeachData}
				title='Procesos'
				buttonText='Nuevo proceso'
				route='registrar'
			/>
			{searchState !== '' ? (
				isLoadingSearchProcess ? (
					<div className='mt-6 flex justify-center items-center'>
						<p className='text-p-blue font-fira-medium mr-2'>Cargando...</p>
						<Spinner />
					</div>
				) : searchProcessData?.data.searchProcesses.total > 0 ? (
					searchProcessData?.data.searchProcesses.data.map(process => (
						<Processes
							key={process.id}
							processes={process}
							buttonText='Modificar'
						/>
					))
				) : (
					<ListEmptyMessage text='No se encontro ningun proceso con esos parametros de busqueda' />
				)
			) : listState === 'actives' ? (
				isLoadingGetActivesProcesses ? (
					<div className='mt-6 flex justify-center items-center'>
						<p className='text-p-blue font-fira-medium mr-2'>Cargando...</p>
						<Spinner />
					</div>
				) : activesProcesses?.data.activeProcesses.total > 0 ? (
					activesProcesses?.data.activeProcesses.data.map(process => (
						<Processes
							key={process.id}
							processes={process}
							buttonText='Modificar'
						/>
					))
				) : (
					<ListEmptyMessage text='El listado de procesos activos está vacío' />
				)
			) : isLoadingGetInactivesProcesses ? (
				<div className='mt-6 flex justify-center items-center'>
					<p className='text-p-blue font-fira-medium'>Cargando...</p>
					<Spinner />
				</div>
			) : inactivesProcesses?.data.inactiveProcesses.total > 0 ? (
				inactivesProcesses?.data.inactiveProcesses.data.map(process => (
					<Processes
						key={process.id}
						processes={process}
						buttonText='Activar'
					/>
				))
			) : (
				<ListEmptyMessage text='El listado de procesos inactivos está vacío' />
			)}
			<div className='mt-6'>
				<Pagination
					changePage={changePageNumber}
					pageCount={
						listState === 'actives'
							? Math.ceil(activesProcesses?.data.activeProcesses.lastPage)
							: Math.ceil(inactivesProcesses?.data.inactiveProcesses.lastPage)
					}
				/>
			</div>
		</>
	)
}

export default ActivesProcesses
