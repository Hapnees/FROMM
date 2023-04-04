import { Link, useLocation } from 'react-router-dom'
import cl from './HeaderAdditionalLine.module.scss'

const HeaderAdditionalLine = () => {
	const { pathname } = useLocation()

	const navs = [
		{ id: 1, title: 'Марка', href: '/mark' },
		{ id: 2, title: 'С пробегом', href: '/mileage' },
		{ id: 3, title: 'Выкуп', href: '/' },
		{ id: 4, title: 'КПП', href: '/' },
		{ id: 5, title: 'Акции', href: '/' },
	]

	return (
		<section className={cl.wrapper}>
			<nav className={cl.nav}>
				{navs.map(nav => (
					<Link
						key={nav.id}
						to={nav.href}
						className={
							nav.href === pathname && pathname !== '/' ? cl.activeNav : ''
						}
					>
						{nav.title}
					</Link>
				))}
			</nav>
		</section>
	)
}

export default HeaderAdditionalLine
