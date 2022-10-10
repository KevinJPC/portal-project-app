import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const portalApi = createApi({
	reducerPath: 'portalApi',
	refetchOnFocus: true,
	refetchOnReconnect: true,
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://127.0.0.1:8000/api/v1/',
		prepareHeaders: (headers, { getState }) => {
			const token =
				'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NzRmY2MyYy01YzBlLTQ1MTEtOGZkMC00MGE5M2I4ODZhMWUiLCJqdGkiOiI5OTlkZDZmY2JhMzNiZjU1OTZkNDRkNTkzMDFmNDYzMzkxN2MzNmU5OTgwZGFlNDZiZjQzYTk3NmNjNzVmOWNmNjAxMzM3ZDE3YjAyZTAzYSIsImlhdCI6MTY2NTQxNjkxMi44NjAxMDEsIm5iZiI6MTY2NTQxNjkxMi44NjAxMDYsImV4cCI6MTY2NTUwMzMxMi43NjUyOTQsInN1YiI6IjIiLCJzY29wZXMiOltdfQ.K6JUyMdXmlXVWAjO-6qb4_7h4wlFZtV74kdoBIS8CH0o4gz4ZPt2QLDF8ivzrSujnSkaZHkEKN1DoRiMVL6jKsnN66bJG6X6PVYzXZgKtwnZ_JXvBFMMojwA46VNfnjNGPKaoocked7W0OHFFS5oCIYUBAgjdgz4cv8TSC35JaAWav1pwweN1z-lFQ6tVA8gA_CL0N0J2grCEcWCzGzxDGUf5pVQqc-03P95Mq8Tl1Wwveuw7Wwvr_z2a1X3s6N9HPktLTp1_oi8XN3saJmkUNfqzyRBph8q5cmbnKvZSCou_8JHzOsuiHobF3oon2uhiwkeBSg0DU6e0k0R5mJxAyMvvWuGvqZN81PspdRHqVT4Vt22BcQP7A3w1RH3FWNsXEUrjKjOvoiEJQ9Ztw2uuAh92lDCRy0Cc48sCIcP0zXXMvRtwiMbTWooIzKDyCg-BZzN2lS2MenfB_3HqMOlbV972p0FMunn1azrIPxRyzKLJVPpvU1xuSQQMt0QH5VgTiFUyuFSc4KdTcpvGx3rsWPjvGbf3_qFI-YXYZ5lYqEIzKbdd5XT6a7jVq6q59eCyHgC3hhWICsEzhin20RWwi5vCmJmLKQ7NuiKb8uKaXfBwdwhphduKkn-QeRqcV6Jze8Mp20ROvB1qki_yRb3fjZmTkX-e6zzAa8sxT120XA'
			headers.set('authorization', `Bearer ${token}`)
			headers.set('Accept', 'application/json')
			headers.set('Content-Type', 'application/json')
			return headers
		},
	}),
	tagTypes: ['User', 'Process', 'Role', 'Admin', 'Insider'],
	endpoints: builder => ({}),
})
