import styled from 'styled-components'

export const ServicesSingleStyled = styled.div`
	display: flex;
	/* justify-content: center; */
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 3rem;
`

export const DummyContentStyled = styled.div`
	display: flex;
	flex-direction: column;
	width: max-content;
	max-width: 63.5rem;
	gap: 3rem;
	margin: 6rem 0;

	& > h3 {
		${({ theme }) => theme.headlines.headline3}
	}

	& > p {
		${({ theme }) => theme.paragraphs.paragraph2}
		color: ${({ theme }) => theme.colors.grey};
	}

	& > img {
		width: 100%;
		border-radius: 0.6rem;
	}

	& > div {
		display: flex;
		align-items: center;
		gap: 3rem;

		& > img {
			width: 60%;
			border-radius: 0.6rem;
			// todo медиа запрос на ширину 100% + flex-wrap для участка выше
		}

		& > ul {
			& > li {
				display: flex;
				margin-bottom: 1.5rem;
				gap: 1rem;
				list-style: none;
				max-width: 100%;
			}
		}
	}
`

export const NavigationStyled = styled.div`
	display: flex;
	flex-direction: column;
	width: max-content;
	max-width: 44.5rem;
	gap: 5rem;
	margin: 6rem 0;

	& > h4 {
		${({ theme }) => theme.headlines.headline4}
	}
`
