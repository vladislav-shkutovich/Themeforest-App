import styled from 'styled-components'

export const AboutUsContentStyled = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	column-gap: 5rem;
`

export const DummyContentStyled = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	width: max-content;
	max-width: 111rem;
	row-gap: 6rem;

	margin: 10rem 0;

	& > div {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-items: center;
		row-gap: 6rem;
		column-gap: 3rem;

		& > div {
			& > h1 {
				${({ theme }) => theme.headlines.headline1}
				margin: 0 2rem 3rem 0;

				@media only screen and (max-width: ${({ theme }) => theme.breakpoints.aboutUsFirst}) {
					max-width: 100%;
					margin: 0 0 3rem 0;
				}

				@media only screen and (max-width: ${({ theme }) => theme.breakpoints.aboutUsSecond}) {
					${({ theme }) => theme.headlines.headline3}
				}
			}

			& > p {
				${({ theme }) => theme.paragraphs.paragraph1}
				color: ${({ theme }) => theme.colors.grey};
				width: minmax(min-content, 44.5rem);
				max-width: 44.5rem;

				@media only screen and (max-width: ${({ theme }) => theme.breakpoints.aboutUsFirst}) {
					max-width: 100%;
					margin: 0 5rem 3rem 5rem;
				}

				@media only screen and (max-width: ${({ theme }) => theme.breakpoints.aboutUsSecond}) {
					${({ theme }) => theme.paragraphs.paragraph3}
				}
			}
		}

		& > img {
			width: 57%;
			border-radius: 0.6rem;

			@media only screen and (max-width: ${({ theme }) => theme.breakpoints.aboutUsFirst}) {
				width: 80%;
				order: 2;
			}

			@media only screen and (max-width: ${({ theme }) => theme.breakpoints.aboutUsSecond}) {
				width: 100%;
			}
		}

		@media only screen and (max-width: ${({ theme }) => theme.breakpoints.aboutUsFirst}) {
			justify-content: center;
			align-content: center;
			max-width: 100%;
			text-align: center;
			row-gap: 3rem;
		}
	}

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.aboutUsSecond}) {
		margin: 6rem 0;
	}
`

export const EnsomeNumbersStyled = styled.div`
	display: flex;
	flex-direction: column;
	justify-items: center;
	align-items: center;

	text-align: center;
	row-gap: 1rem;
	min-width: 100vw;
	border-top: 10rem solid ${({ theme }) => theme.colors.background};
	background-color: ${({ theme }) => theme.colors.background};
	border-bottom: 10rem solid ${({ theme }) => theme.colors.background};

	& > h1 {
		${({ theme }) => theme.headlines.headline1}
		max-width: 54rem;

		@media only screen and (max-width: ${({ theme }) => theme.breakpoints.aboutUsSecond}) {
			${({ theme }) => theme.headlines.headline3}
		}
	}

	& > div {
		display: flex;
		flex-wrap: wrap;
		align-content: center;
		justify-content: center;
		row-gap: 2rem;
		margin: 7rem;

		& > div {
			display: flex;
			flex-direction: column;
			width: 28.5rem;
			border-left: 0.1rem solid ${({ theme }) => theme.colors.helperBlue3};
			border-right: 0.1rem solid ${({ theme }) => theme.colors.helperBlue3};
			padding: 2rem 6rem;
			row-gap: 2rem;

			& > h2 {
				font-size: ${({ theme }) => theme.fontSizes.achivements};
				color: ${({ theme }) => theme.colors.primary};

				@media only screen and (max-width: ${({ theme }) => theme.breakpoints.aboutUsSecond}) {
					font-size: ${({ theme }) => theme.fontSizes.achivementsAdaptive};
				}
			}

			& > p {
				${({ theme }) => theme.paragraphs.paragraph2Bold}

				@media only screen and (max-width: ${({ theme }) => theme.breakpoints.aboutUsSecond}) {
					${({ theme }) => theme.paragraphs.paragraph3Bold}
				}
			}

			@media only screen and (max-width: ${({ theme }) => theme.breakpoints.aboutUsSecond}) {
				width: 23rem;
			}
		}
	}
`

export const OurCustomersStyled = styled.div`
	display: flex;
	flex-direction: column;
	margin: 12rem 0 0 3rem;
	row-gap: 3rem;

	& > h1 {
		${({ theme }) => theme.headlines.headline1}
		max-width: 54rem;
		margin-bottom: 3rem;

		@media only screen and (max-width: ${({ theme }) => theme.breakpoints.aboutUsSecond}) {
			${({ theme }) => theme.headlines.headline3}
		}
	}

	& > p {
		${({ theme }) => theme.paragraphs.paragraph1}
		color: ${({ theme }) => theme.colors.grey};
		width: minmax(min-content, 44.5rem);
		max-width: 44.5rem;

		@media only screen and (max-width: ${({ theme }) => theme.breakpoints.aboutUsFirst}) {
			max-width: 80%;
		}

		@media only screen and (max-width: ${({ theme }) => theme.breakpoints.aboutUsSecond}) {
			${({ theme }) => theme.paragraphs.paragraph3}
		}
	}

	& > div {
		display: flex;
		max-width: max-content;
		flex-wrap: wrap;
		justify-content: center;

		& > img {
			width: 18.5rem;
			height: 13.2rem;

			@media only screen and (max-width: ${({ theme }) => theme.breakpoints.aboutUsSecond}) {
				width: 13rem;
				height: 9rem;
			}
		}

		@media only screen and (max-width: ${({ theme }) => theme.breakpoints.homeFirst}) {
			max-width: 80rem;
		}
	}

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.aboutUsFirst}) {
		align-items: center;
		text-align: center;
	}
`
