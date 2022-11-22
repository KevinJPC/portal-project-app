import { portalApi } from './portalApi'
import { providesList } from './tagProvider'

export const adminApi = portalApi.injectEndpoints({
	endpoints: builder => ({
		getSearchAdmin: builder.query({
			query: searchParam => `admin/search/${searchParam}`,
			providesTags: result =>
				providesList(result.data.searchUsers.data, 'Admin'),
		}),
		getActivesAdmin: builder.query({
			query: pageNum => `admin/actives?page=${pageNum}`,
			providesTags: result =>
				providesList(result.data.activeUsers.data, 'Admin'),
		}),
		getInactivesAdmin: builder.query({
			query: pageNum => `admin/inactives?page=${pageNum}`,
			providesTags: result =>
				providesList(result.data.inactiveUsers.data, 'Admin'),
		}),
		getAdminById: builder.query({
			query: adminId => `users/${adminId}`,
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
	useLazyGetSearchAdminQuery,
	useGetActivesAdminQuery,
	useLazyGetActivesAdminQuery,
	useGetInactivesAdminQuery,
	useLazyGetInactivesAdminQuery,
	useLazyGetAdminByIdQuery,
	useAddNewAdminMutation,
	useUpdateAdminMutation,
	useInactivateAdminMutation,
	useActivateAdminMutation,
	useGetSearchAdminQuery,
} = adminApi
