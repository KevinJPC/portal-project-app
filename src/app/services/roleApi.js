import { portalApi } from './portalApi'
import { providesList } from './tagProvider'

export const roleApi = portalApi.injectEndpoints({
	endpoints: builder => ({
		getSearchRole: builder.query({
			query: roleName => `roles/${roleName}`,
			providesTags: result => providesList(result.data.roles.data, 'Role'),
		}),
		getActivesRoles: builder.query({
			query: pageNum => `roles/actives?page=${pageNum}`,
			providesTags: result => providesList(result.roles.data, 'Role'),
		}),
		getInactivesRoles: builder.query({
			query: pageNum => `roles/inactives?page=${pageNum}`,
			providesTags: result => providesList(result.roles.data, 'Role'),
		}),
		getRoleById: builder.query({
			query: roleId => `roles/${roleId}`,
			providesTags: result => providesList(result.role.data, 'Role'),
		}),
		addNewRole: builder.mutation({
			query: role => ({
				url: `roles/`,
				method: 'POST',
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
				url: `roles/${roleId}/activate`,
				method: 'PATCH',
			}),
			invalidatesTags: (result, error, roleId) => [{ type: 'Role', roleId }],
		}),
	}),
})
export const {
	useGetSearchRoleQuery,
	useGetActivesRolesQuery,
	useLazyGetActivesRolesQuery,
	useGetInactivesRolesQuery,
	useLazyGetInactivesRolesQuery,
	useGetRoleByIdQuery,
	useAddNewRoleMutation,
	useUpdateRoleMutation,
	useInactivateRoleMutation,
	useActivateRoleMutation,
} = roleApi
