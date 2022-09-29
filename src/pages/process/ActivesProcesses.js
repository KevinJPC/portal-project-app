import React from 'react'
import SearchBar from '../../components/SearchBar'

const ActivesProcesses = () => {
	return (
		<>
			<SearchBar
				title='Listado procesos'
				buttonText='Nuevo proceso'
				route='/admin/processes/register'
			/>
			{/* <Processes/> */}
		</>
	)
}

export default ActivesProcesses
