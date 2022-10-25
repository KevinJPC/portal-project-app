import { Route } from 'react-router-dom'
import ListUserProcesses from '../pages/userHasProcess/ListUserProcesses'
import ProcessInformation from '../pages/userHasProcess/ProcessInfomation'

export const userProcessesRoutes = (
	<>
		<Route
			path='mis-procesos'
			element={<ListUserProcesses />}
		/>
		<Route
			path='mis-procesos/:id'
			element={<ProcessInformation />}
		/>
	</>
)
