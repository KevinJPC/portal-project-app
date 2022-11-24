import { portalApi } from './portalApi'
import { providesList } from './tagProvider'

export const processApi = portalApi.injectEndpoints({
	endpoints: builder => ({
		getSearchProcess: builder.query({
			query: processName => `processes/search/${processName}`,
			providesTags: result =>
				providesList(result.data.searchProcesses.data, 'Process'),
		}),
		getActivesProcess: builder.query({
			query: pageNum => `processes/actives?page=${pageNum}`,
			providesTags: result =>
				providesList(result.data.activeProcesses.data, 'Process'),
		}),
		getInactivesProcess: builder.query({
			query: pageNum => `processes/inactives?page=${pageNum}`,
			providesTags: result =>
				providesList(result.data.inactiveProcesses.data, 'Process'),
		}),
		getProcessById: builder.query({
			query: processId => `processes/${processId}`,
			providesTags: (result, error, arg) => [{ type: 'Process', id: arg }],
		}),
		getVisiblesProcess: builder.query({
			query: pageNum => `processes/visibles?page=${pageNum}`,
			providesTags: result =>
				providesList(result.data.userProcesses.data, 'Process'),
		}),
		addNewProcess: builder.mutation({
			query: process => ({
				url: 'processes/register',
				method: 'POST',
				body: { ...process },
			}),
			invalidatesTags: [{ type: 'Process', id: 'LIST' }],
		}),
		updateProcess: builder.mutation({
			query: process => ({
				url: `processes/${process.id}`,
				method: 'PATCH',
				body: { ...process },
			}),
			invalidatesTags: (result, error, arg) => [
				{ type: 'Process', id: arg.id },
			],
		}),
		inactivateProcess: builder.mutation({
			query: processId => ({
				url: `processes/${processId}/inactivate`,
				method: 'PATCH',
			}),
			invalidatesTags: (result, error, processId) => [
				{ type: 'Process', processId },
			],
		}),
		activateProcess: builder.mutation({
			query: processId => ({
				url: `processes/${processId}/activate`,
				method: 'PATCH',
			}),
			invalidatesTags: (result, error, processId) => [
				{ type: 'Process', processId },
			],
		}),
	}),
})

export const {
	useGetSearchUserProcessQuery,
	useLazyGetSearchUserProcessQuery,
	useLazyGetSearchProcessQuery,
	useGetSearchProcessQuery,
	useGetActivesProcessQuery,
	useLazyGetActivesProcessQuery,
	useGetInactivesProcessQuery,
	useLazyGetInactivesProcessQuery,
	useGetProcessByIdQuery,
	useLazyGetVisiblesProcessQuery,
	useAddNewProcessMutation,
	useUpdateProcessMutation,
	useInactivateProcessMutation,
	useActivateProcessMutation,
} = processApi
