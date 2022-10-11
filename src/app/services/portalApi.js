import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const portalApi = createApi({
	reducerPath: 'portalApi',
	refetchOnFocus: true,
	refetchOnReconnect: true,
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://127.0.0.1:8000/api/v1/',
		prepareHeaders: (headers, { getState }) => {
			const token =
				'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5Nzc4N2E3MC01ZTUwLTQxMjctOWI5Zi1iODdlMTg0NzYyZjciLCJqdGkiOiIzYjRhYzY0MWRiY2U5ZDY4ODgzOGU5ZmZjMTI5MjNkYzI4YTFiMGFjMGJiOWQ1OTY5MWMwZjQ4MzA2NTBhMjA2NGU4MzM5MzhkY2EzN2I1NCIsImlhdCI6MTY2NTQ5OTM1OS4wOTEzNDMsIm5iZiI6MTY2NTQ5OTM1OS4wOTEzNDUsImV4cCI6MTY2NTU4NTc1OC45NDE0NTEsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.vIOzKpumzWPM3SdMiWYfW3MVHU4PgtoPmTFyQXCM6PKc7uj4zTlNiOQltpxcFcQ1SIhoxJWojH_GcL6E2Kdq4s_vmhcYP-MmYk3DfRiEgjy2ixeXMGbl7VCXuopn5jsYyIHDpN9TwbbeKd7INN-iULl-Z-jYpcxFQ_DACbTGPZfL0wW0W1ZJzi3NS5tRq_iP7XRjekrdXRe_gxsb5RmEkFmWR-Z0gG6YLojgQ4cdxK9MCbFOBjwmrBfAMXCsTaYzmaHq2zfrX6bQV_a98M3FTCP1TD0DJSsi6v6s9GNQ13KXQ2yQjbLY4JkCBZ_PCIT8dLxPAC3ynd9v-GxQZxoA6SsY684NaX2zgCdHj2VAWOiFtnabVp8m6nE8-cCkF82ndPMvav_hmMV9rekDamVbMuC7GoRVS-kS5c-qGLjQcquvYZeNAx2dNMqeu2Ipav5HYM0c3LPrcDa-gngMAVv747yWn-ZFuyfSCl0TxZI0v1186Q5rHV8DM7nGOQnbQ18VnK1_0oYVo9cR5Xc_hF1d6Tr7Ly_ZFez4YCherrllYZlwskuhlKjtU8ud2_JkAQqXW0VAVtZpRWIjNHV39IF3DxbKUYX0n4D0Kjhv3oOwCVLAubsD2fAsjuPVQdqNKsWemn4ByH0U-sDBEZXflTv_SYOrmpB2jkfTrICL4vhwtGQ'
			headers.set('authorization', `Bearer ${token}`)
			headers.set('Accept', 'application/json')
			headers.set('Content-Type', 'application/json')
			return headers
		},
	}),

	tagTypes: ['User', 'Process', 'Role', 'Admin'],
	endpoints: builder => ({}),
})
