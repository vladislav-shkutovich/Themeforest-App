import styled from 'styled-components'

export const TestimonialsCardStyled = styled.div`
	display: flex;
	flex-direction: column;
	width: minmax(min-content, 35rem);
	max-width: 35rem;
	height: minmax(min-content, 37rem);
	max-height: 37rem;
	padding: 3.5rem;
	gap: 2.5rem;
	background-color: ${({ theme }) => theme.colors.white};
	${({ theme }) => theme.shadows.shadowCard3}

	& > div {
		display: flex;
		column-gap: 2.5rem;
		align-items: center;

		& > img {
			width: 8rem;
			height: 8rem;
		}

		& > div {
			display: flex;
			flex-direction: column;

			& > h5 {
				${({ theme }) => theme.headlines.headline6}
				margin-bottom: 0.4rem;
				width: minmax(min-content, 8rem);
			}

			& > h6 {
				${({ theme }) => theme.headlines.headline7}
				color: ${({ theme }) => theme.colors.grey};
				width: minmax(min-content, 13rem);
			}
		}
	}

	& > p {
		${({ theme }) => theme.paragraphs.paragraph2}
		color: ${({ theme }) => theme.colors.grey};
		width: minmax(min-content, 20rem);
	}
`
