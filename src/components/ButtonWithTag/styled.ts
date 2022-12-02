import styled from 'styled-components'

export const ButtonWithTagStyled = styled.div<{ isActive?: boolean }>`
	display: flex;
	align-items: center;
	justify-items: center;

	font-size: ${({ theme }) => theme.fontSizes.medium};
	font-weight: 800;
	border-radius: 0.6rem;
	color: ${({ theme }) => theme.colors.primary};
	border: 0.1rem solid ${({ theme }) => theme.colors.background};
	background-color: ${({ theme }) => theme.colors.white};
	padding: 0.3rem 1.1rem;
	cursor: pointer;

	&:hover {
		background-color: ${({ theme }) => theme.colors.background};
	}

	${({ isActive, theme }) =>
		isActive &&
		`
		color: ${theme.colors.white};
		font-weight: 600;
		background-color: ${theme.colors.primary};

		&:hover {
			background-color: ${theme.colors.helperBlue};
		}
		`}
`
