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
	}),
})

const {
	useGetActivesAdminQuery,
	useGetInactivesAdminQuery,
	useGetAdminByIdQuery,
	useAddNewAdminMutation,
	useUpdateAdminMutation,
	useInactivateAdminMutation,
	useActivateAdminMutation,
} = adminApi
