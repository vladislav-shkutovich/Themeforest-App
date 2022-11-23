/* eslint-disable @typescript-eslint/no-explicit-any */
import { createRef, useState } from 'react'
import { ISolutionsSingleItem } from '@interfaces/index'
import { SolutionsSingleArticle } from '@components/SolutionsSingleArticle'
import {
	SolutionsSingleContentStyled,
	NavigationStyled,
	ContentStyled,
	NavigationButton,
} from './styled'

export const SolutionsSingleContent: React.FC<{ solutionsSingleItem: ISolutionsSingleItem }> = ({
	solutionsSingleItem,
}) => {
	const { content } = solutionsSingleItem
	const [activeHeading, setActiveHeading] = useState(content[0].name)
	const contentRefs = content.reduce((refsObj: any, { name }) => {
		refsObj[name] = createRef()
		return refsObj
	}, {})

	const moveToHeading = (name: string) => (): void => {
		contentRefs[name].current.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<SolutionsSingleContentStyled>
			<NavigationStyled>
				{content.map(({ name, heading }) => (
					<NavigationButton
						type="button"
						key={name}
						name={name}
						activeHeading={activeHeading}
						onClick={moveToHeading(name)}
					>
						{heading}
					</NavigationButton>
				))}
			</NavigationStyled>

			<ContentStyled>
				{content.map(({ name, heading, image, text, list }) => (
					<SolutionsSingleArticle
						key={name}
						ref={contentRefs[name]}
						name={name}
						refs={contentRefs}
						heading={heading}
						image={image}
						text={text}
						list={list}
						activeHeading={activeHeading}
						callback={setActiveHeading}
					/>
				))}
			</ContentStyled>
		</SolutionsSingleContentStyled>
	)
}
