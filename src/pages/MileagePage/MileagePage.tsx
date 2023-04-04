import banner from '@/assets/MileagePage/banner.jpg'
import Banner from '@/components/Banner/Banner'
import WrapperLayout from '@/layouts/WrapperLayout/WrapperLayout'
import cl from './MileagePage.module.scss'

const MileagePage = () => {
	return (
		<main className='main'>
			<Banner img={banner}>
				<>
					<p>Вы в поисках надёжного</p>
					<p>автомобиля с пробегом?</p>
				</>
			</Banner>

			<WrapperLayout>
				<section className={cl.wrapper}>
					<ul className={cl.list}>
						<li>
							<div className={cl.titles}>
								<h1>СЕРТИФИЦИРОВАННЫЕ АВТОМОБИЛИ</h1>
								<h2>Только для вас</h2>
							</div>

							<p>
								Сертифицированные автомобили, отобранные официальными диллерами
							</p>
						</li>

						<li>
							<div className={cl.titles}>
								<h1>БЕЗОПАСНОСТЬ И УВЕРЕННОСТЬ В ПОКУПКЕ</h1>
							</div>

							<p>
								Безопасность и уверенность при покупке автомобиля с пробегом,
								прозрачность истории
							</p>
						</li>

						<li>
							<div className={cl.titles}>
								<h1>АВТОМОБИЛИ ВОЗРАСТОМ ДО 5-ТИ ЛЕТ</h1>
							</div>

							<p>
								К программе допускаются автомобили возрастом до 5-ти лет и
								пробегом до 100 000 км
							</p>
						</li>
					</ul>
				</section>
			</WrapperLayout>
		</main>
	)
}

export default MileagePage
