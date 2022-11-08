import styled from 'styled-components'

export const IntroductionStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
	margin: 10rem 0 12rem 0;
	min-width: 100vw;

	text-align: center;

	& > * {
		width: minmax(min-content, 73rem);
		max-width: 73rem;
	}

	& > h6 {
		${({ theme }) => theme.headlines.headline6}
		color: ${({ theme }) => theme.colors.primary};
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
`

export const DummyContentStyled = styled.div`
	display: flex;
	flex-wrap: wrap;
	column-gap: 3rem;
	justify-content: center;
	align-items: center;
	margin: 12rem 0 0 0;
	background-color: ${({ theme }) => theme.colors.background};

	& > ul {
		display: flex;
		flex-direction: column;
		row-gap: 3rem;
		width: minmax(max-content, 54rem);
		max-width: 54rem;
		padding: 12rem 2rem;

		@media only screen and (max-width: ${({ theme }) => theme.breakpoints.solutionsFirst}) {
			padding: 3rem 0 12rem 0;
		}

		& > h1 {
			${({ theme }) => theme.headlines.headline2};

			@media only screen and (max-width: ${({ theme }) => theme.breakpoints.layoutFirst}) {
				${({ theme }) => theme.headlines.headline3}
			}
		}

		& > li {
			display: flex;
			flex-direction: column;
			row-gap: 1.5rem;
			list-style: none;

			& > div {
				display: flex;
				column-gap: 1rem;

				& > h6 {
					${({ theme }) => theme.headlines.headline6};
				}
			}

			& > p {
				${({ theme }) => theme.paragraphs.paragraph2};
				color: ${({ theme }) => theme.colors.grey};

				@media only screen and (max-width: ${({ theme }) => theme.breakpoints.layoutFirst}) {
					${({ theme }) => theme.paragraphs.paragraph3};
				}
			}
		}
	}

	& > img {
		max-width: 50%;
		max-height: 69rem;
		border-radius: 0.6rem;
		background-size: cover;

		@media only screen and (max-width: ${({ theme }) => theme.breakpoints.solutionsFirst}) {
			margin: 12rem 0 3rem 0;
			max-width: 70%;
		}

		@media only screen and (max-width: ${({ theme }) => theme.breakpoints.solutionsSecond}) {
			max-width: 100%;
		}
	}
`

export const TestimonialsWrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	column-gap: 12rem;
	height: minmax(min-content, max-content);
	padding: 12rem 0;
`
