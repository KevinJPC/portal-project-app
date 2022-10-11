import React from 'react'
import { useGetActivesRolesQuery } from '../../app/services/roleApi'
import SearchBar from '../../components/SearchBar'
import Roles from '../../components/Roles'

const ActivesRoles = () => {
	const { data: roles } = useGetActivesRolesQuery()
	console.log(roles)
	return (
		<div className='w-full'>
			<div className='h-24'>
				<SearchBar
					title='Roles'
					buttonText='Nuevo rol'
					route='registrar'
				/>
			</div>
			<div className='mb-10'>
				{roles?.roles.data.map(rol => (
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
