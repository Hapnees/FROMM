import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import cl from './FormButton.module.scss'

const FormButton: FC<
	DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ children, ...props }) => {
	return (
		<button className={cl.button} {...props}>
			{children}
		</button>
	)
}

export default FormButton
