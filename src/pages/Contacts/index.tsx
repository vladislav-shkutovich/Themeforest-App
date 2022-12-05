import { memo } from 'react'
import { ContactUs } from '@components/ContactUs'
import { GoogleMapItem } from '@components/GoogleMapItem'
import { MainLayout } from '@layouts/MainLayout'

const ContactsPage: React.FC = () => (
	<MainLayout>
		<ContactUs
			headingText="How we can help You?"
			text="Write to us and our specialists will contact you!"
		/>
		<GoogleMapItem />
	</MainLayout>
)

export default memo(ContactsPage)
