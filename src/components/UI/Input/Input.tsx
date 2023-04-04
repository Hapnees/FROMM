import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react'
import cl from './Input.module.scss'

const Input: FC<
	DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = ({ ...props }) => {
	return <input type='text' className={cl.input} {...props} />
}

export default Input
