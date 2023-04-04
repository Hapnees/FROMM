import banner from '@/assets/MarkPage/banner.jpg'
import Banner from '@/components/Banner/Banner'
import Button from '@/components/UI/Button/Button'
import WrapperLayout from '@/layouts/WrapperLayout/WrapperLayout'
import cl from './MarkPage.module.scss'

const MarkPage = () => {
	return (
		<main className='main'>
			<Banner img={banner}>
				<>
					<p>Не можете определиться</p>
					<p>с маркой?</p>
				</>
			</Banner>

			<WrapperLayout>
				<section className={cl.wrapper}>
					<ul className={cl.list}>
						<li>
							<h1>LADA</h1>
							<p>
								Полный каталог, технические <br /> характеристики и отзывы
							</p>
							<Button className={cl.button}>ПОСМОТРЕТЬ</Button>
						</li>
						<li>
							<h1>MAZDA</h1>
							<p>
								Полный каталог, технические <br />
								характеристики и отзывы
							</p>
							<Button className={cl.button}>ПОСМОТРЕТЬ</Button>
						</li>
						<li>
							<h1>УАЗ</h1>
							<p>
								Полный каталог, технические <br />
								характеристики и отзывы
							</p>
							<Button className={cl.button}>ПОСМОТРЕТЬ</Button>
						</li>
					</ul>
				</section>
			</WrapperLayout>
		</main>
	)
}

export default MarkPage
