import styled from 'styled-components'

export const IntroductionStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
	min-width: 100vw;
	text-align: center;
	margin: 12rem 0;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.layoutFirst}) {
		margin: 6rem 0;
	}

	& > div {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		width: minmax(min-content, 54rem);
		max-width: 54rem;
		margin-bottom: 12rem;

		@media only screen and (max-width: ${({ theme }) => theme.breakpoints.layoutFirst}) {
			margin-bottom: 6rem;
		}

		& > h6 {
			${({ theme }) => theme.headlines.headline6}
			color: ${({ theme }) => theme.colors.primary};

			@media only screen and (max-width: ${({ theme }) => theme.breakpoints.layoutFirst}) {
				${({ theme }) => theme.headlines.headline7}
			}
		}

		& > h1 {
			${({ theme }) => theme.headlines.headline1}

			@media only screen and (max-width: ${({ theme }) => theme.breakpoints.layoutFirst}) {
				${({ theme }) => theme.headlines.headline3}
			}
		}

		& > p {
			${({ theme }) => theme.paragraphs.paragraph1}
			color: ${({ theme }) => theme.colors.grey};

			@media only screen and (max-width: ${({ theme }) => theme.breakpoints.layoutFirst}) {
				max-width: 60rem;
				${({ theme }) => theme.paragraphs.paragraph3}
			}
		}
	}

	& > img {
		background-size: cover;
		width: 100vw;
		max-width: 1110px;
		height: 100%;
		max-height: 50rem;
		border-radius: 0.6rem;
		margin-bottom: 5rem;
	}

	& > p {
		${({ theme }) => theme.paragraphs.paragraph1}
		color: ${({ theme }) => theme.colors.grey};
		max-width: 111rem;

		@media only screen and (max-width: ${({ theme }) => theme.breakpoints.layoutFirst}) {
			${({ theme }) => theme.paragraphs.paragraph3}
		}
	}
`
