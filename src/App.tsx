import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout/MainLayout'
import ContactPage from './pages/ContactPage/ContactPage'
import HomePage from './pages/HomePage/HomePage'
import MarkPage from './pages/MarkPage/MarkPage'
import MileagePage from './pages/MileagePage/MileagePage'
import ServicesPage from './pages/ServicesPage/ServicesPage'

const App = () => {
	return (
		<Routes>
			<Route path='' element={<MainLayout />}>
				<Route path='/' element={<HomePage />} />
				<Route path='/services' element={<ServicesPage />} />
				<Route path='/contacts' element={<ContactPage />} />
				<Route path='/mark' element={<MarkPage />} />
				<Route path='/mileage' element={<MileagePage />} />
			</Route>
		</Routes>
	)
}

export default App
