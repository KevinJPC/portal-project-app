import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const portalApi = createApi({
	reducerPath: 'portalApi',
	refetchOnFocus: true,
	refetchOnReconnect: true,
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://127.0.0.1:8000/api/v1/',
		prepareHeaders: (headers, { getState }) => {
			const token =
				'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NzU0M2MzNi1kMDVmLTQ3N2YtODVmZi0yM2RlMGI2OGYxMTciLCJqdGkiOiI2MDJlMDhiMTIxNGU2NTY5YmQwNjUyMWQ5N2JiZjY1ODFjYmI1ZjI3ZDgzNGNmZGRkNjkxY2Y5ZDQ3MjYwYzIyY2QwMmRhNjA4NWI0OTFmYyIsImlhdCI6MTY2NTE3NDg2OS40NDUwMzUsIm5iZiI6MTY2NTE3NDg2OS40NDUwMzcsImV4cCI6MTY2NTI2MTI2OS40MzExNzcsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.u-eT-oxpgJdaG9YsnaY7c6IGwu3wln50ssA9tMUpYDcr01gaWG4pnr1f7gDVFc6RgsW-8rRTAhvfCQ7n0p9ic4uGexBo3Q7K7njP7_xYwTR_vjRbFLu_5xAbCItq50nWQ8lc3IyvGUMTeNBuJfL3_fkhlxySeAKXkCXZ_jeFqq0bhaSC5kf9IyP248WTxFAGnGvWrlAF9Ss8F_v9d-LwI5a9frB5eigWe4eJABe04w_dborl_A9PKNvfhnX2gstHQWLX76JnysTEvE1SREXC8U_aWnmvPLO0az0dHJM02MHZZA2NPLhat-8AYMDFEz5o9PAJK4Qwv1-CVX_D1u__If25JxBwE08wJiL1fF3b8g_XeIceC40HkOXRqTX-VEjcmgW3OL7krYz9pjJV2r0S6MpqlknYyBZOjit_TK7ts0xM6HBMDKK4Q0D61-J-0r915da2EDOJP5wnenxdddDb6DU2maREBycJnz3pyCirtFILpkKODKUO82VTOEuXambJ-zY5TwLdlYtd38Wuq74U36l1H89NBOYSHrQnByivJ8fgED_HQaCyHp5FSY0VFY8oiR7qSP096ZghQ53iQBa7PTwmZ9vQtYjW2SAYg2kujGKPuP7BeehHk6zGX10KaQ98R41wuvI6OTWGZvnaIB9GGd-N28sxplx-C6c-8gNclvw'
			headers.set('authorization', `Bearer ${token}`)
			headers.set('Accept', 'application/json')
			headers.set('Content-Type', 'application/json')
			return headers
		},
	}),
	tagTypes: ['User', 'Process', 'Role', 'Admin', 'Insider'],
	endpoints: builder => ({}),
})
