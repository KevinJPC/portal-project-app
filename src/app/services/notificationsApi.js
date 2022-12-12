import { portalApi } from './portalApi'
import { providesList } from './tagProvider'

export const notificationApi = portalApi.injectEndpoints({
	endpoints: builder => ({
		getNotifications: builder.query({
			query: () => `notifications`,
			providesTags: result =>
				providesList(result.data.notification, 'Notifications'),
		}),
	}),
})

export const { useGetNotificationsQuery, useLazyGetNotificationsQuery } =
	notificationApi
