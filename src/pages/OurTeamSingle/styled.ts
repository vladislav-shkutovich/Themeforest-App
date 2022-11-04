import styled from 'styled-components'

export const IntroductionStyled = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	row-gap: 2rem;
	min-width: 100vw;
	border-top: 12rem solid ${({ theme }) => theme.colors.background};
	background-color: ${({ theme }) => theme.colors.background};
	border-bottom: 12rem solid ${({ theme }) => theme.colors.background};

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.layoutFirst}) {
		border-top: 6rem solid ${({ theme }) => theme.colors.background};
		border-bottom: 6rem solid ${({ theme }) => theme.colors.background};
	}

	& > h2 {
		${({ theme }) => theme.headlines.headline1}
		margin: 0 2rem;
		text-align: center;

		@media only screen and (max-width: ${({ theme }) => theme.breakpoints.layoutFirst}) {
			${({ theme }) => theme.headlines.headline2}
		}
	}

	& > div {
		display: flex;
		align-items: center;
		text-align: center;

		& > a {
			${({ theme }) => theme.headlines.headline7}
			color: ${({ theme }) => theme.colors.grey};
			border-right: 0.1rem solid ${({ theme }) => theme.colors.grey};
			padding: 0 2rem;
			text-decoration: none;

			@media only screen and (max-width: ${({ theme }) => theme.breakpoints.ourTeamSingleThird}) {
				padding: 0 1rem;
			}
		}

		& > h6 {
			${({ theme }) => theme.headlines.headline7}
			font-weight: 600;
			padding: 0 2rem;

			@media only screen and (max-width: ${({ theme }) => theme.breakpoints.ourTeamSingleThird}) {
				padding: 0 1rem;
			}
		}
	}
`
