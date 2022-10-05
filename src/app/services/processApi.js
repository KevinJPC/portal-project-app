import { portalApi } from './portalApi'
import { providesList } from './tagProvider'

export const processApi = portalApi.injectEndpoints({
	endpoints: builder => ({
		getActivesProcess: builder.query({
			query: () => 'processes/actives',
			providesTags: result => providesList(result, 'Process'),
		}),
		getInactivesProcess: builder.query({
			query: () => 'processes/inactives',
			providesTags: result => providesList(result, 'Process'),
		}),
	}),
})

export const {
	useGetActivesProcessQuery,
	useGetInactivesProcessQuery,
	useGetProcessByIdQuery,
	useGetVisiblesProcessQuery,
	useAddNewProcessMutation,
	useUpdateProcessMutation,
	useInactivateProcessMutation,
	useActivateProcessMutation,
} = processApi
