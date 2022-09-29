import React from 'react'
import { Route } from 'react-router-dom'
import NotFound from '../pages/NotFound'

export const notFoundRoute = (
	<Route
		path='*'
		element={<NotFound />}
	/>
)
