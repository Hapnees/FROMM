import { FC } from 'react'
import cl from './Banner.module.scss'

interface IProps {
	img: string
	children: JSX.Element
}

const Banner: FC<IProps> = ({ img, children }) => {
	return (
		<section className={cl.wrapper}>
			<img src={img} alt='' className='banner' />
			<div className={cl.info}>{children}</div>
		</section>
	)
}

export default Banner
