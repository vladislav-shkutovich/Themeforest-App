import styled from 'styled-components'

export const IntroductionStyled = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	row-gap: 3rem;
	column-gap: 15rem;
	min-width: 100vw;
	border-top: 6rem solid ${({ theme }) => theme.colors.background};
	background-color: ${({ theme }) => theme.colors.background};
	border-bottom: 6rem solid ${({ theme }) => theme.colors.background};

	& > h2 {
		${({ theme }) => theme.headlines.headline2}
		color: ${({ theme }) => theme.colors.primary};
		margin: 0 2rem;
		text-align: center;
	}

	& > h6 {
		${({ theme }) => theme.headlines.headline6}
		width: minmax(min-content, 35rem);
		max-width: 35rem;
		margin: 0 2rem;
	}

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.servicesSingleFirst}) {
		flex-direction: column;

		& > p {
			width: minmax(min-content, 63.5rem);
			max-width: 63.5rem;
		}
	}
`
