import styled from 'styled-components'

export const ButtonWatchTheDemoStyled = styled.button`
	display: flex;
	justify-self: center;
	align-self: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.white};
	width: 16.8rem;
	height: 4.4rem;
	border-radius: 0.6rem;
	border: none;
	padding: 10px 14px;

	:hover {
		background-color: ${({ theme }) => theme.colors.hover};
	}

	:active {
		background-color: ${({ theme }) => theme.colors.primary};
	}

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.headerSecond}) {
		display: none;
	}
`

export const VectorStyled = styled.img`
	margin-right: 0.5rem;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.layoutFirst}) {
		margin-right: 1rem;
	}
`

export const TextStyled = styled.p`
	${({ theme }) => theme.headlines.headline7}

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.layoutFirst}) {
		${({ theme }) => theme.headlines.headline8}
	}
`
