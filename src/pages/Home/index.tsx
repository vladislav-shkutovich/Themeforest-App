import { MainLayout } from '@layouts/MainLayout'
import imageFirst from '@assets/images/home1.png'
import {
	SetcionIntroduction,
	HeadingFirst,
	ParagraphFirst,
	ImageFirst,
	SetcionServices,
	SetcionBenefits,
	SetcionSliders,
	SetcionHelp,
} from './styled'

export const HomePage: React.FC = () => (
	<MainLayout>
		<SetcionIntroduction>
			<HeadingFirst>
				Find true power in your data with <span>Ensome</span>
			</HeadingFirst>
			<ParagraphFirst>
				Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lauda,
				totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
			</ParagraphFirst>
			<ImageFirst alt="People" src={imageFirst} />
		</SetcionIntroduction>

		<SetcionServices>SetcionServices</SetcionServices>

		<SetcionBenefits>SetcionBenefits</SetcionBenefits>

		<SetcionSliders>SetcionSliders</SetcionSliders>

		<SetcionHelp>SetcionHelp</SetcionHelp>
	</MainLayout>
)
