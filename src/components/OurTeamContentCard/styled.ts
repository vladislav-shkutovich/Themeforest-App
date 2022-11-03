import styled from 'styled-components'

export const ContentCardStyled = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: minmax(min-content, 54rem);
	max-width: 54rem;

	& > a {
		margin-bottom: 2rem;
		& > img {
			height: 100%;
			max-width: 54rem;
			max-height: 72rem;
			height: 100%;
			border-radius: 0.6rem;
		}
	}

	& > h5 {
		${({ theme }) => theme.headlines.headline5}
		width: minmax(min-content, 20rem);
		margin-bottom: 0.7rem;

		@media only screen and (max-width: ${({ theme }) => theme.breakpoints.layoutFirst}) {
			${({ theme }) => theme.headlines.headline6}
		}
	}

	& > p {
		${({ theme }) => theme.paragraphs.paragraph2}
		color: ${({ theme }) => theme.colors.grey};

		@media only screen and (max-width: ${({ theme }) => theme.breakpoints.layoutFirst}) {
			${({ theme }) => theme.paragraphs.paragraph3}
		}
	}

	/* @media only screen and (max-width: ${({ theme }) => theme.breakpoints.servicesFirst}) {
		align-items: center;

		& > * {
			text-align: center;
		}
	} */
`
