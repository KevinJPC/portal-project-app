import React, { useEffect, useState } from 'react'
import {
	useLazyGetSearchRoleQuery,
	useLazyGetActivesRolesQuery,
	useLazyGetInactivesRolesQuery,
} from '../../app/services/roleApi'
import SearchBar from '../../components/SearchBar'
import Roles from '../../components/Roles'
import Pagination from '../../components/pagination/Pagination'
import ListEmptyMessage from '../../components/ListEmptyMessage'

const ListRoles = () => {
	const [roleSearch, setRoleSearch] = useState('')
	const [roleState, setRoleState] = useState('actives')
	const [getActivesRoles, { data: actives, isSuccess: isSuccessActives }] =
		useLazyGetActivesRolesQuery()
	const [
		getInactivesRoles,
		{ data: inactives, isSuccess: isSuccessInactives },
	] = useLazyGetInactivesRolesQuery()
	const [trigger, { data: search, isUninitialized, isSuccess }] =
		useLazyGetSearchRoleQuery(roleSearch)

	useEffect(() => {
		getActivesRoles(1)
		getInactivesRoles(1)
	}, [, isSuccessActives, isSuccessInactives])

	/**
	 * The function takes a value as an argument and sets the state of the process to that value.
	 */
	const getState = value => {
		setRoleState(value)
	}

	/**
	 * takes a value as an argument and sets the pageCount state to
	 * that value.
	 */
	const changePageNumber = value => {
		if (roleState === 'actives') {
			getActivesRoles(value)
		} else {
			getInactivesRoles(value)
		}
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
		<>
			<SearchBar
				getState={getState}
				getdata={getdata}
				title='Roles'
				buttonText='Nuevo rol'
				route='registrar'
			/>
			{roleSearch !== '' ? (
				search?.data.roles.data.map(rol => (
					<Roles
						key={rol.id}
						data={rol}
						buttonText='Modificar'
					/>
				))
			) : roleState === 'actives' ? (
				actives?.data.roles.total > 0 ? (
					actives?.data.roles.data.map(rol => (
						<Roles
							key={rol.id}
							data={rol}
							buttonText='Modificar'
						/>
					))
				) : (
					<ListEmptyMessage text='El registro de roles activos está vacío' />
				)
			) : inactives?.data.roles.total > 0 ? (
				inactives?.data.roles.data.map(rol => (
					<Roles
						key={rol.id}
						data={rol}
						buttonText='Activar'
					/>
				))
			) : (
				<ListEmptyMessage text='El registro de roles inactivos está vacío' />
			)}
			<div className='mt-6'>
				<Pagination
					changePage={changePageNumber}
					pageCount={
						roleState === 'actives'
							? Math.ceil(actives?.data.roles.lastPage)
							: Math.ceil(inactives?.data.roles.lastPage)
					}
				/>
			</div>
		</>
	)
}

export default ListRoles
