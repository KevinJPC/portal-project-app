import React from 'react'
import PropTypes from 'prop-types'

class Error extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			hasError: false,
			message: '',
		}
	}

	static getDerivedStateFromError(error) {
		return { hasError: true, message: error.message }
	}

	componentDidCatch(error, errorInfo) {
		console.log(error)
	}

	render() {
		if (this.state.hasError)
			return (
				<div className='font-fira flex bg-p-white text-p-white justify-center items-center h-screen'>
					<div className='w-1/3 h-1/3 bg-p-gray p-10 rounded-xl flex flex-col shadow-2xl justify-center'>
						<h1 className='font-fira-medium text-p-blue text-xl text-center'>
							Algo salió mal
						</h1>
						{/* <p className='text-p-silver mt-3'>{this.state.message}</p> */}
						<button
							onClick={() => window.location.reload(false)}
							className='h-12 rounded-lg bg-p-purple shadow-purple mt-5'
						>
							Recargar la página
						</button>
					</div>
				</div>
			)

		return this.props.children
	}
}

Error.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Error
