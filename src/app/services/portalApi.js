import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const portalApi = createApi({
	reducerPath: 'portalApi',
	refetchOnFocus: true,
	refetchOnReconnect: true,
	baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/v1/' }),
	tagTypes: ['User', 'Process', 'Role', 'Admin'],
	endpoints: builder => ({}),
})
