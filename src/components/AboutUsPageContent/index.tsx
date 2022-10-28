import aboutUsImage1 from '@assets/images/about_us1.png'
import aboutUsImage2 from '@assets/images/about_us2.png'
import { HOMEPAGE_LOGOS } from '@constants/homePageLogos'
import {
	AboutUsContentStyled,
	DummyContentStyled,
	EnsomeNumbersStyled,
	OurCustomersStyled,
} from './styled'

export const AboutUsPageContent: React.FC = () => {
	return (
		<AboutUsContentStyled>
			<DummyContentStyled>
				<div>
					<div>
						<h1>Who we are</h1>
						<p>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
							laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
							architecto beatae vitae dicta sunt explicabo. Donec tincidunt tempor quam, non mollis
							quam finibus nec. Quisque finibus consequat felis vel pretium. Aliquam gravida nisi
							vel convallis ultricies. Integer ante sapien, consequat et dolor vel, cursus lacinia
							lectus.
						</p>
					</div>
					<img src={aboutUsImage1} alt="About Us 1" />
				</div>
				<div>
					<img src={aboutUsImage2} alt="About Us 2" />
					<div>
						<h1>Our mission</h1>
						<p>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
							laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
							architecto beatae vitae dicta sunt explicabo. Donec tincidunt tempor quam, non mollis
							quam finibus nec. Quisque finibus consequat felis vel pretium.
						</p>
					</div>
				</div>
			</DummyContentStyled>

			<EnsomeNumbersStyled>
				<h1>Ensome in numbers</h1>
				<div>
					<div>
						<h2>1830+</h2>
						<p>Project executed</p>
					</div>
					<div>
						<h2>220</h2>
						<p>Data analytics</p>
					</div>
					<div>
						<h2>390</h2>
						<p>Data management</p>
					</div>
					<div>
						<h2>834+</h2>
						<p>Satisfied customers</p>
					</div>
				</div>
			</EnsomeNumbersStyled>

			<OurCustomersStyled>
				<h1>Our customers</h1>
				<p>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
					laudan, totam rem aperiam.
				</p>
				<div>
					{HOMEPAGE_LOGOS.map((item) => (
						<img src={item} key={item} alt="logo" />
					))}
				</div>
			</OurCustomersStyled>
		</AboutUsContentStyled>
	)
}
