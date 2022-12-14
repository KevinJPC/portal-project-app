import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGetUserProcessByIdQuery } from '../../app/services/userHasProcessApi'
import Activity from '../../components/Activity'
import Spinner from '../../components/Spinner'
import useParseTo from '../../hooks/useParseTo'
import useForm from '../../hooks/useForm'
function ProcessInformation() {
	const { id } = useParams()
	const { parseToDate } = useParseTo()

	const {
		data: process,
		isSuccess: isSucessGetProcess,
		isLoading: isLoadingGetSeSuiteProcess,
	} = useGetUserProcessByIdQuery(Number(id))

	const {
		name,
		createdAt,
		status,
		percentageAdvance,
		activities,
		changeFormState,
	} = useForm({
		name: '',
		createdAt: '',
		status: '',
		percentageAdvance: '',
		activities: [],
	})

	useEffect(() => {
		if (isSucessGetProcess) {
			changeFormState({
				name: process?.data.process.name,
				createdAt: parseToDate(process?.data.process.startedAt),
				percentageAdvance: process?.data.process.percentageAdvance,
				activities: process?.data.process.activities,
			})
		}
	}, [isSucessGetProcess])

	return (
		<div className='min-h-full grow flex flex-col'>
			{isLoadingGetSeSuiteProcess ? (
				<Spinner />
			) : (
				<div className='min-h-full flex flex-col grow items-center md:-mt-16 justify-center py-4 mx-4'>
					<div className='w-full md:w-11/12 lg:w-4/5 max-w-6xl bg-p-gray rounded px-2 md:px-14 py-10'>
						<div className='flex flex-col md:flex-row justify-between text-center'>
							<div className='md:text-left flex flex-col w-full md:w-2/5'>
								<div className='p-6 px-1 text-p-blue '>
									<p className='text-xl font-fira-medium '>Nombre</p>
									<p className=' mt-2 '>{name}</p>
								</div>
								<div className='p-6 px-1 text-p-blue'>
									<p className='text-xl font-fira-medium '>Fecha de inicio</p>
									<p className=' mt-2 '>{createdAt}</p>
								</div>
								<div className='p-6 px-9 md:p-0 md:px-0 text-p-blue'>
									<p className='text-xl font-fira-medium'>Estado</p>
									<div className='mt-2 flex justify-center md:justify-start'>
										<p className='w-fit px-2 bg-p-purple rounded-full text-p-white'>
											En progreso
										</p>
									</div>
								</div>
								<div className='p-6 px-1 text-p-blue'>
									<p className='text-xl font-fira-medium '>Avance porcentual</p>
									<p className=' pt-1 '>{percentageAdvance * 100}%</p>
								</div>
							</div>
							<div className='flex flex-col items-center'>
								<div className='py-6 justify-items-center px-1 text-p-blue'>
									<p className='text-xl font-fira-medium text-center'>
										Actividades
									</p>
								</div>
								<div>
									{activities.map((activity, i) => (
										<Activity
											key={i}
											activity={activity}
											activities={activities}
										/>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

ProcessInformation.propTypes = {}

export default ProcessInformation
