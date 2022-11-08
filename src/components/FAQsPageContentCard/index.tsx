import iconMinus from '@assets/icons/icon_minus.svg'
import iconPlus from '@assets/icons/icon_plus.svg'
import { IFAQsContentCard } from '@interfaces/index'
import { useState } from 'react'
import { ContentCardStyled } from './styled'

export const FAQsPageContentCard: React.FC<IFAQsContentCard> = ({ title, text, isOpen }) => {
	const [cardState, setCardState] = useState(isOpen)

	const handleCardState = () => {
		setCardState((prevState) => !prevState)
	}

	return (
		<ContentCardStyled isOpen={cardState} onClick={handleCardState}>
			<div>
				<h4>{title}</h4>
				<img src={cardState ? iconMinus : iconPlus} alt={cardState ? 'Close' : 'Open'} />
			</div>
			<p>{text}</p>
		</ContentCardStyled>
	)
}
