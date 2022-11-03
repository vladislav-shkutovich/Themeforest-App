import { OurTeamContentCard } from '@components/OurTeamContentCard'
import { OUR_TEAM_CONTENT_CARDS } from '@constants/ourTeamContentCards'
import { ContentStyled } from './styled'

export const OurTeamContent: React.FC = () => {
	return (
		<ContentStyled>
			{OUR_TEAM_CONTENT_CARDS.map((item) => (
				<OurTeamContentCard {...item} key={item.id} />
			))}
		</ContentStyled>
	)
}
