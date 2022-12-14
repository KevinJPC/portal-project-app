import React, { useEffect } from 'react'
import ListEmptyMessage from '../../components/ListEmptyMessage'
import Pagination from '../../components/pagination/Pagination'
import Admin from '../../components/Admin'
import SearchBar from '../../components/SearchBar'
import Spinner from '../../components/Spinner'
import useAdmin from '../../hooks/useAdmin'
import useList from '../../hooks/useList'

const ActivesAdmins = () => {
	const {
		listProps: {
			getActivesAdminsData,
			activesAdmins,
			isLoadingGetActivesAdmins,
			isSuccessGetActivesAdmins,
			getInactivesAdminsData,
			inactivesAdmins,
			isLoadingGetInactivesAdmins,
			isSuccessGetInactivesAdmins,
			searchAdmin,
			searchAdminData,
			isLoadingSearchAdmin,
		},
	} = useAdmin()

	const {
		listState,
		searchState,
		changeListState,
		changePageNumber,
		filterSeachData,
	} = useList(getActivesAdminsData, getInactivesAdminsData, searchAdmin)

	useEffect(() => {
		getActivesAdminsData()
	}, [isSuccessGetActivesAdmins])

	useEffect(() => {
		getInactivesAdminsData()
	}, [isSuccessGetInactivesAdmins])

	return (
		<div className='min-h-full flex flex-col grow'>
			<SearchBar
				getState={changeListState}
				getdata={filterSeachData}
				title='Administradores'
				buttonText='Nuevo administrador'
				route='registrar'
			/>
			{searchState !== '' ? (
				isLoadingSearchAdmin ? (
					<Spinner />
				) : searchAdminData?.data.searchUsers.total > 0 ? (
					searchAdminData?.data.searchUsers.data.map(admin => (
						<Admin
							key={admin.id}
							admins={admin}
							buttonText='Modificar'
						/>
					))
				) : (
					<ListEmptyMessage text='No se encontro ningun administrador con esos parametros de busqueda' />
				)
			) : listState === 'actives' ? (
				isLoadingGetActivesAdmins ? (
					<Spinner />
				) : activesAdmins?.data.activeUsers.total > 0 ? (
					activesAdmins?.data.activeUsers.data.map(admin => (
						<Admin
							key={admin.id}
							admins={admin}
							buttonText='Modificar'
						/>
					))
				) : (
					<ListEmptyMessage text='El listado de administradores activos está vacío' />
				)
			) : isLoadingGetInactivesAdmins ? (
				<Spinner />
			) : inactivesAdmins?.data.inactiveUsers.total > 0 ? (
				inactivesAdmins?.data.inactiveUsers.data.map(admin => (
					<Admin
						key={admin.id}
						admins={admin}
						buttonText='Activar'
					/>
				))
			) : (
				<ListEmptyMessage text='El listado de administradores inactivos está vacío' />
			)}
			<Pagination
				changePage={changePageNumber}
				pageCount={
					listState === 'actives'
						? Math.ceil(activesAdmins?.data.activeUsers.lastPage)
						: Math.ceil(inactivesAdmins?.data.inactiveUsers.lastPage)
				}
			/>
		</div>
	)
}

export default ActivesAdmins
