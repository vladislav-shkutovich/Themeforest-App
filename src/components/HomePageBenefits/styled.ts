import styled from 'styled-components'

export const BenefitsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 2rem;
`

export const HeadingBenefits = styled.p`
	display: flex;
	justify-content: center;
	align-self: center;
	${({ theme }) => theme.headlines.headline2}
	margin-bottom: 3rem;
	width: minmax(min-content, 54rem);
	max-width: 54rem;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.homeThird}) {
		${({ theme }) => theme.headlines.headline3}
	}
`

export const ParagraphBenefits = styled.p`
	display: flex;
	justify-content: center;
	align-self: center;
	${({ theme }) => theme.paragraphs.paragraph1}
	color: ${({ theme }) => theme.colors.grey};
	width: minmax(min-content, 54rem);
	max-width: 54rem;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.homeThird}) {
		${({ theme }) => theme.paragraphs.paragraph3}
	}
`

export const CardsContainer = styled.div`
	display: flex;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.homeSecond}) {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
	}
`

export const FirstColumnCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.homeSecond}) {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
	}
`

export const SecondColumnCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 5rem;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.homeSecond}) {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		margin-top: 0;
	}
`
