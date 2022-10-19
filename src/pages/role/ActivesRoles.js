import React, { useState } from 'react'
import {
	useGetActivesRolesQuery,
	useGetInactivesRolesQuery,
	useGetSearchRoleQuery,
	useLazyGetSearchRoleQuery,
} from '../../app/services/roleApi'
import SearchBar from '../../components/SearchBar'
import Roles from '../../components/Roles'

const ActivesRoles = () => {
	const [roleSearch, setRoleSearch] = useState('')

	const [roleState, setRoleState] = useState('actives')
	const { data: actives } = useGetActivesRolesQuery()
	const { data: inactives } = useGetInactivesRolesQuery()

	const [trigger, { data: search, isUninitialized, isSuccess }] =
		useLazyGetSearchRoleQuery(roleSearch)
	const getState = value => {
		setRoleState(value)
	}
	const getdata = data => {
		if (data === '') {
			console.log('vacio')
		} else {
			setRoleSearch(data)
			trigger(data)
		}
	}

	return (
		<div className='w-full'>
			<div className='h-24'>
				<SearchBar
					getState={getState}
					getdata={getdata}
					title='Roles'
					buttonText='Nuevo rol'
					route='registrar'
				/>
			</div>
			<div className='mb-10'>
				{roleSearch !== ''
					? search?.data.roles.data.map(rol => (
							<Roles
								key={rol.id}
								data={rol}
								buttonText='Modificar'
							/>
					  ))
					: roleState === 'actives'
					? actives?.data.roles.data.map(rol => (
							<Roles
								key={rol.id}
								data={rol}
								buttonText='Modificar'
							/>
					  ))
					: inactives?.data.roles.data.map(rol => (
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
/**
 * 
 * 

 {roleSearch !== '.'
					? search?.roles.map(rol => (
					<Roles
						key={rol.id}
						data={rol}
						buttonText='Activar'
					/>
				))
					: roleState === 'actives'
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
*
*
*
*
*
*
*
 * {roleState === 'actives'
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
 * 
 * 
 * 
 * 
 * 
 * {search?.map(rol => (
					<Roles
						key={rol.id}
						data={rol}
						buttonText='Activar'
					/>
				))}
 */
