import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Error from './components/Error'
import Layout from './layout/Layout'
import MainRoutes from './routes/Main'

function App() {
	return (
		<Error>
			<Router>
				<Layout>
					<MainRoutes />
				</Layout>
			</Router>
		</Error>
	)
}

export default App
