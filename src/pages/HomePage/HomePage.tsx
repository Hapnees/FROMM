import banner from '@/assets/HomePage/banner.jpg'
import Banner from '@/components/Banner/Banner'
import HomePageContent from '@/components/HomePageContent/HomePageContent'
import WrapperLayout from '@/layouts/WrapperLayout/WrapperLayout'

const HomePage = () => {
	return (
		<main className='main'>
			<Banner img={banner}>
				<>
					<p>Новая модель Ford Ranger</p>
					<p>особенности и недостатки</p>
				</>
			</Banner>

			<WrapperLayout>
				<HomePageContent />
			</WrapperLayout>
		</main>
	)
}

export default HomePage
