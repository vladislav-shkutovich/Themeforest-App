import styled from 'styled-components'

export const CategoriesListStyled = styled.ul`
	display: flex;
	flex-direction: column;

	& > li {
		list-style: none;

		& > a {
			display: flex;
			justify-content: space-between;
			border-bottom: 0.1rem solid ${({ theme }) => theme.colors.grey};
			padding: 2rem 0;
			${({ theme }) => theme.paragraphs.paragraph1}
			color: ${({ theme }) => theme.colors.black};
			text-decoration: none;

			&:visited {
				color: ${({ theme }) => theme.colors.black};
			}
		}
	}

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.servicesSingleSecond}) {
		margin: 0 1.5rem;
	}
`
