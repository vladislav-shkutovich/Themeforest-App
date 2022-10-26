import styled from 'styled-components'

export const OurPricingCardStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-content: center;
	min-width: 25.5rem;
	width: 25.5rem;
	border-radius: 0.6rem;
	${({ theme }) => theme.shadows.shadowCard3}
	padding: 3.5rem 2rem;

	& > h6 {
		${({ theme }) => theme.headlines.headline6}
		margin-bottom: 1.6rem;
		width: minmax(min-content, 22rem);
	}

	& > div {
		display: flex;
		justify-content: space-between;

		& > p {
			font-size: ${({ theme }) => theme.fontSizes.prices};
			font-weight: 800;
		}
	}
`

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-self: center;
	align-items: center;

	& > button {
		width: 120%;
	}

	& > ul {
		& > li {
			display: flex;
			align-items: center;
			gap: 1rem;
			list-style-type: none;
			margin: 1rem 0;
		}
	}
`
