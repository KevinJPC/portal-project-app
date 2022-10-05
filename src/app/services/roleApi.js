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
		updateRole: builder.query({
			query: roleId => ({
				url: `role/${roleId}`,
				method: 'PATCH',
				body: { ...roleId },
			}),
            invalidatesTags: (result, error, arg) => [{ type: 'Role', id: arg.id }]
		}),
        activateRoleById: builder.query({
			query: roleId => `role/${roleId}/activate`,
			providesTags: (result, error, arg) => [{ type: 'Role', id: arg }],
		}),
		inactivateRoleById: builder.query({
			query: roleId => `role/${roleId}/inactivate`,
			providesTags: (result, error, arg) => [{ type: 'Role', id: arg }],
		}),
	}),
})

export const {
	useGetActivesRolesQuery,
	useGetInactivesRolesQuery,
	useGetRolesByIdQuery,
	useGetVisiblesRolesQuery,
	useAddNewRolesMutation,
	useUpdateRoleMutation,
	useInactivesRolesMutation,
	useActivesRolesMutation,
} = roleApi
