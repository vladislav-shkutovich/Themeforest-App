/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import { ButtonWrapper } from './styled'

export const ButtonPayPal: React.FC<{ amount: number }> = ({ amount }) => {
	return (
		<ButtonWrapper>
			<PayPalScriptProvider options={{ 'client-id': 'test', components: 'buttons' }}>
				<PayPalButtons
					style={{
						layout: 'vertical',
						color: 'white',
						shape: 'rect',
						label: 'paypal',
					}}
					createOrder={(_, actions: any) => {
						return actions.order.create({
							purchase_units: [
								{
									amount: {
										currency_code: 'USD',
										value: amount,
									},
								},
							],
						})
					}}
					onApprove={(_, actions: any) => {
						return actions.order.capture().then((details: any) => {
							const name = details.payer.name.given_name
							// eslint-disable-next-line no-alert
							alert(`Transaction completed by ${name}`)
						})
					}}
				/>
			</PayPalScriptProvider>
		</ButtonWrapper>
	)
}
