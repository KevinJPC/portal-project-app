import React, { useEffect } from 'react'
import ListEmptyMessage from '../../components/ListEmptyMessage'
import Pagination from '../../components/pagination/Pagination'
import Admins from '../../components/Admins'
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
		<>
			<SearchBar
				getState={changeListState}
				getdata={filterSeachData}
				title='Administradores'
				buttonText='Nuevo administrador'
				route='registrar'
			/>
			{searchState !== '' ? (
				isLoadingSearchAdmin ? (
					<div className='mt-6 flex justify-center items-center'>
						<p className='text-p-blue font-fira-medium mr-2'>Cargando...</p>
						<Spinner />
					</div>
				) : searchAdminData?.data.searchUsers.total > 0 ? (
					searchAdminData?.data.searchUsers.data.map(admin => (
						<Admins
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
					<div className='mt-6 flex justify-center items-center'>
						<p className='text-p-blue font-fira-medium'>Cargando...</p>
						<Spinner />
					</div>
				) : activesAdmins?.data.activeUsers.total > 0 ? (
					activesAdmins?.data.activeUsers.data.map(admin => (
						<Admins
							key={admin.id}
							admins={admin}
							buttonText='Modificar'
						/>
					))
				) : (
					<ListEmptyMessage text='El listado de administradores activos está vacío' />
				)
			) : isLoadingGetInactivesAdmins ? (
				<div className='mt-6 flex justify-center items-center'>
					<p className='text-p-blue font-fira-medium'>Cargando...</p>
					<Spinner />
				</div>
			) : inactivesAdmins?.data.inactiveUsers.total > 0 ? (
				inactivesAdmins?.data.inactiveUsers.data.map(admin => (
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
						listState === 'actives'
							? Math.ceil(activesAdmins?.data.activeUsers.lastPage)
							: Math.ceil(inactivesAdmins?.data.inactiveUsers.lastPage)
					}
				/>
			</div>
		</>
	)
}

export default ActivesAdmins
