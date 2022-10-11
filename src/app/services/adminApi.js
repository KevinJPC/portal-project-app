import { portalApi } from './portalApi'
import { providesList } from './tagProvider'

export const adminApi = portalApi.injectEndpoints({
	endpoints: builder => ({
		getActivesAdmin: builder.query({
			query: () => 'admin/actives',
			providesTags: result => providesList(result, 'Admin'),
		}),
		getInactivesAdmin: builder.query({
			query: () => 'admin/inactives',
			providesTags: result => providesList(result, 'Admin'),
		}),
		getAdminById: builder.query({
			query: adminId => `admin/${adminId}`,
			providesTags: (result, error, arg) => [{ type: 'Admin', id: arg }],
		}),
		addNewAdmin: builder.mutation({
			query: admin => ({
				url: 'admin/register',
				method: 'POST',
				body: { ...admin },
			}),
			invalidatesTags: [{ type: 'Admin', id: 'LIST' }],
		}),
		updateAdmin: builder.mutation({
			query: admin => ({
				url: `admin/${admin.id}`,
				method: 'PATCH',
				body: { ...admin },
			}),
			invalidatesTags: (result, error, arg) => [{ type: 'Admin', id: arg.id }],
		}),
		inactivateAdmin: builder.mutation({
			query: adminId => ({
				url: `admin/${adminId}/inactivate`,
				method: 'PATCH',
			}),
			invalidatesTags: (result, error, adminId) => [{ type: 'Admin', adminId }],
		}),
		activateAdmin: builder.mutation({
			query: adminId => ({
				url: `admin/${adminId}/activate`,
				method: 'PATCH',
			}),
			invalidatesTags: (result, error, adminId) => [{ type: 'Admin', adminId }],
		}),
	}),
})

export const {
	useGetActivesAdminQuery,
	useGetInactivesAdminQuery,
	useGetAdminByIdQuery,
	useAddNewAdminMutation,
	useUpdateAdminMutation,
	useInactivateAdminMutation,
	useActivateAdminMutation,
} = adminApi
