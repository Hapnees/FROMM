import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import cl from './Button.module.scss'

const Button: FC<
	DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ children, className, ...props }) => {
	return (
		<button className={`${cl.button} ${className}`} {...props}>
			{children}
		</button>
	)
}

export default Button
