import { MainLayout } from '@layouts/MainLayout'
import outTeamImage1 from '@assets/images/our_team_1.png'
import { OurTeamContent } from '@components/OurTeamContent'
import { IntroductionStyled } from './styled'

export const OurTeamPage: React.FC = () => (
	<MainLayout>
		<IntroductionStyled>
			<div>
				<h6>Our Team</h6>
				<h1>Get to know us closer</h1>
				<p>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
					laudantium totam.
				</p>
			</div>
			<img src={outTeamImage1} alt="Our team" />
			<p>
				Phasellus tristique eu nisl eu consectetur. Morbi urna massa, imperdiet in mauris et,
				euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor
				orci. Sed quis lobortis eros. Fusce id commodo libero. At vero eos et accusamus et iusto
				odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos
				dolores et quas. Nulla rhoncus consectetur eros non iaculis.
			</p>
		</IntroductionStyled>

		<OurTeamContent />
	</MainLayout>
)
