import styled from 'styled-components'

export const CategoriesListStyled = styled.ul`
	display: flex;
	flex-direction: column;
	max-height: 45rem;
	overflow-y: scroll;
	${({ theme }) => theme.scrollbars.grey};

	& > li {
		list-style: none;

		& > a {
			display: flex;
			justify-content: space-between;
			border-bottom: 0.1rem solid ${({ theme }) => theme.colors.grey};
			padding: 2rem 1rem;
			${({ theme }) => theme.paragraphs.paragraph1}
			color: ${({ theme }) => theme.colors.black};
			text-decoration: none;

			& > img {
				margin: 0 1rem;
			}

			&:visited {
				color: ${({ theme }) => theme.colors.black};
			}
		}
	}

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.servicesSingleSecond}) {
		margin: 0 1.5rem;
	}
`
