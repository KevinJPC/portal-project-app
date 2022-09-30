import React from 'react'
import Processes from '../../components/Processes'
import SearchBar from '../../components/SearchBar'

const ActivesProcesses = () => {
	return (
		<div>
			<div className='h-24 mt-14 py-2'>
				<SearchBar
					title='Roles'
					buttonText='Nuevo rol'
					route='register'
				/>
			</div>
			<div className='mb-10'>
				<Processes
					name='Servicio al cliente'
					creationDate='25/09/2022'
					modifyDate='28/09/2022'
					buttonText='Modificar'
					route='register'
				/>
				<Processes
					name='Servicio al cliente'
					creationDate='25/09/2022'
					modifyDate='28/09/2022'
					buttonText='Modificar'
					route='register'
				/>
				<Processes
					name='Servicio al cliente'
					creationDate='25/09/2022'
					modifyDate='28/09/2022'
					buttonText='Modificar'
					route='register'
				/>
				<Processes
					name='Servicio al cliente'
					creationDate='25/09/2022'
					modifyDate='28/09/2022'
					buttonText='Modificar'
					route='register'
				/>
				<Processes
					name='Servicio al cliente'
					creationDate='25/09/2022'
					modifyDate='28/09/2022'
					buttonText='Modificar'
					route='register'
				/>
				<Processes
					name='Servicio al cliente'
					creationDate='25/09/2022'
					modifyDate='28/09/2022'
					buttonText='Modificar'
					route='register'
				/>
			</div>
		</div>
	)
}

export default ActivesProcesses
