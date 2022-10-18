import React, { useState } from 'react'
import {
	useGetActivesAdminQuery,
	useGetInactivesAdminQuery,
	useGetSearchAdminQuery,
} from '../../app/services/adminApi'
import Admins from '../../components/Admins'
import ListEmptyMessage from '../../components/ListEmptyMessage'
import Pagination from '../../components/pagination/Pagination'
import SearchBar from '../../components/SearchBar'

const ActivesAdmins = () => {
	const [pageCount, setPageCount] = useState(1)
	const [adminSearch, setAdminSearch] = useState('')
	const [adminState, setAdminState] = useState('actives')
	const { data: actives } = useGetActivesAdminQuery(pageCount)
	const { data: inactives } = useGetInactivesAdminQuery(pageCount)

	console.log(actives?.data.activeUsers)
	/**
	 * The function takes a value as an argument and sets the adminState to that value.
	 */
	const getState = value => {
		setAdminState(value)
	}

	/**
	 * takes a value as an argument and sets the pageCount state to
	 * that value.
	 */
	const changePageNumber = value => {
		setPageCount(value)
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
			{adminSearch !== '' ? (
				search?.data.searchUsers.map(admin => (
					<Admins
						key={admin.id}
						admins={admin}
						buttonText='Modificar'
					/>
				))
			) : adminState === 'actives' ? (
				actives?.data.activeUsers.total > 0 ? (
					actives?.data.activeUsers.data.map(admin => (
						<Admins
							key={admin.id}
							admins={admin}
							buttonText='Modificar'
						/>
					))
				) : (
					<ListEmptyMessage text='El registro de activos está vacío' />
				)
			) : inactives?.data.inactiveUsers.total > 0 ? (
				inactives?.data.inactiveUsers.data.map(admin => (
					<Admins
						key={admin.id}
						admins={admin}
						buttonText='Activar'
					/>
				))
			) : (
				<ListEmptyMessage text='El registro de inactivos está vacío' />
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
