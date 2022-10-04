import { configureStore } from '@reduxjs/toolkit'
import { portalApi } from './services/portalApi'

export const store = configureStore({
	reducer: {
		[portalApi.reducerPath]: portalApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(portalApi.middleware),
	devTools: true,
})
