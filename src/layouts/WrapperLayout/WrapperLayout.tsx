import { FC, PropsWithChildren } from 'react'
import cl from './WrapperLayout.module.scss'

const WrapperLayout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return <section className={cl.wrapper}>{children}</section>
}

export default WrapperLayout
