/* eslint-disable jsx-a11y/label-has-associated-control */
import { ButtonDefault } from '@components/ButtonDefault'
import { FormStyled } from './styled'

export const EmailForm: React.FC = () => {
	return (
		<FormStyled>
			<h3>Contact Us</h3>

			<label htmlFor="Name">Your Name</label>
			<input type="text" name="name" id="name" />

			<label htmlFor="Email">Your Email</label>
			<input type="text" name="Email" id="Email" />

			<label htmlFor="Theme">Theme</label>
			<input type="text" name="Theme" id="Theme" />

			<label htmlFor="Message">Your Message</label>
			<input type="text" name="Message" id="Message" />

			<ButtonDefault text="Send" />
		</FormStyled>
	)
}
