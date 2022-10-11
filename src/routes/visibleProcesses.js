import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const visibleProcessesRoutes = (
	<Route
		path='/procesos'
		element={
			<>
				<div className='flex flex-col'>
					<h1>Visible processes</h1>
					<Link to='/usuario/editar-perfil'>Perfil</Link>
					<Link to='/usuario/aefaefa'>404</Link>
				</div>
			</>
		}
	/>
)
