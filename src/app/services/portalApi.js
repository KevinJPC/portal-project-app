import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { camelizeKeys, decamelizeKeys } from 'humps'

const baseQuery = fetchBaseQuery({
	baseUrl: 'http://127.0.0.1:8000/api/v1/',
	prepareHeaders: (headers, { getState }) => {
		headers.set('Accept', 'application/json')
		headers.set('Content-Type', 'application/json')

		const token = getState().auth.token
		if (token) headers.set('authorization', `Bearer ${token}`)

		return headers
	},
})

/**
 * It takes an object, converts it to snake case, sends it to the API, and then converts the response
 * to camel case
 * @param args - The arguments that will be passed to the API.
 * @param api - The name of the API.
 * @param extraOptions - This is an object that can contain the following keys:
 * @returns The result of the baseQuery function.
 */
const baseQueryWithTransformations = async (args, api, extraOptions) => {
	if (args.body) args.body = decamelizeKeys(args.body)

	let result = await baseQuery(args, api, extraOptions)

	if (result?.data) result.data = camelizeKeys(result.data)
	if (result?.error) result.error = camelizeKeys(result.error)

	return result
}

export const portalApi = createApi({
	reducerPath: 'portalApi',
	baseQuery: baseQueryWithTransformations,
	refetchOnFocus: true,
	refetchOnReconnect: true,
	tagTypes: ['User', 'Process', 'Role', 'Admin'],
	endpoints: builder => ({}),
})
