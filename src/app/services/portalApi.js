import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { camelizeKeys, decamelizeKeys } from 'humps'
import { removeCredentials } from '../../features/authSlice'
import { toast } from 'react-toastify'

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
 * It takes an object, transforms it to snake case, sends it to the server, transforms the response to
 * camel case and returns it. Also disconnects the authenticaded user if the access token is invalid
 * @param args - The arguments that will be passed to the API.
 * @param api - the API object that is created in the file where the query is called.
 * @param extraOptions - {
 * @returns The result of the baseQuery function.
 */
const baseQueryWithTransformations = async (args, api, extraOptions) => {
	if (args.body) args.body = decamelizeKeys(args.body)

	let result = await baseQuery(args, api, extraOptions)

	if (result?.data) result.data = camelizeKeys(result.data)
	if (result?.error) result.error = camelizeKeys(result.error)

	if (api.getState().auth.isAuthenticated && result?.error?.status === 401) {
		api.dispatch(removeCredentials())
		toast.error('La sesión ha caducado. Vuelve a iniciar sesion.')
	}

	return result
}

export const portalApi = createApi({
	reducerPath: 'portalApi',
	baseQuery: baseQueryWithTransformations,
	refetchOnFocus: true,
	refetchOnReconnect: true,
	tagTypes: ['User', 'Process', 'Role', 'Admin', 'Insider', 'Notification'],
	endpoints: builder => ({}),
})
