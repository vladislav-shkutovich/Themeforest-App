import styled from 'styled-components'

export const PopularPostsStyled = styled.ul`
	display: flex;
	flex-direction: column;
	row-gap: 3rem;
	max-width: 44.5rem;

	& > h4 {
		${({ theme }) => theme.headlines.headline4}
		margin: 3rem 0 0 2rem;
	}

	& > ul {
		display: flex;
		flex-direction: column;
		row-gap: 3rem;
		max-width: 44.5rem;

		& > li {
			display: flex;
			align-items: center;
			justify-items: center;
			column-gap: 2rem;

			& > img {
				width: 19rem;
				border-radius: 0.6rem;
			}

			& > div {
				display: flex;
				flex-direction: column;
				row-gap: 1.5rem;

				& > p {
					${({ theme }) => theme.paragraphs.paragraph3}
					color: ${({ theme }) => theme.colors.grey};

					@media only screen and (max-width: ${({ theme }) => theme.breakpoints.layoutFirst}) {
						font-size: ${({ theme }) => theme.fontSizes.small};
					}
				}

				& > h6 {
					${({ theme }) => theme.headlines.headline6}
				}

				& > a {
					${({ theme }) => theme.headlines.headline7}
					color: ${({ theme }) => theme.colors.primary};
					margin-right: 0.7rem;
					text-decoration: none;
				}
			}
		}
	}

	& > button {
		transform: scale(0.8);
		margin: 0;
	}
`
