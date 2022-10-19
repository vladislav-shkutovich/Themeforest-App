/* eslint-disable no-irregular-whitespace */
import imageEnsome from '@assets/images/home1.png'
import imageSolutions from '@assets/images/home2.png'
import { HOMEPAGE_LOGOS } from '@constants/homepageLogos'
import { HOMEPAGE_BENEFITS_CARDS } from '@constants/homepageBenefitsCards'
import { MainLayout } from '@layouts/MainLayout'
import { ButtonCircle } from '@components/ButtonCircle'
import { ButtonDefault } from '@components/ButtonDefault'
import { CardHomePage } from '@components/CardHomePage'

import {
	SetcionIntroduction,
	HeadingEnsome,
	ParagraphEnsome,
	ImageEnsome,
	HeadingNewest,
	ParagraphNewest,
	HeadingSolutions,
	ImageSolutions,
	BackgroundWrapperSolutions,
	SetcionServices,
	HeadingServices,
	ParagraphServices,
	AchivementsServices,
	SectionBenefits,
	SetcionSliders,
	SetcionHelp,
	LogosContainer,
	Logo,
	HeadingBenefits,
	ParagraphBenefits,
	BenefitsContainer,
	FirstColumnCard,
	SecondColumnCard,
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

			<HeadingSolutions>
				Radically new solutions for data
				<span>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
					laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
					architecto beatae vitae dicta sunt explicabo.
				</span>
				<ButtonDefault text="Learn more" />
			</HeadingSolutions>

			<ImageSolutions alt="People" src={imageSolutions} />
			<BackgroundWrapperSolutions />
		</SetcionIntroduction>

		<SetcionServices>
			<HeadingServices>We provide services that guarantee your success</HeadingServices>
			<div>
				<AchivementsServices>
					<span>1830+</span>
					Project executed
				</AchivementsServices>
				<AchivementsServices>
					<span>834+</span>
					Satisfied customers
				</AchivementsServices>
				<AchivementsServices>
					<span>390</span>
					Data management
				</AchivementsServices>
				<ParagraphServices>
					Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque
					laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore. Donec tincidunt tempor
					quam, non mollis quam finibus nec.
				</ParagraphServices>
			</div>
			<LogosContainer>
				{HOMEPAGE_LOGOS.map((item) => (
					<Logo src={item} key={item} />
				))}
			</LogosContainer>
		</SetcionServices>

		<SectionBenefits>
			<BenefitsContainer>
				<HeadingBenefits>The benefits of Ensome </HeadingBenefits>
				<ParagraphBenefits>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
					laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
					architecto beatae vitae dicta sunt explicabo.
				</ParagraphBenefits>
			</BenefitsContainer>
			<div>
				<FirstColumnCard>
					{HOMEPAGE_BENEFITS_CARDS.slice(0, 2).map((item) => (
						<CardHomePage {...item} />
					))}
				</FirstColumnCard>
				<SecondColumnCard>
					{HOMEPAGE_BENEFITS_CARDS.slice(2).map((item) => (
						<CardHomePage {...item} />
					))}
				</SecondColumnCard>
			</div>
		</SectionBenefits>

		<SetcionSliders>SetcionSliders</SetcionSliders>

		<SetcionHelp>SetcionHelp</SetcionHelp>
	</MainLayout>
)
