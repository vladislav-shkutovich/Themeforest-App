import { ButtonWrapper } from './styled'

export const ButtonPayPal: React.FC<{
	amount: string
	showSpinner: boolean
	currency: string
}> = ({ amount, showSpinner, currency }) => {
	return <ButtonWrapper>PayPalButton</ButtonWrapper>
}
