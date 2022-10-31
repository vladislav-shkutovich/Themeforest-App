import styled from 'styled-components'

export const DummyContentStyled = styled.div`
	display: flex;
	flex-direction: column;
	width: max-content;
	max-width: 63.5rem;
	gap: 3rem;
	margin: 12rem 0;

	& > h3 {
		${({ theme }) => theme.headlines.headline3}
		margin: 0 2rem;
	}

	& > p {
		${({ theme }) => theme.paragraphs.paragraph2}
		color: ${({ theme }) => theme.colors.grey};
		margin: 0 1rem;
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
		}

		& > ul {
			& > li {
				display: flex;
				margin: 0 2rem 1.5rem 2rem;
				margin-bottom: 1.5rem;
				gap: 1rem;
				list-style: none;
				max-width: 100%;
			}
		}

		@media only screen and (max-width: ${({ theme }) => theme.breakpoints.servicesSingleSecond}) {
			flex-direction: column;
			align-items: flex-start;

			& > img {
				width: 100%;
			}
		}
	}

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.servicesSingleSecond}) {
		margin: 6rem 0;
	}
`
