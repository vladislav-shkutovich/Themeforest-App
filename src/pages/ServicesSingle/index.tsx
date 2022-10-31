import { MainLayout } from '@layouts/MainLayout'
import { useParams } from 'react-router-dom'
import { SERVICES_SINGLE_ITEMS } from '@constants/servicesSingleItems'
import { NotFoundPage } from '@pages/NotFound'
import { ServicesSingleContent } from '@components/ServicesSingleContent'
import { ContactUs } from '@components/ContactUs'
import { IntroductionStyled } from './styled'

export const ServicesPageSingle: React.FC = () => {
	const { id: servicesSingleId } = useParams()
	const servicesSingleItem = SERVICES_SINGLE_ITEMS.find((item) => item.id === servicesSingleId)
	if (!servicesSingleItem) return <NotFoundPage />
	const { title, subtitle } = servicesSingleItem

	return (
		<MainLayout>
			<IntroductionStyled>
				<h2>{title}</h2>
				<p>{subtitle}</p>
			</IntroductionStyled>
			<ServicesSingleContent services={SERVICES_SINGLE_ITEMS} />
			<ContactUs />
		</MainLayout>
	)
}
