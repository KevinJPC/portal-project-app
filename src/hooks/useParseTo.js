import { format } from 'date-fns'

function useParseTo() {
	const parseToString = data => {
		return data.toString()
	}

	const parseToInteger = data => {
		return Number(data)
	}

	const parseToBoolean = data => {
		return Boolean(data)
	}

	const parseToFloat = data => {
		return parseToFloat(data)
	}

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
