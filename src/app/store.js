import { configureStore } from '@reduxjs/toolkit'
import { portalApi } from './services/portalApi'
import authReducer from '../features/authSlice'

export const store = configureStore({
	reducer: {
		[portalApi.reducerPath]: portalApi.reducer,
		auth: authReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(portalApi.middleware),
	devTools: true,
})
