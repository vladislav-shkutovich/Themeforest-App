import styled from 'styled-components'

export const ServicesSingleContentStyled = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	column-gap: 5rem;
`

export const ContentStyled = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	max-width: 63.5rem;
	gap: 6rem;
	margin: 12rem 0;
`

export const NavigationStyled = styled.div`
	display: flex;
	flex-direction: column;
	width: max-content;
	max-width: 44.5rem;
	gap: 2rem;
	margin: 12rem 0;

	& > h4 {
		${({ theme }) => theme.headlines.headline4};
		margin: 0 2rem;
	}

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.servicesSingleFirst}) {
		margin: 0 0 12rem 0;
	}

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.servicesSingleSecond}) {
		margin: 6rem 0;
	}
`

export const TagsContainerStyled = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;

	& > button {
		cursor: pointer;
		font-size: ${({ theme }) => theme.fontSizes.medium};
		font-weight: 800;
		border-radius: 0.6rem;
		color: ${({ theme }) => theme.colors.primary};
		border: 0.1rem solid ${({ theme }) => theme.colors.background};
		background-color: ${({ theme }) => theme.colors.white};
		padding: 0.3rem 1.1rem;

		&:hover {
			background-color: ${({ theme }) => theme.colors.background};
		}

		&:active {
			color: ${({ theme }) => theme.colors.white};
			border: 0.1rem solid ${({ theme }) => theme.colors.primary};
			background-color: ${({ theme }) => theme.colors.primary};
		}
	}
`
