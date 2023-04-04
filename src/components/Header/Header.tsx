import WrapperLayout from '@/layouts/WrapperLayout/WrapperLayout'
import HeaderAdditionalLine from './HeaderAdditionalLine/HeaderAdditionalLine'
import HeaderMainLine from './HeaderMainLine/HeaderMainLine'

const Header = () => {
	return (
		<header>
			<WrapperLayout>
				<HeaderMainLine />
				<HeaderAdditionalLine />
			</WrapperLayout>
		</header>
	)
}

export default Header
