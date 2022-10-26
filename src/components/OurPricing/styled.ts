import styled from 'styled-components'

export const OurPricingStyled = styled.div`
	display: flex;
	flex-direction: column;
	margin: 12rem 0;
	gap: 5rem;

	& > h2 {
		display: flex;
		align-self: center;
		${({ theme }) => theme.headlines.headline2}
		width: minmax(min-content, 25rem);

		@media only screen and (max-width: ${({ theme }) => theme.breakpoints.homeThird}) {
			${({ theme }) => theme.headlines.headline3}
		}
	}

	& > div {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 3rem;
	}
`
