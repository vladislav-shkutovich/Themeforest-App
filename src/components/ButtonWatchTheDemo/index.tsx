import vector from '@assets/icons/icon_play.svg'
import { YouTubeModal } from '@components/YouTubeModal'
import { useState } from 'react'
import { ButtonWatchTheDemoStyled, VectorStyled, TextStyled } from './styled'

export const ButtonWatchTheDemo: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false)

	const handleOpening = () => {
		setIsOpen((currentState) => !currentState)
	}

	return (
		<>
			<ButtonWatchTheDemoStyled onClick={handleOpening}>
				<VectorStyled alt="Vector" src={vector} />
				<TextStyled>{isOpen ? 'Close Video' : 'Watch The Demo'}</TextStyled>
			</ButtonWatchTheDemoStyled>
			{isOpen && <YouTubeModal isOpen={isOpen} handleOpening={handleOpening} />}
		</>
	)
}
