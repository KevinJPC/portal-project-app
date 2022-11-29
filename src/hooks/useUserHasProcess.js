import { toast } from 'react-toastify'
import {
	useLazyGetUserProcessesQuery,
	useStartNewProcessMutation,
} from '../app/services/userHasProcessApi'

function useUserHasProcess() {
	const [
		getUserProcesses,
		{
			data: userProcesses,
			isSuccess: isSuccessGetUserProcesses,
			isLoading: isLoadingGetUserProcess,
		},
	] = useLazyGetUserProcessesQuery()
	const [startProcess, { isLoading: isLoadingStartNewProcess }] =
		useStartNewProcessMutation()

	const startNewProcess = idProcess => {
		startProcess(idProcess)
			.unwrap()
			.then(payload => payload.success && toast.success(payload.message))
	}

	const getUserProcessesData = (pageNum = 1) => {
		getUserProcesses(pageNum)
	}

	return {
		getUserProcessesData,
		userProcesses,
		isSuccessGetUserProcesses,
		isLoadingGetUserProcess,
		startNewProcess,
		isLoadingStartNewProcess,
	}
}

export default useUserHasProcess
