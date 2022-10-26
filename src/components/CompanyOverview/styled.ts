import styled from 'styled-components'

export const OvervirewStyled = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-items: center;

	height: max-content;
	margin: 12rem 0;
`

export const AchivementsWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
`

export const HeadingOverview = styled.p`
	${({ theme }) => theme.headlines.headline2}
	margin-bottom: 5rem;
	width: minmax(min-content, 92rem);
	max-width: 92rem;
	text-align: center;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.homeThird}) {
		${({ theme }) => theme.headlines.headline3}
	}
`

export const ParagraphOverview = styled.p`
	${({ theme }) => theme.paragraphs.paragraph1}
	color: ${({ theme }) => theme.colors.grey};
	margin: 0 0 5rem 5rem;
	width: minmax(min-content, 54rem);
	max-width: 54rem;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.homeFirst}) {
		text-align: center;
		max-width: 100rem;
		margin: 2rem 0 5rem 0;
	}

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.homeThird}) {
		${({ theme }) => theme.paragraphs.paragraph3}
	}
`

export const AchivementsOverview = styled.p`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	${({ theme }) => theme.paragraphs.paragraph2}
	color: ${({ theme }) => theme.colors.grey};
	margin: 3rem;
	max-width: 16rem;
	max-height: 10rem;

	& > span {
		font-weight: 800;
		color: ${({ theme }) => theme.colors.primary};
		font-size: ${({ theme }) => theme.fontSizes.achivements};
		padding: 1rem;
	}

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.homeThird}) {
		${({ theme }) => theme.paragraphs.paragraph3}

		& > span {
			font-size: ${({ theme }) => theme.fontSizes.achivementsAdaptive};
		}
	}
`

export const LogosContainer = styled.div`
	display: flex;
	max-width: max-content;
	flex-wrap: wrap;
	justify-content: center;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.homeFirst}) {
		max-width: 80rem;
	}
`

export const Logo = styled.img`
	width: 18.5rem;
	height: 13.2rem;
`
