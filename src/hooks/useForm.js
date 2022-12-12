import { useState } from 'react'
import PropTypes from 'prop-types'

function useForm(initialState = {}) {
	const [formState, setFormState] = useState(initialState)
	const [showModal, setShowModal] = useState(false)

	/**
	 * The form state is set to the initial state.
	 */
	const onResetForm = () => {
		setFormState(initialState)
	}

	/**
	 * 	Set & change the formState with data that is sent.
	 *  @param updatedStatate - The new state that is being set
	 */
	const changeFormState = updatedStatate => {
		setFormState({ ...formState, ...updatedStatate })
	}

	/**
	 * 	When the input value changes, update the form state specific target with the new value.
	 *  @param e - Event object and unstruture the object to get the target
	 */
	const onInputChange = ({ target: { name, value } }) => {
		setFormState({ ...formState, [name]: value })
	}

	/**
	 * 	Open de modal window
	 */
	const openModal = () => {
		setShowModal(!showModal)
	}

	/**
	 * 	Close de modal window
	 */
	const closeModal = () => {
		setShowModal(!showModal)
	}

	return {
		...formState,
		formState,
		onInputChange,
		setFormState,
		onResetForm,
		changeFormState,
		showModal,
		closeModal,
		openModal,
	}
}

useForm.propTypes = {
	initialState: PropTypes.object,
}

export default useForm
