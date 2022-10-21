import { Result } from 'postcss'
import React, { useEffect, useState } from 'react'

import {
	useLazyGetSearchProcessQuery,
	useGetSearchProcessQuery,
	useLazyGetActivesProcessQuery,
	useLazyGetInactivesProcessQuery,
} from '../../app/services/processApi'
import ListEmptyMessage from '../../components/ListEmptyMessage'
import Pagination from '../../components/pagination/Pagination'
import Processes from '../../components/Processes'
import SearchBar from '../../components/SearchBar'

const ActivesProcesses = () => {
	const [processSearch, setProcessSearch] = useState('')
	const [processState, setProcessState] = useState('actives')
	const [getActivesProcesses, { data: actives, isSuccess: isSuccessActives }] =
		useLazyGetActivesProcessQuery()
	const [
		getInactivesProcesses,
		{ data: inactives, isSuccess: isSuccessInactives },
	] = useLazyGetInactivesProcessQuery()
	const [trigger, { data: search }] =
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
			console.log('vacio')
		} else {
			setProcessSearch(data)
			trigger(data)
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
				search?.data.searchProcess.data.map(process => (
					<Processes
						key={process.id}
						processes={process}
						buttonText='Modificar'
					/>
				))
			) : processState === 'actives' ? (
				actives?.data.activeProcesses.total > 0 ? (
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
