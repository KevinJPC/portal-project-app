import { format } from 'date-fns'

function useParseTo() {
	/**
	 *  Returns the `data` argument converted to a string.
	 * 	@returns The data is being returned as a string.
	 */
	const parseToString = data => {
		return data.toString()
	}

	/**
	 * 	Returns the `data` argument converted to a number.
	 * 	@returns The data is being returned as a number.
	 */
	const parseToInteger = data => {
		return Number(data)
	}

	/**
	 * 	Returns the `data` argument converted to a boolean.
	 * 	@returns The data is being returned as a boolean.
	 */
	const parseToBoolean = data => {
		return Boolean(data)
	}

	/**
	 * 	Returns the `data` argument converted to a float.
	 * 	@returns The data is being returned as a float.
	 */
	const parseToFloat = data => {
		return parseFloat(data)
	}

	/**
	 * 	It takes a date in the format of a string and returns a date with an established format.
	 * 	@returns A function that takes a date and returns a formatted date.
	 */
	const parseToDate = data => {
		return format(new Date(data), 'dd/MM/yyyy')
	}

	return {
		parseToString,
		parseToInteger,
		parseToBoolean,
		parseToFloat,
		parseToDate,
	}
}

export default useParseTo
