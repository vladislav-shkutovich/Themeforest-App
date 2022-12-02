import styled from 'styled-components'

export const RelatedPostsStyled = styled.ul`
	display: flex;
	flex-direction: column;
	row-gap: 3rem;
	max-width: 63.5rem;

	& > h3 {
		${({ theme }) => theme.headlines.headline3}
		margin: 0 2rem;
	}

	& > ul {
		display: flex;
		flex-direction: column;
		row-gap: 3rem;
		width: minmax(max-content, 63.5rem);
		max-width: 63.5rem;

		& > a {
			display: flex;
			align-items: center;
			justify-items: center;
			column-gap: 2rem;
			text-decoration: none;

			& > img {
				width: minmax(min-content, 21.5rem);
				max-width: 21.5rem;
				border-radius: 0.6rem;

				@media only screen and (max-width: ${({ theme }) => theme.breakpoints.blogSingleFirst}) {
					max-width: 19rem;
				}
			}

			& > div {
				display: flex;
				flex-direction: column;

				& > h5 {
					${({ theme }) => theme.paragraphs.paragraph3}
					color: ${({ theme }) => theme.colors.grey};

					@media only screen and (max-width: ${({ theme }) => theme.breakpoints.layoutFirst}) {
						font-size: ${({ theme }) => theme.fontSizes.small};
					}
				}

				& > h6 {
					${({ theme }) => theme.headlines.headline6}
				}

				& > p {
					${({ theme }) => theme.paragraphs.paragraph2}
					color: ${({ theme }) => theme.colors.grey};

					@media only screen and (max-width: ${({ theme }) => theme.breakpoints.blogSingleFirst}) {
						display: none;
					}

					@media only screen and (max-width: ${({ theme }) => theme.breakpoints.layoutFirst}) {
						${({ theme }) => theme.paragraphs.paragraph3}
					}
				}
			}
		}
	}
`
