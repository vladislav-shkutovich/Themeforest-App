import styled from 'styled-components'

export const PageLayout = styled.div``

export const Card = styled.div`
	& > * {
		width: 100vw;
		padding: 0 10vw;
	}

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.layoutFirst}) {
		& > * {
			padding: 0 2vw;
		}
	}
`
