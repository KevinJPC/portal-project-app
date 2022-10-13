import React, { useState } from 'react'
import {
	useGetActivesRolesQuery,
	useGetInactivesRolesQuery,
} from '../../app/services/roleApi'
import SearchBar from '../../components/SearchBar'
import Roles from '../../components/Roles'

const ActivesRoles = () => {
	const [roleState, setRoleState] = useState('actives')
	const { data: actives } = useGetActivesRolesQuery()
	const { data: inactives } = useGetInactivesRolesQuery()
	const getState = value =>{
		setRoleState(value)
	}

	return (
		<div className='w-full'>
			<div className='h-24'>
				<SearchBar
					getState={getState}
					title='Roles'
					buttonText='Nuevo rol'
					route='registrar'
				/>
			</div>
			<div className='mb-10'>
				{roleState === 'actives'
					? actives?.roles.data.map(rol => (
							<Roles
								key={rol.id}
								data={rol}
								buttonText='Modificar'
							/>
					  ))
					: inactives?.roles.data.map(rol => (
							<Roles
								key={rol.id}
								data={rol}
								buttonText='Activar'
							/>
					  ))}
			</div>
		</div>
	)
}

export default ActivesRoles
