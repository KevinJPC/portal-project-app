import { portalApi } from './portalApi'
import { providesList } from './tagProvider'

const userHasProcess = portalApi.injectEndpoints({
	endpoints: builder => ({
		getUserProcesses: builder.query({
			query: () => 'user-has-process/insiders',
			providesTags: result => providesList(result, 'Insider'),
		}),
		startNewProcess: builder.mutation({
			query: process => ({
				url: `user-has-process/${process.id}`,
				method: 'POST',
				body: { ...process },
			}),
			invalidatesTags: [{ type: 'Insider', id: 'LIST' }],
		}),
	}),
})

const { useGetUserProcessesQuery, useStartNewProcessMutation } = userHasProcess
