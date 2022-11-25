import { portalApi } from './portalApi'
import { providesList } from './tagProvider'

const userHasProcess = portalApi.injectEndpoints({
	endpoints: builder => ({
		getUserProcesses: builder.query({
			query: pageNum => `users/processes/insiders?page=${pageNum}`,
			providesTags: result =>
				providesList(result.data.userProcesses.data, 'Insider'),
		}),
		getUserProcessById: builder.query({
			query: processId => `users/processes/${processId}`,
			providesTags: result => providesList(result.data.process.data, 'Insider'),
		}),
		getUserProcessEnabledActivityForm: builder.query({
			query: userhasprocessId =>
				`users/processes/${userhasprocessId}/enabled-activity/form`,
			// providesTags: result =>
			// 	providesList(result.data.activity.data, 'Insider'),
		}),
		saveUserProcessEnabledActivityForm: builder.query({
			query: userhasprocess => ({
				url: `users/processes/${userhasprocess.id}/enabled-activity/form`,
				method: 'POST',
				body: { ...userhasprocess },
			}),
			// providesTags: result =>
			// 	providesList(result.data.userProcesses.data, 'Insider'),
		}),
		startNewProcess: builder.mutation({
			query: processId => ({
				url: `users/processes/${processId}/start`,
				method: 'POST',
			}),
			invalidatesTags: [{ type: 'Insider', id: 'LIST' }],
		}),
	}),
})

export const {
	useGetUserProcessesQuery,
	useLazyGetUserProcessesQuery,
	useGetUserProcessByIdQuery,
	useLazyGetUserProcessByIdQuery,
	useGetUserProcessEnabledActivityFormQuery,
	useLazyGetUserProcessEnabledActivityFormQuery,
	useStartNewProcessMutation,
} = userHasProcess
