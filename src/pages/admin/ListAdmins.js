import React, { useState } from 'react'
import {
	useGetActivesAdminQuery,
	useGetInactivesAdminQuery,
	useGetSearchAdminQuery,
} from '../../app/services/adminApi'
import Admins from '../../components/Admins'
import SearchBar from '../../components/SearchBar'

const ActivesAdmins = () => {
	const [adminSearch, setAdminSearch] = useState('')
	const [adminState, setAdminState] = useState('actives')
	const { data: actives } = useGetActivesAdminQuery()
	const { data: inactives } = useGetInactivesAdminQuery()

	/**
	 * The function takes a value as an argument and sets the adminState to that value.
	 */
	const getState = value => {
		setAdminState(value)
	}

	/**
	 * It takes in a parameter called data, and then sets the state of roleSearch to the value of data.
	 */
	const getdata = data => {
		setAdminSearch(data)
	}

	const { data: search } = useGetSearchAdminQuery(adminSearch)



	return (
		<>
			<SearchBar
				getState={getState}
				getdata={getdata}
				title='Administradores'
				buttonText='Nuevo administrador'
				route='registrar'
			/>
			{adminSearch !== ''
				? search?.data.searchUsers.map(admin => (
						<Admins
							key={admin.id}
							admins={admin}
							buttonText='Modificar'
						/>
				  ))
				: adminState === 'actives'
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
/**
 * adminState === 'actives'
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
				  ))
 */
