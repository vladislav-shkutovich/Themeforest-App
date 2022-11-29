/* eslint-disable no-irregular-whitespace */
import { ContactUsForm } from '@forms/ContactUsForm'
import { ContactUsStyled, ContactsStyled } from './styled'

export const ContactUs: React.FC<{ headingText?: string; text?: string }> = ({
	headingText,
	text,
}) => {
	return (
		<ContactUsStyled>
			<ContactsStyled>
				<h2>
					{headingText || 'Left questions? Contacts us now for a free consultation and free trial!'}
				</h2>
				<p>
					{text ||
						`Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
					nisi ut aliquid ex ea commodi.`}
				</p>
				<div>
					Email address <span>ensome@info.co.us</span>
					Phone number <span>+1601-201-5580</span>
					Address <span>1642 Washington Avenue, Jackson, MS, Mississippi, 39201</span>
				</div>
			</ContactsStyled>

			<ContactUsForm />
		</ContactUsStyled>
	)
}
