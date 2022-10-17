/* eslint-disable no-irregular-whitespace */
import imageEnsome from '@assets/images/home1.png'
import imageSolutions from '@assets/images/home2.png'
import { MainLayout } from '@layouts/MainLayout'
import { ButtonCircle } from '@components/ButtonCircle'
import { ButtonDefault } from '@components/ButtonDefault'
import {
	SetcionIntroduction,
	HeadingEnsome,
	ParagraphEnsome,
	ImageEnsome,
	HeadingNewest,
	ParagraphNewest,
	HeadingSolutions,
	ParagraphSolutions,
	ImageSolutions,
	BackgroundWrapperSolutions,
	SetcionServices,
	SetcionBenefits,
	SetcionSliders,
	SetcionHelp,
} from './styled'

export const HomePage: React.FC = () => (
	<MainLayout>
		<SetcionIntroduction>
			<HeadingEnsome>
				Find true power in your data with <span>Ensome</span>
			</HeadingEnsome>
			<ParagraphEnsome>
				Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lauda,
				totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
				<ButtonCircle text="Learn More" />
			</ParagraphEnsome>
			<ImageEnsome alt="People" src={imageEnsome} />

			<HeadingNewest>
				The <span>newest</span> business analytics platform
			</HeadingNewest>
			<ParagraphNewest>
				Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
				laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
				architecto beatae vitae dicta sunt explicabo.
				<ButtonDefault text="Discover more" />
			</ParagraphNewest>

			<HeadingSolutions>Radically new solutions for data</HeadingSolutions>
			<ParagraphSolutions>
				Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
				laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
				architecto beatae vitae dicta sunt explicabo.
				<ButtonDefault text="Learn more" />
			</ParagraphSolutions>
			<ImageSolutions alt="People" src={imageSolutions} />
			<BackgroundWrapperSolutions />
		</SetcionIntroduction>

		<SetcionServices>SetcionServices</SetcionServices>

		<SetcionBenefits>SetcionBenefits</SetcionBenefits>

		<SetcionSliders>SetcionSliders</SetcionSliders>

		<SetcionHelp>SetcionHelp</SetcionHelp>
	</MainLayout>
)
