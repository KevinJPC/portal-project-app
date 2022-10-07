import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { XMarkIcon } from '@heroicons/react/24/outline'

function Alert({ type, message }) {
	const [open, setOpen] = useState(true)

	return (
		<>
			{open ? (
				<div
					className={`${type === 'error' && 'bg-p-red'} '
					${type === 'success' && 'bg-p-green'}
					 w-full py-2 px-4 text-p-white rounded-md flex flex-row justify-between`}
				>
					<p className='text-center w-full'>{message}</p>
					<button onClick={() => setOpen(false)}>
						<XMarkIcon className='w-6 ' />
					</button>
				</div>
			) : null}
		</>
	)
}

Alert.propTypes = {
	type: PropTypes.oneOf(['success', 'error']).isRequired,
	message: PropTypes.string.isRequired,
}

export default Alert
