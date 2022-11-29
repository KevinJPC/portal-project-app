import { portalApi } from './portalApi'

export const userApi = portalApi.injectEndpoints({
	endpoints: builder => ({
		getUserById: builder.query({
			query: userId => `processes/${userId}`,
			providesTags: (result, error, arg) => [{ type: 'User', id: arg }],
		}),
		updateUserProfile: builder.mutation({
			query: user => ({
				url: `users`,
				method: 'PATCH',
				body: { ...user },
			}),
			invalidatesTags: (result, error, arg) => [{ type: 'User', id: arg.id }],
		}),
		updateUserPassword: builder.mutation({
			query: user => ({
				url: `users/update-password`,
				method: 'PATCH',
				body: { ...user },
			}),
			invalidatesTags: (result, error, arg) => [{ type: 'User', id: arg.id }],
		}),
	}),
})

export const {
	useGetUserByIdQuery,
	useUpdateUserProfileMutation,
	useUpdateUserPasswordMutation,
} = userApi
