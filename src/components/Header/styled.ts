import styled from 'styled-components'

export const HeaderStyled = styled.div`
	min-width: 100vw;
	height: 10vh;
	max-height: 12.6rem;
	background-color: ${({ theme }) => theme.colors.background};
	display: flex;
	align-content: center;
	justify-content: space-between;

	& > * {
		${({ theme }) => theme.headlines.headline7}
		cursor: pointer;
	}

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.headerSecond}) {
		justify-content: center;
	}

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.headerThird}) {
		justify-content: center;
		height: 20vh;
	}

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.homeFifth}) {
		& > * {
			font-size: ${({ theme }) => theme.fontSizes.small};
		}
	}
`

export const LogoStyled = styled.img`
	width: 14.1rem;
	height: 4.6rem;
	display: flex;
	justify-self: center;
	align-self: center;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.headerSecond}) {
		transform: scale(0.6);
	}
`

export const LinksContainerStyled = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-self: center;
	justify-self: center;
`

export const LinkStyled = styled.div`
	& > * {
		color: ${({ theme }) => theme.colors.grey};
		text-decoration: none;
		margin: 0 2rem;
	}
`
