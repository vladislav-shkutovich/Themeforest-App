import styled from 'styled-components'

export const SearchBarStyled = styled.form`
	display: flex;
	position: relative;
	width: max-content;
	max-width: 44.5rem;
	height: 5.4rem;

	& > input {
		width: 44.5rem;
		padding-right: 12.5rem;
		border-radius: 0.6rem;
		border: 0.1rem solid ${({ theme }) => theme.colors.grey};
		${({ theme }) => theme.paragraphs.paragraph3}
		color: ${({ theme }) => theme.colors.grey};
		padding: 1.5rem 2.5rem;
	}

	& > button {
		align-self: center;
		justify-self: center;
		right: 0;

		position: absolute;
		width: 12.5rem;
		height: 5.4rem;
		margin: 0;
	}
`
