import { portalApi } from './portalApi'

export const processApi = portalApi.injectEndpoints({
	endpoints: builder => ({
		getActivesProcess: builder.query({
			query: () => 'processes/actives',
			providesTags: (result, error, arg) => [
				{ type: 'Process', id: 'LIST' },
				...result.ids.map(id => ({ type: 'Process', id })),
			],
		}),
		getInactivesProcess: builder.query({
			query: () => 'processes/inactives',
			providesTags: (result, error, arg) => [
				{ type: 'Process', id: 'LIST' },
				...result.ids.map(id => ({ type: 'Process', id })),
			],
		}),
	}),
})

export const { useGetActivesProcessQuery, useGetInactivesProcessQuery } =
	processApi
