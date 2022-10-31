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

const ActivesProcesses = () => {
	const [processSearch, setProcessSearch] = useState('')
	const [processState, setProcessState] = useState('actives')
	const [
		getActivesProcesses,
		{ data: actives, isSuccess: isSuccessActives, isLoading: isLoadingActives },
	] = useLazyGetActivesProcessQuery()
	const [
		getInactivesProcesses,
		{
			data: inactives,
			isSuccess: isSuccessInactives,
			isLoading: isLoadingInactives,
		},
	] = useLazyGetInactivesProcessQuery()
	const [searchProcess, { data: search, isLoading: isLoadingSearch }] =
		useLazyGetSearchProcessQuery(processSearch)

	useEffect(() => {
		getActivesProcesses(1)
		getInactivesProcesses(1)
	}, [isSuccessActives, isSuccessInactives])

	/**
	 * The function takes a value as an argument and sets the state of the process to that value.
	 */
	const getState = value => {
		setProcessState(value)
	}

	/**
	 * takes a value as an argument and sets the pageCount state to
	 * that value.
	 */
	const changePageNumber = value => {
		if (processState === 'actives') {
			getActivesProcesses(value)
		} else {
			getInactivesProcesses(value)
		}
	}

	const getdata = data => {
		if (data === '') {
			setProcessSearch(data)
		} else {
			setProcessSearch(data)
			searchProcess(data)
		}
	}

	return (
		<>
			<SearchBar
				getState={getState}
				getdata={getdata}
				title='Procesos'
				buttonText='Nuevo proceso'
				route='registrar'
			/>
			{processSearch !== '' ? (
				isLoadingSearch ? (
					<div className='mt-6 flex justify-center items-center'>
						<p className='text-p-blue font-fira-medium'>Cargando...</p>
						<Spinner />
					</div>
				) : search?.data.searchProcesses.total > 0 ? (
					search?.data.searchProcesses.data.map(process => (
						<Processes
							key={process.id}
							processes={process}
							buttonText='Modificar'
						/>
					))
				) : (
					<ListEmptyMessage text='No se encontro ningun proceso con esos parametros de busqueda' />
				)
			) : processState === 'actives' ? (
				isLoadingActives ? (
					<div className='mt-6 flex justify-center items-center'>
						<p className='text-p-blue font-fira-medium'>Cargando...</p>
						<Spinner />
					</div>
				) : actives?.data.activeProcesses.total > 0 ? (
					actives?.data.activeProcesses.data.map(process => (
						<Processes
							key={process.id}
							processes={process}
							buttonText='Modificar'
						/>
					))
				) : (
					<ListEmptyMessage text='El listado de procesos activos está vacío' />
				)
			) : isLoadingInactives ? (
				<div className='mt-6 flex justify-center items-center'>
					<p className='text-p-blue font-fira-medium'>Cargando...</p>
					<Spinner />
				</div>
			) : inactives?.data.inactiveProcesses.total > 0 ? (
				inactives?.data.inactiveProcesses.data.map(process => (
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
						processState === 'actives'
							? Math.ceil(actives?.data.activeProcesses.lastPage)
							: Math.ceil(inactives?.data.inactiveProcesses.lastPage)
					}
				/>
			</div>
		</>
	)
}

export default ActivesProcesses
