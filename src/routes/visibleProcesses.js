import { Route } from 'react-router-dom'
import ListVisiblesProcesses from '../pages/userHasProcess/ListVisiblesProcesses'

export const visibleProcessesRoutes = (
	<Route
		path='/procesos'
		element={<ListVisiblesProcesses />}
	/>
)
