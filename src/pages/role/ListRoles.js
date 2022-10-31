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
import Spinner from '../../components/Spinner'

const ListRoles = () => {
	const [roleSearch, setRoleSearch] = useState('')
	const [roleState, setRoleState] = useState('actives')
	const [
		getActivesRoles,
		{ data: actives, isSuccess: isSuccessActives, isLoading: isLoadingActives },
	] = useLazyGetActivesRolesQuery()
	const [
		getInactivesRoles,
		{
			data: inactives,
			isSuccess: isSuccessInactives,
			isLoading: isLoadingInactives,
		},
	] = useLazyGetInactivesRolesQuery()
	const [
		searchRoles,
		{ data: search, isUninitialized, isSuccess, isLoading: isLoadingSearch },
	] = useLazyGetSearchRoleQuery(roleSearch)

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
			setRoleSearch(data)
		} else {
			setRoleSearch(data)
			searchRoles(data)
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
				isLoadingSearch ? (
					<div className='mt-6 flex justify-center items-center'>
						<p className='text-p-blue font-fira-medium'>Cargando...</p>
						<Spinner />
					</div>
				) : search?.data.roles.total > 0 ? (
					search?.data.roles.data.map(rol => (
						<Roles
							key={rol.id}
							data={rol}
							buttonText='Modificar'
						/>
					))
				) : (
					<ListEmptyMessage text='No se encontro ningun rol con esos parametros de busqueda' />
				)
			) : roleState === 'actives' ? (
				isLoadingActives ? (
					<div className='mt-6 flex justify-center items-center'>
						<p className='text-p-blue font-fira-medium'>Cargando...</p>
						<Spinner />
					</div>
				) : actives?.data.roles.total > 0 ? (
					actives?.data.roles.data.map(rol => (
						<Roles
							key={rol.id}
							data={rol}
							buttonText='Modificar'
						/>
					))
				) : (
					<ListEmptyMessage text='El listado de roles activos está vacío' />
				)
			) : isLoadingInactives ? (
				<div className='mt-6 flex justify-center items-center'>
					<p className='text-p-blue font-fira-medium'>Cargando...</p>
					<Spinner />
				</div>
			) : inactives?.data.roles.total > 0 ? (
				inactives?.data.roles.data.map(rol => (
					<Roles
						key={rol.id}
						data={rol}
						buttonText='Activar'
					/>
				))
			) : (
				<ListEmptyMessage text='El listado de roles inactivos está vacío' />
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
