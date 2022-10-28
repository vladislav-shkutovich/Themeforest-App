import styled from 'styled-components'

export const IntroductionStyled = styled.h1`
	border-top: 8rem solid ${({ theme }) => theme.colors.background};
	background-color: ${({ theme }) => theme.colors.background};
	border-bottom: 8rem solid ${({ theme }) => theme.colors.background};

	${({ theme }) => theme.headlines.headline1}
	color: ${({ theme }) => theme.colors.primary};
	text-align: center;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.aboutUsSecond}) {
		${({ theme }) => theme.headlines.headline3}
	}
`

export const TestimonialsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	column-gap: 12rem;
	height: minmax(min-content, max-content);
	padding: 12rem 0;
`
