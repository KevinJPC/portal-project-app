import React from 'react'
import PropTypes from 'prop-types'

function ListEmptyMessage({ text }) {
	return (
		<div className='flex flex-col pt-2 sm:pt-0 md:px-10 mt-4'>
			<div className='flex justify-center py-4'>
				<div className='w-3/4 bg-p-gray rounded-lg py-6 text-center'>
					<p className='text-ms font-fira-medium font-medium leading-5 text-p-blue'>
						{text}
					</p>
				</div>
			</div>
		</div>
	)
}

ListEmptyMessage.propTypes = {
	text: PropTypes.string,
}

export default ListEmptyMessage
