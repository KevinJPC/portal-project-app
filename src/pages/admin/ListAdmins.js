import React, { useEffect, useState } from 'react'
import {
	useLazyGetSearchAdminQuery,
	useLazyGetActivesAdminQuery,
	useLazyGetInactivesAdminQuery,
} from '../../app/services/adminApi'
import Admins from '../../components/Admins'
import ListEmptyMessage from '../../components/ListEmptyMessage'
import Pagination from '../../components/pagination/Pagination'
import SearchBar from '../../components/SearchBar'
import Spinner from '../../components/Spinner'

const ActivesAdmins = () => {
	const [adminSearch, setAdminSearch] = useState('')
	const [adminState, setAdminState] = useState('actives')
	const [
		getActivesAdmins,
		{ data: actives, isSuccess: isSuccessActives, isLoading: isLoadingActives },
	] = useLazyGetActivesAdminQuery()
	const [
		getInactivesAdmins,
		{
			data: inactives,
			isSuccess: isSuccessInactives,
			isLoading: isLoadingInactives,
		},
	] = useLazyGetInactivesAdminQuery()
	const [searchAdmin, { data: search, isLoading: isLoadingSearch }] =
		useLazyGetSearchAdminQuery(adminSearch)

	useEffect(() => {
		getActivesAdmins(1)
		getInactivesAdmins(1)
	}, [isSuccessActives, isSuccessInactives])

	/**
	 * The function takes a value as an argument and sets the adminState to that value.
	 */
	const getState = value => {
		setAdminState(value)
	}

	/**
	 * If the adminState is actives, then getActivesAdmins(value) is called, otherwise
	 * getInactivesAdmins(value) is called.
	 */
	const changePageNumber = value => {
		if (adminState === 'actives') {
			getActivesAdmins(value)
		} else {
			getInactivesAdmins(value)
		}
	}

	/**
	 * It takes in a parameter called data, and then sets the state of roleSearch to the value of data.
	 */
	const getdata = data => {
		if (data === '') {
			setAdminSearch(data)
		} else {
			setAdminSearch(data)
			searchAdmin(data)
		}
	}

	return (
		<>
			<SearchBar
				getState={getState}
				getdata={getdata}
				title='Administradores'
				buttonText='Nuevo administrador'
				route='registrar'
			/>
			{adminSearch !== '' ? (
				isLoadingSearch ? (
					<div className='mt-6 flex justify-center items-center'>
						<p className='text-p-blue font-fira-medium'>Cargando...</p>
						<Spinner />
					</div>
				) : search?.data.searchUsers.total > 0 ? (
					search?.data.searchUsers.data.map(admin => (
						<Admins
							key={admin.id}
							admins={admin}
							buttonText='Modificar'
						/>
					))
				) : (
					<ListEmptyMessage text='No se encontro ningun administrador con esos parametros de busqueda' />
				)
			) : adminState === 'actives' ? (
				isLoadingActives ? (
					<div className='mt-6 flex justify-center items-center'>
						<p className='text-p-blue font-fira-medium'>Cargando...</p>
						<Spinner />
					</div>
				) : actives?.data.activeUsers.total > 0 ? (
					actives?.data.activeUsers.data.map(admin => (
						<Admins
							key={admin.id}
							admins={admin}
							buttonText='Modificar'
						/>
					))
				) : (
					<ListEmptyMessage text='El listado de administradores activos está vacío' />
				)
			) : isLoadingInactives ? (
				<div className='mt-6 flex justify-center items-center'>
					<p className='text-p-blue font-fira-medium'>Cargando...</p>
					<Spinner />
				</div>
			) : inactives?.data.inactiveUsers.total > 0 ? (
				inactives?.data.inactiveUsers.data.map(admin => (
					<Admins
						key={admin.id}
						admins={admin}
						buttonText='Activar'
					/>
				))
			) : (
				<ListEmptyMessage text='El listado de administradores inactivos está vacío' />
			)}
			<div className='mt-6'>
				<Pagination
					changePage={changePageNumber}
					pageCount={
						adminState === 'actives'
							? Math.ceil(actives?.data.activeUsers.lastPage)
							: Math.ceil(inactives?.data.inactiveUsers.lastPage)
					}
				/>
			</div>
		</>
	)
}

export default ActivesAdmins
