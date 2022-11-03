import styled from 'styled-components'

export const ContentCardStyled = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: minmax(min-content, 54rem);
	max-width: 54rem;

	& > a {
		margin-bottom: 2rem;
		& > img {
			height: 100%;
			max-width: 54rem;
			max-height: 72rem;
			border-radius: 0.6rem;

			@media only screen and (max-width: ${({ theme }) => theme.breakpoints.ourTeamFirst}) {
				max-width: 37.8rem;
				max-height: 50.4rem;
			}

			@media only screen and (max-width: ${({ theme }) => theme.breakpoints.ourTeamSecond}) {
				max-width: 30.24rem;
				max-height: 40.32rem;
			}

			@media only screen and (max-width: ${({ theme }) => theme.breakpoints.ourTeamThird}) {
				max-width: 24.192rem;
				max-height: 32.256rem;
			}

			@media only screen and (max-width: ${({ theme }) => theme.breakpoints.ourTeamThird}) {
				max-width: 19.353rem;
				max-height: 25.805rem;
			}
		}
	}

	& > h5 {
		${({ theme }) => theme.headlines.headline5}
		width: minmax(min-content, 20rem);
		margin-bottom: 0.7rem;

		@media only screen and (max-width: ${({ theme }) => theme.breakpoints.layoutFirst}) {
			${({ theme }) => theme.headlines.headline6}
		}
	}

	& > p {
		${({ theme }) => theme.paragraphs.paragraph2}
		color: ${({ theme }) => theme.colors.grey};

		@media only screen and (max-width: ${({ theme }) => theme.breakpoints.layoutFirst}) {
			${({ theme }) => theme.paragraphs.paragraph3}
		}
	}

	/* @media only screen and (max-width: ${({ theme }) => theme.breakpoints.servicesFirst}) {
		align-items: center;

		& > * {
			text-align: center;
		}
	} */
`
