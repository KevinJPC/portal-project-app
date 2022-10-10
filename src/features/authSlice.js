import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isTokenValidated: false,
	isAuthenticated: false,
	user: {
		id: null,
		name: null,
		firstLastName: null,
		secondLastName: null,
		role: null,
	},
	token: sessionStorage.getItem('token') || null,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState: initialState,
	reducers: {
		setCredentials: (state, action) => {
			state.user = action.payload.user
			state.token = action.payload.token
			state.isAuthenticated = true
			state.isTokenValidated = true
			sessionStorage.setItem('token', state.token)
		},
		removeCredentials: state => {
			state.user = null
			state.token = null
			state.isAuthenticated = false
			state.isTokenValidated = false
			sessionStorage.removeItem('token')
		},
		setIsTokenValidated: (state, action) => {
			state.isTokenValidated = action.payload
		},
	},
})

export const { setCredentials, removeCredentials, setIsTokenValidated } =
	authSlice.actions

export const selectToken = state => state.auth.token
export const selectFullName = state =>
	[
		state.auth.user.name,
		state.auth.user.firstLastName,
		state.auth.user.secondLastName,
	].join(' ')
export const selectRole = state => state.auth.user.role
export const selectUser = state => state.auth.user
export const selectRoleForRoutes = state =>
	state.auth.user.role === 'admin' ? 'admin' : 'general'
export const selectIsTokenValidated = state => state.auth.isTokenValidated
export const selectIsAuthenticated = state => state.auth.isAuthenticated

export default authSlice.reducer
