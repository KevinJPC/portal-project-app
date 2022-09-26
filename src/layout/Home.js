import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const Home = () => {
	return (
		<div className='flex flex-col h-screen '>
			<header className='md:h-18 h-16 text-white'>
				<Navbar />
			</header>
			<main className='flex-1'>
				<Outlet />
			</main>
		</div>
	)
}

export default Home
