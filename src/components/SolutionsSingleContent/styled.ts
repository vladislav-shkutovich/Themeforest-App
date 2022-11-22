import styled from 'styled-components'

export const SolutionsSingleContentStyled = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	column-gap: 5rem;
	margin: 12rem 0;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.layoutFirst}) {
		margin: 6rem 0;
		text-align: center;
	}
`

export const NavigationStyled = styled.div`
	display: flex;
	flex-direction: column;

	& > a {
		${({ theme }) => theme.headlines.headline7}
		color: ${({ theme }) => theme.colors.black};
		padding: 2rem 3rem;
		border-left: 0.5rem solid ${({ theme }) => theme.colors.primary};
		text-decoration: none;

		&:hover {
			border-left: 0.5rem solid ${({ theme }) => theme.colors.grey};
		}
	}

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.solutionsSingleFirst}) {
		display: none;
	}
`

export const ContentStyled = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 7rem;
	width: minmax(min-content, 63.5rem);
	max-width: 63.5rem;

	& > section {
		display: flex;
		flex-direction: column;

		& > h2 {
			${({ theme }) => theme.headlines.headline2}
			margin-bottom: 3rem;

			@media only screen and (max-width: ${({ theme }) => theme.breakpoints.layoutFirst}) {
				${({ theme }) => theme.headlines.headline3}
			}
		}

		& > p {
			${({ theme }) => theme.paragraphs.paragraph1}
			color: ${({ theme }) => theme.colors.grey};

			@media only screen and (max-width: ${({ theme }) => theme.breakpoints.layoutFirst}) {
				${({ theme }) => theme.paragraphs.paragraph2}
			}
		}

		& > img {
			border-radius: 0.6rem;
			width: 100%;
			margin-bottom: 3rem;
		}

		& > ul {
			display: flex;
			flex-direction: column;
			margin: 3rem 0;
			row-gap: 2.5rem;
			list-style: disc;

			& > li {
				${({ theme }) => theme.paragraphs.paragraph1}
				color: ${({ theme }) => theme.colors.grey};
				margin: 0 2rem;

				@media only screen and (max-width: ${({ theme }) => theme.breakpoints.layoutFirst}) {
					${({ theme }) => theme.paragraphs.paragraph2}
				}
			}
		}
	}
`
