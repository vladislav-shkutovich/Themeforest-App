import { MainLayout } from '@layouts/MainLayout'
import { useParams } from 'react-router-dom'
import { SERVICES_SINGLE_ITEMS } from '@constants/servicesSingleItems'
import { NotFoundPage } from '@pages/NotFound'

export const ServicesPageSingle: React.FC = () => {
	const { id: servicesSingleId } = useParams()
	const servicesSingleItem = SERVICES_SINGLE_ITEMS.find((item) => item.id === servicesSingleId)

	if (!servicesSingleItem) return <NotFoundPage />

	const { id, title, subtitle, key } = servicesSingleItem

	return (
		<MainLayout>
			<div>
				{title}, id: {id}
			</div>
		</MainLayout>
	)
}
