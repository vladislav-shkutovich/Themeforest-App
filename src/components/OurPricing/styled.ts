import styled from 'styled-components'

export const OurPricingStyled = styled.div`
	display: flex;
	flex-direction: column;
	margin: 12rem 0;
	gap: 5rem;

	& > h2 {
		display: flex;
		${({ theme }) => theme.headlines.headline2}
		width: minmax(min-content, 25rem);
	}

	& > div {
		display: flex;
		justify-content: center;
		gap: 3rem;
	}
`
