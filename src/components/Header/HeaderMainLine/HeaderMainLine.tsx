import { BsSearch } from 'react-icons/bs'
import { GiAutoRepair } from 'react-icons/gi'
import { MdOutlineContactPhone } from 'react-icons/md'
import { TbCertificate } from 'react-icons/tb'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import cl from './HeaderMainLine.module.scss'

const HeaderMainLine = () => {
	const navigate = useNavigate()
	const { pathname } = useLocation()

	const navs = [
		{ id: 1, title: 'Сервис', icon: <GiAutoRepair />, href: '/services' },
		{ id: 2, title: 'Услуги', icon: <TbCertificate />, href: '/' },
		{
			id: 3,
			title: 'Контакты',
			icon: <MdOutlineContactPhone />,
			href: '/contacts',
		},
	]

	const onClickLogo = () => navigate('/')

	return (
		<article className={cl.container}>
			<div className={cl.logo} onClick={onClickLogo}>
				<p>А</p>
				<p>Автосалон</p>
			</div>

			<div className={cl.controls}>
				<nav className={cl.nav}>
					{navs.map(nav => (
						<Link
							key={nav.id}
							to={nav.href}
							className={
								nav.href === pathname && pathname !== '/' ? cl.activeNav : ''
							}
						>
							{nav.icon}
							<p>{nav.title}</p>
						</Link>
					))}
				</nav>

				<BsSearch />
			</div>
		</article>
	)
}

export default HeaderMainLine
