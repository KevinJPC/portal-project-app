import React from 'react'
import { useEffect } from 'react'
import { useGetActivesAdminQuery } from '../../app/services/adminApi'
import SearchBar from '../../components/SearchBar'

const ActivesAdmins = () => {
	const { data } = useGetActivesAdminQuery()

	useEffect(() => {
		console.log(data)
	}, [])

	return (
		<>
			<SearchBar
				title='Administradores'
				buttonText='Nuevo administrador'
				route='/admin/register'
			/>
		</>
	)
}

export default ActivesAdmins
