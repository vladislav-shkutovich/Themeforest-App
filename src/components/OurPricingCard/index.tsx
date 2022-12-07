import React, { useState } from 'react'
import { IOurPricingCard } from '@interfaces/index'
import { ReactComponent as CheckMark } from '@assets/icons/check_mark.svg'
import { ButtonsSwitch } from '@components/ButtonsSwitch'
import { ButtonPayPal } from '@components/ButtonPayPal'
import { ButtonDefault } from '@components/ButtonDefault'
import { Wrapper, OurPricingCardStyled } from './styled'

export const OurPricingCard: React.FC<IOurPricingCard> = ({ title, cost, description }) => {
	const [buttonStates, setButtonStates] = useState([true, false])
	const [paymentIsShown, setPaymentIsShown] = useState(false)
	const calculatedCost = buttonStates[0] ? Number(cost.slice(1)) : Number(cost.slice(1)) * 12
	const message = paymentIsShown ? 'Hide payment' : 'Show payment'

	const handleActivity = () => {
		setButtonStates(() => [!buttonStates[0], !buttonStates[1]])
	}
	const handlePayment = () => {
		setPaymentIsShown((prevState) => !prevState)
	}

	return (
		<OurPricingCardStyled>
			<h6>{title}</h6>
			<div>
				<p>${calculatedCost}</p>
				<ButtonsSwitch activityState={buttonStates} callback={handleActivity} />
			</div>
			<Wrapper>
				<ButtonDefault text={message} callback={handlePayment} />
				{paymentIsShown && <ButtonPayPal amount={calculatedCost} />}
				<ul>
					{description.map((item) => (
						<li key={item}>
							<CheckMark />
							{item}
						</li>
					))}
				</ul>
			</Wrapper>
		</OurPricingCardStyled>
	)
}
