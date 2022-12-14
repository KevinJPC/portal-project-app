import { toast } from 'react-toastify'

function useAlert() {
	const successAlert = data => {
		if (data?.message) toast.success(data.message)
	}

	const errorAlert = err => {
		// if (err?.status !== 422 && err?.data?.message)
		toast.error(err.data.message)
	}

	return { successAlert, errorAlert }
}

export default useAlert
