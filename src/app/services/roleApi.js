import { portalApi } from './portalApi'
import { providesList } from './tagProvider'

export const roleApi = portalApi.injectEndpoints({
	endpoints: builder => ({
		getActivesRoles: builder.query({
			query: () => 'roles/actives',
			providesTags: result => providesList(result, 'Role'),
		}),
		getInactivesRoles: builder.query({
			query: () => 'roles/inactives',
			providesTags: result => providesList(result, 'Role'),
		}),
		getRoleById: builder.query({
			query: roleId => `role/${roleId}`,
			providesTags: (result, error, arg) => [{ type: 'Role', id: arg }],
		}),
		addNewRole: builder.query({
			query: role => ({
				url: `role/`,
				method: 'PATCH',
				body: { ...role },
			}),
		}),
		updateRole: builder.query({
			query: role => ({
				url: `role/${role.id}`,
				method: 'PATCH',
				body: { ...role },
			}),
			invalidatesTags: (result, error, arg) => [{ type: 'Role', id: arg.id }],
		}),
		inactivateRole: builder.mutation({
			query: roleId => ({
				url: `role/${roleId}/inactivate`,
				method: 'PATCH',
			}),
			invalidatesTags: (result, error, roleId) => [{ type: 'Role', roleId }],
		}),
		activateRole: builder.mutation({
			query: roleId => ({
				url: `role/${roleId}/activate`,
				method: 'PATCH',
			}),
			invalidatesTags: (result, error, roleId) => [{ type: 'Role', roleId }],
		}),
	}),
})

export const {
	useGetActivesRolesQuery,
	useGetInactivesRolesQuery,
	useGetRoleByIdQuery,
	useAddNewRoleQuery,
	useUpdateRoleQuery,
	useInactivateRoleMutation,
	useActivateRoleMutation,
} = roleApi
