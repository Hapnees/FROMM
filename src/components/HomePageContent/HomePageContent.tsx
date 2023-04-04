import { newsData } from '@/data/news.data'
import { MdArrowForwardIos } from 'react-icons/md'
import Button from '../UI/Button/Button'
import cl from './HomePageContent.module.scss'

const HomePageContent = () => {
	return (
		<section>
			<article className={cl.header}>
				<h1 className={cl.title}>Новости</h1>
				<div className={cl.controls}>
					<Button>ВСЕ НОВОСТИ</Button>
					<div className={cl.arrows}>
						<MdArrowForwardIos className={`${cl.arrow} ${cl.rotate}`} />
						<MdArrowForwardIos className={cl.arrow} />
					</div>
				</div>
			</article>

			<article>
				<ul className={cl.news}>
					{newsData.map(news => (
						<li key={news.id}>
							<p className={cl.date}>{news.date}</p>
							<h2 className={cl.newsTitle}>{news.title}</h2>

							<p>{news.body}</p>
						</li>
					))}
				</ul>
			</article>
		</section>
	)
}

export default HomePageContent
