import { portalApi } from './portalApi'
import { providesList } from './tagProvider'

const userHasProcess = portalApi.injectEndpoints({
	endpoints: builder => ({
		getUserProcesses: builder.query({
			query: pageNum => `user-has-process/insiders?page=${pageNum}`,
			providesTags: result =>
				providesList(result.data.userProcesses.data, 'Insider'),
		}),
		startNewProcess: builder.mutation({
			query: process => ({
				url: `user-has-process/${process.id}`,
				method: 'POST',
				body: { ...process },
			}),
			invalidatesTags: [{ type: 'Insider', id: 'LIST' }],
		}),
		getSearchUserProcess: builder.query({
			query: processName => `processes/visible/${processName}`,
			providesTags: result =>
				providesList(result.data.searchUserProcesses.data, 'Process'),
		}),
	}),
})

export const {
	useGetUserProcessesQuery,
	useLazyGetUserProcessesQuery,
	useStartNewProcessMutation,
} = userHasProcess
