import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { XMarkIcon } from '@heroicons/react/24/outline'
function ManageRoles({ roles, isDeleting }) {
	const { id, name } = roles

	const [isHovering, setIsHovering] = useState(false)
	/**
	 * When the mouse is over the element, set the state of isHovering to true.
	 */
	const handleMouseOver = () => {
		setIsHovering(true)
	}

	/**
	 * When the mouse leaves the element, set the state of isHovering to false.
	 */
	const handleMouseOut = () => {
		setIsHovering(false)
	}

	return (
		<div
			className='flex justify-center bg-p-white py-1 px-8 rounded-xl'
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
		>
			{name}
			{isHovering && (
				<div
					className='hover:bg-p-silver p-1 cursor-pointer rounded-full ml-2'
					onClick={() => isDeleting(id)}
				>
					<XMarkIcon
						className='block h-4 w-4 '
						aria-hidden='true'
					/>
				</div>
			)}
		</div>
	)
}
ManageRoles.propTypes = {
	roles: PropTypes.object,
	isDeleting: PropTypes.func,
}

export default ManageRoles
