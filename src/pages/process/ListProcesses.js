import React, { useState } from 'react'

import {
	useGetActivesProcessQuery,
	useGetInactivesProcessQuery,
	useGetSearchProcessQuery,
} from '../../app/services/processApi'
import Processes from '../../components/Processes'
import SearchBar from '../../components/SearchBar'

const ActivesProcesses = () => {
	const [processSearch, setProcessSearch] = useState('')
	const [processsState, setProcessState] = useState('actives')
	const { data: actives } = useGetActivesProcessQuery()
	const { data: inactives } = useGetInactivesProcessQuery()

	const getState = value => {
		setProcessState(value)
	}
	const getdata = data => {
		setProcessSearch(data)
	}
	const { data: search } = useGetSearchProcessQuery(processSearch)

	console.log(processSearch)
	
	console.log(search)

	return (
		<>
			<SearchBar
				getState={getState}
				getdata={getdata}
				title='Procesos'
				buttonText='Nuevo proceso'
				route='registrar'
			/>
			{processSearch !== ''
				? search?.data.searchProcess.data.map(process => (
						<Processes
							key={process.id}
							processes={process}
							buttonText='Modificar'
						/>
				  ))
				: processsState === 'actives'
				? actives?.data.activeProcesses.data.map(process => (
						<Processes
							key={process.id}
							processes={process}
							buttonText='Modificar'
						/>
				  ))
				: inactives?.data.inactiveProcesses.data.map(process => (
						<Processes
							key={process.id}
							processes={process}
							buttonText='Activar'
						/>
				  ))}
		</>
	)
}

export default ActivesProcesses
/***
 * 
 * processsState === 'actives'
				? actives?.data.activeProcesses.data.map(process => (
						<Processes
							key={process.id}
							processes={process}
							buttonText='Modificar'
						/>
				  ))
				: inactives?.data.inactiveProcesses.data.map(process => (
						<Processes
							key={process.id}
							processes={process}
							buttonText='Activar'
						/>
				  ))
 */
