import { MainLayout } from '@layouts/MainLayout'
import { Link, useParams } from 'react-router-dom'
import { NotFoundPage } from '@pages/NotFound'
import { OUR_TEAM_CONTENT_CARDS } from '@constants/ourTeamContentCards'
import { HOME_PAGE_ROUTE, OUR_TEAM_ROUTE } from '@constants/router'
import { TeamMemberCard } from '@components/TeamMebmerCard'
import { IntroductionStyled } from './styled'

export const OurTeamSinglePage: React.FC = () => {
	const { id: ourTeamSingleId } = useParams()

	const teamMemberCard = OUR_TEAM_CONTENT_CARDS.find((item) => item.id === ourTeamSingleId)

	if (!teamMemberCard) return <NotFoundPage />

	const { firstName, lastName } = teamMemberCard

	return (
		<MainLayout>
			<IntroductionStyled>
				<h2>
					{firstName} {lastName}
				</h2>
				<div>
					<Link to={HOME_PAGE_ROUTE}>Home</Link>
					<Link to={OUR_TEAM_ROUTE}>Our Team</Link>
					<h6>
						{firstName} {lastName}
					</h6>
				</div>
			</IntroductionStyled>
			<TeamMemberCard teamMemberCard={teamMemberCard} />
		</MainLayout>
	)
}
