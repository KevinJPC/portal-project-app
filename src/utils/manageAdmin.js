import {
	useGetActivesAdminQuery,
	useGetInactivesAdminQuery,
	useGetAdminByIdQuery,
	useAddNewAdminMutation,
	useUpdateAdminMutation,
	useInactivateAdminMutation,
	useActivateAdminMutation,
} from '../app/services/adminApi'
import Admins from '../components/Admins'
import React, { useState } from 'react'

export function GetActivesAdmins() {
	const { data: actives } = useGetActivesAdminQuery()
	actives?.data.active_users.data.map(admin => (
		<Admins
			key={admin.id}
			admin={admin}
		/>
	))
}

export const useGetInactivesAdmins = () => {
	const { data: inactives } = useGetInactivesAdminQuery()
	inactives?.data.inactive_users.data.map(admin => (
		<Admins
			key={admin.id}
			admin={admin}
		/>
	))
}
