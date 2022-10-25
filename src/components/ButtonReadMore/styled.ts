import styled from 'styled-components'

export const ButtonReadMoreStyled = styled.button`
	display: flex;
	background: none;
	border: none;

	& > a {
		${({ theme }) => theme.headlines.headline7}
		color: ${({ theme }) => theme.colors.primary};
		text-decoration: none;

		:hover {
			color: ${({ theme }) => theme.colors.hover};
			transform: scale(1.01);
		}

		:active {
			color: ${({ theme }) => theme.colors.primary};
			transform: scale(0.99);
		}
	}
`
