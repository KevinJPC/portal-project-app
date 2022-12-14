import React, { useEffect } from 'react'
import ListEmptyMessage from '../../components/ListEmptyMessage'
import Pagination from '../../components/pagination/Pagination'
import Role from '../../components/Role'
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

	useEffect(() => {
		getActivesRolesData()
	}, [isSuccessGetActivesRoles])

	useEffect(() => {
		getInactivesRolesData()
	}, [isSuccessGetInactivesRoles])

	return (
		<div className='min-h-full flex flex-col grow'>
			<SearchBar
				getState={changeListState}
				getdata={filterSeachData}
				title='Roles'
				buttonText='Nuevo rol'
				route='registrar'
			/>
			{searchState !== '' ? (
				isLoadingSearchRole ? (
					<Spinner />
				) : searchRoleData?.data.roles.total > 0 ? (
					searchRoleData?.data.roles.data.map(rol => (
						<Role
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
					<Spinner />
				) : activesRoles?.data.roles.total > 0 ? (
					activesRoles?.data.roles.data.map(rol => (
						<Role
							key={rol.id}
							data={rol}
							buttonText='Modificar'
						/>
					))
				) : (
					<ListEmptyMessage text='El listado de roles activos está vacío' />
				)
			) : isLoadingGetInactivesRoles ? (
				<Spinner />
			) : inactivesRoles?.data.roles.total > 0 ? (
				inactivesRoles?.data.roles.data.map(rol => (
					<Role
						key={rol.id}
						data={rol}
						buttonText='Activar'
					/>
				))
			) : (
				<ListEmptyMessage text='El listado de roles inactivos está vacío' />
			)}
			<Pagination
				changePage={changePageNumber}
				pageCount={
					listState === 'actives'
						? Math.ceil(activesRoles?.data.roles.lastPage)
						: Math.ceil(inactivesRoles?.data.roles.lastPage)
				}
			/>
		</div>
	)
}

export default ListRoles
