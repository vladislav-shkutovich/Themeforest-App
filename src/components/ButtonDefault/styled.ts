import styled from 'styled-components'

export const ButtonDefaultStyled = styled.button`
	display: flex;
	align-content: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.white};
	${({ theme }) => theme.shadows.shadowCard2}
	width: 18.5rem;
	height: 5.4rem;
	border-radius: 0.6rem;
	border: none;
	padding: 15px 0;
	margin: 3rem 0;
	cursor: pointer;

	:hover {
		background-color: ${({ theme }) => theme.colors.hover};
	}

	:active {
		background-color: ${({ theme }) => theme.colors.primary};
	}
`

export const TextStyled = styled.p`
	${({ theme }) => theme.headlines.headline6}
	color: ${({ theme }) => theme.colors.white};
`
