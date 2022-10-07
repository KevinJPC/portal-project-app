import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const portalApi = createApi({
	reducerPath: 'portalApi',
	refetchOnFocus: true,
	refetchOnReconnect: true,
	baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/v1/' }),
	prepareHeaders: (headers, { getState }) => {
		const token =
			'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NzRmY2MyYy01YzBlLTQ1MTEtOGZkMC00MGE5M2I4ODZhMWUiLCJqdGkiOiI0ZTcwZjNiOTk4OGU5ZWJhOWJhNmZjNTM2ZGUzNjc3YzlhZTU4M2JjZDI2ZDZiNzNlYWI1MzgyMWY3MmVmMjIzODgxZjk2NGEwNGRjZWZkMSIsImlhdCI6MTY2NTA4NTMxMC44NDc5MiwibmJmIjoxNjY1MDg1MzEwLjg0NzkyMiwiZXhwIjoxNjY1MTcxNzEwLjc3Mjg1NCwic3ViIjoiMiIsInNjb3BlcyI6W119.c5kEjKJXaZ6uCFETRGU5byggWP0N4ot37qxW_eq4rxJGpOIMcBfCXi2m6k59buA6j91VwaNQpmYT1ipmKktcA3uMhq1ON7_q2LgTUczB9flFj7KBFHTpT5gmJUQee6GD4uzIG10l3wPweP3rk3ZEmVL_RAJbMT-GAXTeDqv3riYunuzZl6H0pBztaEp0x9oR9vCtnO1_tK9K5tF9-QUquxFpP7rM0u-QxmZTityNaw2yEvmm8_YGeeJIDZydcBACMuZSgkOJvvre8sO7tmtDO4nbSmqLWdCCPeRuwud2afVzgT6bffQeqTViGRhdfKD13G6behJj0KbaD94864pwh7Zk-0gdqJUQDf1ze8MZqOawM5FOzkNVcC7XYCXxZcESBIXxKEGjl9fK61aXPissUKIXecSXSX4AnlVS2COUw01lpW99eGrVS5Eq71rUi4mDAUAB_YsBm2yrIRNfIfxYWqFtsupXvpTJcofGIUeLwYgSaa8FyyFrx0G1lKlflVPH7CvQwAmXZpBwGrgAMc8TlK20jMEoHOLVUUfvZA_W1kJ9mhqBectUhN8WePlkeGzOOoANQVZvn4aGOXGcjmDr7oqxi9Jt0x_izkpvjM8akQvcfqx1kxFw3GMYUn6l3s8xm8e2Umu_1A5j_y3jPFJZI8Ls9uCVt1uKKSIjimJ0KFA'
		headers.set('authorization', `Bearer ${token}`)
		headers.set('Accept', 'application/json')
		headers.set('Content-Type', 'application/json')
		return headers
	},
	tagTypes: ['User', 'Process', 'Role', 'Admin', 'Insider'],
	endpoints: builder => ({}),
})
