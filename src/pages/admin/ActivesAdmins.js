import React from 'react'
import { useEffect } from 'react'
import { useGetActivesAdminQuery } from '../../app/services/adminApi'
import SearchBar from '../../components/SearchBar'

const ActivesAdmins = () => {
	const { data: result } = useGetActivesAdminQuery()

	return (
		<>
			<SearchBar
				title='Administradores'
				buttonText='Nuevo administrador'
				route='/admin/register'
			/>
			{result?.data.active_users.data?.map((admin, index) => {
				return <div key={index}>{admin.name}</div>
			})}
		</>
	)
}

export default ActivesAdmins
