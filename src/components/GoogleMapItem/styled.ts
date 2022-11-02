import styled from 'styled-components'

export const WrapperStyled = styled.div`
	& > * {
		display: flex;
		flex-direction: column;
		align-items: center;
		display: flex;
		height: 46rem;
		margin: 0 -10vw;

		& > h3 {
			${({ theme }) => theme.headlines.headline3}
			text-align: center;
			width: minmax(min-content, 25rem);
			max-width: 25rem;
		}

		@media only screen and (max-width: ${({ theme }) => theme.breakpoints.homeThird}) {
			${({ theme }) => theme.headlines.headline5}
		}
	}
`
