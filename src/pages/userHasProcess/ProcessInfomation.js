import React from 'react'
import { useParams } from 'react-router-dom'

function ProcessInformation() {
	const { id } = useParams()

	return (
		<>
			<p>Hola</p>
		</>
	)
}

ProcessInformation.propTypes = {}

export default ProcessInformation
