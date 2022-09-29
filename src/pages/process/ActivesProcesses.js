import React from 'react'
import { useSearchParams } from 'react-router-dom'

const ActivesProcesses = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	let state = 'actives'
	switch (searchParams.get('state')) {
		case 'actives':
			state = 'actives'
			break
		case 'inactives':
			state = 'inactives'
			break
		default:
			state = 'actives'
			break
	}

	console.log(state)

	return <div>{state} processes</div>
}

export default ActivesProcesses
