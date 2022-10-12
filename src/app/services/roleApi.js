import { portalApi } from './portalApi'
import { providesList } from './tagProvider'

export const roleApi = portalApi.injectEndpoints({
	endpoints: builder => ({
		getActivesRoles: builder.query({
			query: () => 'roles/actives',
			providesTags: result => providesList(result.roles.data, 'Role'),
		}),
		getInactivesRoles: builder.query({
			query: () => 'roles/inactives',
			providesTags: result => providesList(result.role.data, 'Role'),
		}),
		getRoleById: builder.query({
			query: roleId => `roles/${roleId}`,
			providesTags: result => providesList(result.role.data, 'Role'),
		}),
		addNewRole: builder.mutation({
			query: role => ({
				url: `roles/`,
				method: 'PATCH',
				body: { ...role },
			}),
		}),
		updateRole: builder.mutation({
			query: role => ({
				url: `roles/${role.id}`,
				method: 'PATCH',
				body: { ...role },
			}),
			invalidatesTags: (result, error, arg) => [{ type: 'Role', id: arg.id }],
		}),
		inactivateRole: builder.mutation({
			query: roleId => ({
				url: `roles/${roleId}/inactivate`,
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
	useAddNewRoleMutation,
	useUpdateRoleMutation,
	useInactivateRoleMutation,
	useActivateRoleMutation,
} = roleApi
