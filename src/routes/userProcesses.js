import { Route } from 'react-router-dom'
import ListUserProcesses from '../pages/userHasProcess/ListUserProcesses'

export const userProcessesRoutes = (
	<>
		<Route
			path='mis-procesos'
			element={<ListUserProcesses />}
		/>
		<Route
			path='mis-procesos/:id'
			element={<h1>My processes 1</h1>}
		/>
	</>
)
