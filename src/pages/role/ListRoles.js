import React, { useEffect } from 'react'
import ListEmptyMessage from '../../components/ListEmptyMessage'
import Pagination from '../../components/pagination/Pagination'
import Roles from '../../components/Roles'
import SearchBar from '../../components/SearchBar'
import Spinner from '../../components/Spinner'
import useRole from '../../hooks/useRole'
import useList from '../../hooks/useList'

const ListRoles = () => {
	const {
		listProps: {
			getActivesRolesData,
			activesRoles,
			isLoadingGetActivesRoles,
			isSuccessGetActivesRoles,
			getInactivesRolesData,
			inactivesRoles,
			isLoadingGetInactivesRoles,
			isSuccessGetInactivesRoles,
			searchRole,
			searchRoleData,
			isLoadingSearchRole,
		},
	} = useRole()

	const {
		listState,
		searchState,
		changeListState,
		changePageNumber,
		filterSeachData,
	} = useList(getActivesRolesData, getInactivesRolesData, searchRole)

	/* Calling the `getActivesRoles` and `getInactivesRoles` functions when the component is mounted. */
	useEffect(() => {
		getActivesRolesData()
	}, [isSuccessGetActivesRoles])

	useEffect(() => {
		getInactivesRolesData()
	}, [isSuccessGetInactivesRoles])

	return (
		<>
			<SearchBar
				getState={changeListState}
				getdata={filterSeachData}
				title='Roles'
				buttonText='Nuevo rol'
				route='registrar'
			/>
			{searchState !== '' ? (
				isLoadingSearchRole ? (
					<div className='mt-6 flex justify-center items-center'>
						<p className='text-p-blue font-fira-medium mr-2'>Cargando...</p>
						<Spinner />
					</div>
				) : searchRoleData?.data.roles.total > 0 ? (
					searchRoleData?.data.roles.data.map(rol => (
						<Roles
							key={rol.id}
							data={rol}
							buttonText='Modificar'
						/>
					))
				) : (
					<ListEmptyMessage text='No se encontro ningun rol con esos parametros de busqueda' />
				)
			) : listState === 'actives' ? (
				isLoadingGetActivesRoles ? (
					<div className='mt-6 flex justify-center items-center'>
						<p className='text-p-blue font-fira-medium'>Cargando...</p>
						<Spinner />
					</div>
				) : activesRoles?.data.roles.total > 0 ? (
					activesRoles?.data.roles.data.map(rol => (
						<Roles
							key={rol.id}
							data={rol}
							buttonText='Modificar'
						/>
					))
				) : (
					<ListEmptyMessage text='El listado de roles activos está vacío' />
				)
			) : isLoadingGetInactivesRoles ? (
				<div className='mt-6 flex justify-center items-center'>
					<p className='text-p-blue font-fira-medium'>Cargando...</p>
					<Spinner />
				</div>
			) : inactivesRoles?.data.roles.total > 0 ? (
				inactivesRoles?.data.roles.data.map(rol => (
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
						listState === 'actives'
							? Math.ceil(activesRoles?.data.roles.lastPage)
							: Math.ceil(inactivesRoles?.data.roles.lastPage)
					}
				/>
			</div>
		</>
	)
}

export default ListRoles
