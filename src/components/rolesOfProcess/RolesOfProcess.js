import React from 'react'
import PropTypes from 'prop-types'
import ManageRoles from './ManageRoles'
function RolesOfProcess({ roles = [], isDeleting }) {
	return (
		<div className='grid grid-cols-2 md:grid-cols-3 gap-6 p-4'>
			{roles?.map(role => (
				<ManageRoles
					key={role.id}
					roles={role}
					isDeleting={isDeleting}
				/>
			))}
		</div>
	)
}

RolesOfProcess.propTypes = {
	roles: PropTypes.array,
	isDeleting: PropTypes.func,
}

export default RolesOfProcess
