import styled from 'styled-components'

export const ContentCardStyled = styled.div<{ isOpen?: boolean }>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	row-gap: 1.5rem;
	width: 111rem;
	max-width: 111rem;
	padding: 3.5rem;
	border: 0.1rem solid ${({ theme }) => theme.colors.grey};
	border-radius: 0.6rem;
	cursor: ${({ isOpen }) => (isOpen ? 'default' : 'pointer')};

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.layoutFirst}) {
		padding: 2rem;
	}

	& > div {
		display: flex;
		justify-content: space-between;

		& > h4 {
			${({ theme }) => theme.headlines.headline4}
			color: ${({ theme, isOpen }) => theme.colors[isOpen ? 'primary' : 'black']};
			cursor: pointer;

			@media only screen and (max-width: ${({ theme }) => theme.breakpoints.layoutFirst}) {
				${({ theme }) => theme.headlines.headline6}
			}
		}

		& > img {
			margin-left: auto;
			cursor: pointer;
		}
	}

	& > p {
		display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
		${({ theme }) => theme.paragraphs.paragraph1}
		color: ${({ theme }) => theme.colors.grey};
		width: minmax(min-content, 95%);
		max-width: 95%;

		@media only screen and (max-width: ${({ theme }) => theme.breakpoints.layoutFirst}) {
			${({ theme }) => theme.paragraphs.paragraph3}
		}
	}
`
