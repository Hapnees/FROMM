import banner from '@/assets/ContactPage/banner.jpg'
import Banner from '@/components/Banner/Banner'
import Button from '@/components/UI/Button/Button'
import WrapperLayout from '@/layouts/WrapperLayout/WrapperLayout'
import { BsClock } from 'react-icons/bs'
import { GrUserManager } from 'react-icons/gr'
import { RxQuestionMarkCircled } from 'react-icons/rx'
import { TbMessage2 } from 'react-icons/tb'
import cl from './ContactPage.module.scss'

const ContactPage = () => {
	return (
		<main className='main'>
			<Banner img={banner}>
				<>
					<p>Обратная связь</p>
					<p>Быстро и просто</p>
				</>
			</Banner>

			<WrapperLayout>
				<section className={cl.listWrapper}>
					<ul className={cl.list}>
						<li>
							<div className={cl.listElHeader}>
								<GrUserManager />
								<p>КЛИЕНТСКАЯ СЛУЖБА</p>
							</div>
							<p>Помощь в дороге</p>
							<p>8 888 888 88 88</p>
						</li>

						<li>
							<div className={cl.listElHeader}>
								<TbMessage2 />
								<p>Почтовый адрес</p>
							</div>
							<p>888888</p>
							<p>Российская федерация</p>
							<p>Волгоградская област,</p>
							<p>г. Камышин</p>
							<p>Ул. Ленина, 88</p>
						</li>

						<li>
							<div className={cl.listElHeader}>
								<RxQuestionMarkCircled />
								<p>Задать вопрос</p>
							</div>
							<p className={cl.margin}>Задайте свой вопрос</p>

							<Button>ЗАДАТЬ</Button>
						</li>

						<li>
							<div className={cl.listElHeader}>
								<BsClock />
								<p>Режим работы</p>
							</div>
							<p>Каждый день:</p>
							<p className={cl.margin}>с 9:00-21:00</p>

							<p>Суббота и Воскресенье</p>
							<p>с 8:00-21:00</p>
						</li>
					</ul>
				</section>
			</WrapperLayout>
		</main>
	)
}

export default ContactPage
