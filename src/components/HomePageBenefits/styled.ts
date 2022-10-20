import styled from 'styled-components'

export const BenefitsContainer = styled.div`
	display: flex;
	flex-direction: column;
`

export const HeadingBenefits = styled.p`
	${({ theme }) => theme.headlines.headline2}
	margin-bottom: 3rem;
	width: minmax(min-content, 54rem);
	max-width: 54rem;
`

export const ParagraphBenefits = styled.p`
	${({ theme }) => theme.paragraphs.paragraph1}
	color: ${({ theme }) => theme.colors.grey};
	width: minmax(min-content, 54rem);
	max-width: 54rem;
`

export const FirstColumnCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const SecondColumnCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 5rem;
`
