import styled from 'styled-components'

export const ButtonsContainer = styled.div`
	display: flex;
	gap: 1rem;
`

export const ButtonSwitchStyled = styled.button<{ isActive?: boolean }>`
	display: flex;
	align-content: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.primary};
	border: 0.1rem solid ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.white};
	${({ theme }) => theme.shadows.shadowCard2}
	width: 4.1rem;
	height: 3.2rem;
	border-radius: 0.6rem;
	padding: 0.4rem 1rem;
	cursor: pointer;

	:hover {
		background-color: ${({ theme }) => theme.colors.hover};
	}

	${({ isActive, theme }) =>
		!isActive &&
		`
		background-color: ${theme.colors.white};
		color: ${theme.colors.primary};
		:hover {
			background: none;
		}
		`}
`
