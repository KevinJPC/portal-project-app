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
	console.log(actives)
	const { data: inactives } = useGetInactivesRolesQuery()
	return (
		<div className='w-full'>
			<div className='h-24'>
				<SearchBar
					setAdminState={setRoleState}
					title='Roles'
					buttonText='Nuevo rol'
					route='registrar'
				/>
			</div>
			<div className='mb-10'>
				{roleState === 'actives'
					? inactives?.roles.data.map(rol => (
							<Roles
								key={rol.id}
								data={rol}
							/>
					  ))
					: inactives?.roles.data.map(rol => (
							<Roles
								key={rol.id}
								data={rol}
							/>
					  ))}
			</div>
		</div>
	)
}

export default ActivesRoles
