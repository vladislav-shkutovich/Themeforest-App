import { OurTeamContentCard } from '@components/OurTeamContentCard'
import { OUR_TEAM_CONTENT_CARDS } from '@constants/ourTeamContentCards'
import { useInfiniteScroll } from '@hooks/useInfiniteScroll'
import { useEffect } from 'react'
import { ContentStyled } from './styled'

export const OurTeamContent: React.FC = () => {
	const { indexToScroll, handleScroll } = useInfiniteScroll(OUR_TEAM_CONTENT_CARDS)

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [handleScroll])

	return (
		<ContentStyled>
			{OUR_TEAM_CONTENT_CARDS.slice(0, indexToScroll).map((item) => (
				<OurTeamContentCard {...item} key={item.id} />
			))}
		</ContentStyled>
	)
}
