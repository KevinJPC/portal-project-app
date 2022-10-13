import React, { useState } from 'react'
import { useEffect } from 'react'
import {
	useGetActivesAdminQuery,
	useGetInactivesAdminQuery,
} from '../../app/services/adminApi'
import Admins from '../../components/Admins'
import SearchBar from '../../components/SearchBar'

const ActivesAdmins = () => {
	const [adminState, setAdminState] = useState('actives')
	const { data: actives } = useGetActivesAdminQuery()
	const { data: inactives } = useGetInactivesAdminQuery()

	/**
	 * The function takes a value as an argument and sets the adminState to that value.
	 */
	const getState = value => {
		setAdminState(value)
	}

	return (
		<>
			<SearchBar
				getState={getState}
				title='Administradores'
				buttonText='Nuevo administrador'
				route='registrar'
			/>
			{adminState === 'actives'
				? actives?.data.activeUsers.data.map(admin => (
						<Admins
							key={admin.id}
							admins={admin}
							buttonText='Modificar'
						/>
				  ))
				: inactives?.data.inactiveUsers.data.map(admin => (
						<Admins
							key={admin.id}
							admins={admin}
							buttonText='Activar'
						/>
				  ))}
		</>
	)
}

export default ActivesAdmins
