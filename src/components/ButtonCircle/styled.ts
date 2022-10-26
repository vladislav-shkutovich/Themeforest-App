import styled from 'styled-components'

export const ButtonCircleStyled = styled.button`
	display: flex;
	align-content: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.white};
	${({ theme }) => theme.shadows.shadowCard2}
	width: 12rem;
	height: 12rem;
	border-radius: 50%;
	border: none;
	margin-top: 3rem;
	cursor: pointer;

	position: absolute;
	z-index: 2;
	outline: 1px solid ${({ theme }) => theme.colors.white};
	outline-offset: -0.8rem;

	& ::after {
		content: '';
		width: 12rem;
		height: 12rem;
		top: -1rem;
		left: -1rem;
		border-radius: 50%;
		border: 1rem solid ${({ theme }) => theme.colors.white};
		position: absolute;
		z-index: 1;
	}

	:hover {
		background-color: ${({ theme }) => theme.colors.hover};
	}

	:active {
		background-color: ${({ theme }) => theme.colors.primary};
	}

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.homeThird}) {
		margin-top: 2rem;
	}
`

export const TextStyled = styled.p`
	align-self: center;
	${({ theme }) => theme.headlines.headline7}
	color: ${({ theme }) => theme.colors.white};
`
