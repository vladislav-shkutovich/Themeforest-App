import styled from 'styled-components'

export const CategoriesListStyled = styled.ul`
	display: flex;
	flex-direction: column;

	& > li {
		display: flex;
		justify-content: space-between;
		border-bottom: 0.1rem solid ${({ theme }) => theme.colors.grey};
		padding: 2rem 0;
		${({ theme }) => theme.paragraphs.paragraph1}
	}
`
