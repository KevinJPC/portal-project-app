import { portalApi } from './portalApi'

export const authApi = portalApi.injectEndpoints({
	endpoints: builder => ({
		login: builder.mutation({
			query: credentials => ({
				url: '/auth/login',
				method: 'POST',
				body: credentials,
			}),
		}),
		reconnect: builder.mutation({
			query: () => ({
				url: '/auth/reconnect',
				method: 'POST',
			}),
		}),
	}),
})

export const { useLoginMutation, useReconnectMutation } = authApi
