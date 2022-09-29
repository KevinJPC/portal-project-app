import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './layout/Layout'
import MainRoutes from './routes/Main'

function App() {
	return (
		<Router>
			<Layout>
				<MainRoutes />
			</Layout>
		</Router>
	)
}

export default App
