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
	args.body = decamelizeKeys(args.body)

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
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://127.0.0.1:8000/api/v1/',
		prepareHeaders: (headers, { getState }) => {
			const token =
				'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NzdhMTQ0ZS03YzE3LTRkYTYtYWJmYy01NjgxN2U3YjkzODMiLCJqdGkiOiIxMmEzMWI5OGMyYmM4ODlhNTA3ZjRlMTJmNTczOTliMTMzYjEyZTE5Njg1NTk5MWMwNjBlNmJhZDU5MTI3ZmY5N2I1OTEyZGRiNGJkZTBiYSIsImlhdCI6MTY2NTUwNTk0Mi4yMDQ3MTYsIm5iZiI6MTY2NTUwNTk0Mi4yMDQ3MTksImV4cCI6MTY2NTU5MjM0Mi4xOTE2MzcsInN1YiI6IjIiLCJzY29wZXMiOltdfQ.BN2mn3lYJRn3bbcqkvzH9qSeGV1lEE7t3lrKBQOBM9NnrnY58IIIUW0lGvy0zekFsMUM1dOfz2_zlaSs5WQvDanO0GhMPlL769IYUy3rtWTN7VDz5bfAfeM7uJxxf3mBbmGiaasopbLdBMbXZGE_k90381PCeSYQs0lj1K4a2w79Iko2qTu58v42-VNw2JeRUEz3na73KBwvKVbCGL-0csuZT-vU06FNIpFcIZg00eaM7Fk4dQw5MGsXhZg98T_WOR7-ymP4EFwxbLAtlKW3SDK2954krXQMEA5zLfT3AqVH0Dmgn2vhUeMPgY2IBVPGXGvAUbqsDugFEvf8ur9r4ZRws9RHvRxsWCrK-1cYTIEdq6PuDsqhaAjcayupNLwdyeHa371uKhvAFEC_ILdlNi03iM2CJmFDsy7hrNzTaPSUXddXB1xccK86uSEbezzDxXdnm43oRI6y_pBV6f7zgnw8ZmT3X3P_8zLuiHvgGIuYdgtXDZKDRUAcKOUhoWz0X2jvdI-n2xGD49lHo0EjwnVxoQA5ZfrwmgfEdHVw8qblccI8QxiZC1FNN-p6Q2AVzFtQPXq_c8aI7qpvApK8hZiTBj3RMBFE7Xdw4Veupt1X9KWDQ4iWiQZ25KaXxFif2ck8ATW7EIPMyjGBhDjq0azKVNrCiaXIMk-dcWMUPP4'
			headers.set('authorization', `Bearer ${token}`)
			headers.set('Accept', 'application/json')
			headers.set('Content-Type', 'application/json')
			return headers
		},
	}),

	tagTypes: ['User', 'Process', 'Role', 'Admin'],
	endpoints: builder => ({}),
})
