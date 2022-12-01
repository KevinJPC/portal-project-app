import { portalApi } from './portalApi'

export const authApi = portalApi.injectEndpoints({
	endpoints: builder => ({
		login: builder.mutation({
			query: credentials => ({
				url: '/auth/login',
				method: 'POST',
				body: credentials,
			}),
		}),
		reconnect: builder.mutation({
			query: () => ({
				url: '/auth/reconnect',
				method: 'POST',
			}),
		}),
		forgotPassword: builder.mutation({
			query: ({ email }) => ({
				url: '/password/forgot',
				method: 'POST',
				body: { email },
			}),
		}),
		validateResetToken: builder.mutation({
			query: ({ email, token }) => ({
				url: '/password/validate',
				method: 'POST',
				body: { email, token },
			}),
		}),
		ResetPassword: builder.mutation({
			query: ({ email, token, password, passwordConfirmation }) => ({
				url: '/password/reset',
				method: 'POST',
				body: { email, token, password, passwordConfirmation },
			}),
		}),
	}),
})

export const {
	useLoginMutation,
	useReconnectMutation,
	useForgotPasswordMutation,
	useValidateResetTokenMutation,
	useResetPasswordMutation,
} = authApi
