import { Route } from 'react-router-dom'

export const userProcessesRoutes = (
	<>
		<Route
			path='mis-procesos'
			element={<h1>My processes</h1>}
		/>
		<Route
			path='mis-procesos/:id'
			element={<h1>My processes 1</h1>}
		/>
	</>
)
