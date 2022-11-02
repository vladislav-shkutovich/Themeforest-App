/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-irregular-whitespace */
import { ButtonDefault } from '@components/ButtonDefault'
import { ContactUsStyled, ContactsStyled, FormStyled } from './styled'

export const ContactUs: React.FC = () => {
	return (
		<ContactUsStyled>
			<ContactsStyled>
				<h2>Left questions? Contacts us now for a free consultation and free trial!</h2>
				<p>
					Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
					nisi ut aliquid ex ea commodi.
				</p>
				<div>
					Email address <span>ensome@info.co.us</span>
					Phone number <span>+1601-201-5580</span>
					Address <span>1642 Washington Avenue, Jackson, MS, Mississippi, 39201</span>
				</div>
			</ContactsStyled>
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
		</ContactUsStyled>
	)
}
