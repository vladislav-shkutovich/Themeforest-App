import styled from 'styled-components'

export const SubscribeSectionStyled = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-width: 100vw;
	height: minmax(max-content, 30.6rem);
	background-color: ${({ theme }) => theme.colors.secondary};

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.subscribeFirst}) {
		flex-direction: column;
	}
`

export const TextContainerStyled = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10rem 2rem;
	text-align: center;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.subscribeFirst}) {
		margin: 5rem 2rem;
	}
`

export const HeadingStyled = styled.p`
	${({ theme }) => theme.headlines.headline2}
	color: ${({ theme }) => theme.colors.white};

	margin-bottom: 2.4rem;
	width: minmax(min-content, 51rem);
	max-width: 51rem;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.subscribeThird}) {
		${({ theme }) => theme.headlines.headline3}
	}
`

export const ParagraphStyled = styled.p`
	${({ theme }) => theme.paragraphs.paragraph1}
	color: ${({ theme }) => theme.colors.white};
	width: minmax(min-content, 51rem);
	max-width: 51rem;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.subscribeThird}) {
		${({ theme }) => theme.paragraphs.paragraph2}
	}
`

export const InputContainerStyled = styled.form`
	display: flex;
	max-width: 44.5rem;
	height: 5.4rem;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.subscribeFirst}) {
		margin-bottom: 10rem;
	}

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.subscribeSecond}) {
		transform: scale(0.8);
		margin-bottom: 5rem;
	}

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.subscribeThird}) {
		transform: scale(0.6);
	}
`

export const InputStyled = styled.input`
	display: flex;
	align-items: center;
	outline: none;

	background-color: ${({ theme }) => theme.colors.helperBlue3};
	${({ theme }) => theme.paragraphs.paragraph3}

	border-radius: 0.6rem;
	border: none;
	width: 44.5rem;
	margin-right: -12.5rem;
	padding: 1.5rem 2.5rem;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.subscribeThird}) {
		${({ theme }) => theme.headlines.headline4}
	}
`

export const ButtonStyled = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	background-color: ${({ theme }) => theme.colors.white};
	${({ theme }) => theme.headlines.headline6}

	border-radius: 0.6rem;
	border: none;
	width: 12.5rem;
	padding: 1.5rem 2rem;
	cursor: pointer;

	:hover {
		background-color: ${({ theme }) => theme.colors.background};
	}

	:active {
		background-color: ${({ theme }) => theme.colors.white};
	}

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.subscribeThird}) {
		${({ theme }) => theme.headlines.headline4}
	}
`
