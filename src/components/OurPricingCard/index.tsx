import React, { useState } from 'react'
import { IOurPricingCard } from '@interfaces/index'
import { ReactComponent as CheckMark } from '@assets/icons/check_mark.svg'
import { ButtonsSwitch } from '@components/ButtonsSwitch'
import { ButtonPayPal } from '@components/ButtonPayPal'
import { Wrapper, OurPricingCardStyled } from './styled'

export const OurPricingCard: React.FC<IOurPricingCard> = ({ title, cost, description }) => {
	const [buttonStates, setButtonStates] = useState([true, false])
	const handleActivity = () => {
		setButtonStates(() => [!buttonStates[0], !buttonStates[1]])
	}
	const calculatedCost = buttonStates[0] ? Number(cost.slice(1)) : Number(cost.slice(1)) * 12

	return (
		<OurPricingCardStyled>
			<h6>{title}</h6>
			<div>
				<p>${calculatedCost}</p>
				<ButtonsSwitch activityState={buttonStates} callback={handleActivity} />
			</div>
			<Wrapper>
				<ButtonPayPal amount={calculatedCost} />
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
