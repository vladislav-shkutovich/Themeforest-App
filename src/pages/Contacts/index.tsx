import { ContactUs } from '@components/ContactUs'
import { GoogleMapItem } from '@components/GoogleMapItem'
import { MainLayout } from '@layouts/MainLayout'

export const ContactsPage: React.FC = () => (
	<MainLayout>
		<ContactUs />
		<GoogleMapItem />
	</MainLayout>
)
