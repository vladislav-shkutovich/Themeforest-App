import { ISolutionsSingleItem } from '@interfaces/index'
import { SolutionsSingleContentStyled, NavigationStyled, ContentStyled } from './styled'

export const SolutionsSingleContent: React.FC<{ solutionsSingleItem: ISolutionsSingleItem }> = ({
	solutionsSingleItem,
}) => {
	const { content } = solutionsSingleItem

	return (
		<SolutionsSingleContentStyled>
			<NavigationStyled>
				{content.map(({ href, heading }) => (
					<a href={href} key={href}>
						{heading}
					</a>
				))}
			</NavigationStyled>

			<ContentStyled>
				{content.map(({ href, heading, image, text, list }) => (
					<section id={href} key={href}>
						<h2>{heading}</h2>
						{image && <img src={image} alt="Solution" />}
						<p>{text}</p>
						{list && (
							<ul>
								{list.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						)}
					</section>
				))}
			</ContentStyled>
		</SolutionsSingleContentStyled>
	)
}
