import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { format } from 'date-fns'
import Activity from '../../components/Activity'
import { useGetUserProcessByIdQuery } from '../../app/services/userHasProcessApi'
import Spinner from '../../components/Spinner'

function ProcessInformation() {
	const { id } = useParams()
	const {
		data: process,
		isSuccess: isSucessGetProcess,
		isLoading: isLoadingGetSeSuiteProcess,
	} = useGetUserProcessByIdQuery(Number(id))

	const [values, setValues] = useState({
		name: '',
		createdAt: '',
		status: '',
		percentageAdvance: '',
		activities: [],
	})

	useEffect(() => {
		if (isSucessGetProcess) {
			setValues({
				name: process?.data.process.name,
				createdAt: format(
					new Date(process?.data.process.startedAt),
					'dd/MM/yyyy'
				),
				percentageAdvance: process?.data.process.percentageAdvance,
				activities: process?.data.process.activities,
			})
		}
	}, [isSucessGetProcess])

	return (
		<div className=' pt-2 sm:pt-0 mt-5 md:mt-10'>
			<div className='flex justify-center py-4'>
				<div className='w-auto max-w-5xl bg-p-gray rounded px-6'>
					{isLoadingGetSeSuiteProcess ? (
						<div className='p-4 flex justify-center items-center'>
							<p className='text-p-blue font-fira-medium mr-2'>Cargando...</p>
							<Spinner />
						</div>
					) : (
						<div className='md:grid md:grid-cols-2 justify-items-start text-center mb-4'>
							<div className='md:text-left flex flex-col '>
								<div className='p-6 px-1 text-p-blue '>
									<p className='text-md font-fira-medium '>Nombre</p>
									<p className=' pt-2 text-sm'>{values.name}</p>
								</div>
								<div className='p-6 px-1 text-p-blue'>
									<p className='text-md font-fira-medium '>Fecha de inicio</p>
									<p className=' pt-2 text-sm'>{values.createdAt}</p>
								</div>
								<div className='p-6 px-9 md:p-0 md:px-0 text-p-blue'>
									<p className='text-md font-fira-medium'>Estado</p>
									<p className='flex justify-center text-md py-1 px-1 md:px-2 bg-p-purple rounded-full text-p-white'>
										En progreso
									</p>
								</div>
								<div className='p-6 px-1 text-p-blue'>
									<p className='text-sm font-fira-medium '>Avance porcentual</p>
									<p className=' pt-2 text-sm'>{values.percentageAdvance}%</p>
								</div>
							</div>
							<div className='flex flex-col items-center'>
								<div className='p-6 justify-items-center px-1 text-p-blue'>
									<p className='text-md font-fira-medium '>Actividades</p>
								</div>
								<div>
									{values.activities.map((activity, i) => (
										<Activity
											key={i}
											activity={activity}
											activities={values.activities}
										/>
									))}
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

ProcessInformation.propTypes = {}

export default ProcessInformation
