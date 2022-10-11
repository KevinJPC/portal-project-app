import React from 'react'
import Processes from '../../components/Processes'
import SearchBar from '../../components/SearchBar'

const ActivesProcesses = () => {
	return (
		<div className='w-full'>
			<div className='h-24 '>
				<SearchBar
					title='Procesos'
					buttonText='Nuevo proceso'
					route='admin/procesos/registrar'
				/>
			</div>
			<div className='mb-10 '>
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
