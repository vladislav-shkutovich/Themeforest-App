import styled from 'styled-components'

export const ContentCardStyled = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: minmax(min-content, 47rem);
	max-width: 47rem;
	height: minmax(min-content, 37rem);

	& > img {
		width: 8.4rem;
		height: 7rem;
		margin-bottom: 2.5rem;
	}

	& > h4 {
		${({ theme }) => theme.headlines.headline4}
		width: minmax(min-content, 20rem);
		margin-bottom: 1.6rem;

		@media only screen and (max-width: ${({ theme }) => theme.breakpoints.layoutFirst}) {
			${({ theme }) => theme.headlines.headline5}
		}
	}

	& > p {
		${({ theme }) => theme.paragraphs.paragraph2}
		color: ${({ theme }) => theme.colors.grey};
		width: minmax(min-content, 47rem);
		margin-bottom: 2rem;

		@media only screen and (max-width: ${({ theme }) => theme.breakpoints.layoutFirst}) {
			${({ theme }) => theme.paragraphs.paragraph3}
		}
	}

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.servicesFirst}) {
		align-items: center;

		& > * {
			text-align: center;
		}
	}
`
