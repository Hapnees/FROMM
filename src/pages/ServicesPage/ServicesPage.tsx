import banner from '@/assets/ServicesPage/banner.jpg'
import Banner from '@/components/Banner/Banner'
import FormButton from '@/components/UI/FormButton/FormButton'
import Input from '@/components/UI/Input/Input'
import WrapperLayout from '@/layouts/WrapperLayout/WrapperLayout'
import { IoCheckmarkCircleOutline } from 'react-icons/io5'
import cl from './ServicesPage.module.scss'

const ServicesPage = () => {
	return (
		<main className='main'>
			<Banner img={banner}>
				<>
					<p>Оценим ваше авто</p>
					<p>в течение 10 минут</p>
				</>
			</Banner>

			<WrapperLayout>
				<section className={cl.wrapper}>
					<ul className={cl.list}>
						<li>
							<IoCheckmarkCircleOutline />
							<p>Простые и ясные условия</p>
						</li>
						<li>
							<IoCheckmarkCircleOutline />
							<p>Лучшая цена после оценки</p>
						</li>
						<li>
							<IoCheckmarkCircleOutline />
							<p>Кратчайшие сроки оценки</p>
						</li>
						<li>
							<IoCheckmarkCircleOutline />
							<p>Юридическое оформление сделки</p>
						</li>
					</ul>

					<form>
						<div className={cl.inputs}>
							<Input placeholder='Ваше имя' />
							<Input type='number' placeholder='Номер телефона' />
						</div>

						<FormButton>Оставить заявку</FormButton>
					</form>
				</section>
			</WrapperLayout>
		</main>
	)
}

export default ServicesPage
