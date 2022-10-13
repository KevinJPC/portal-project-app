import React, { useState } from 'react'
import {
	useGetActivesProcessQuery,
	useGetInactivesProcessQuery,
} from '../../app/services/processApi'
import Processes from '../../components/Processes'
import SearchBar from '../../components/SearchBar'

const ActivesProcesses = () => {
	const [processsState, setProcessState] = useState('actives')
	const { data: actives } = useGetActivesProcessQuery()
	const { data: inactives } = useGetInactivesProcessQuery()

	const getState = value => {
		setProcessState(value)
	}

	return (
		<div className='w-full'>
			<div className='h-24 '>
				<SearchBar
					getState={getState}
					title='Procesos'
					buttonText='Nuevo proceso'
					route='registrar'
				/>
			</div>
			{processsState === 'actives'
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
		</div>
	)
}

export default ActivesProcesses
