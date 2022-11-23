/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components'

export const ArticleStyled = styled.div<{ ref: any }>`
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
`
