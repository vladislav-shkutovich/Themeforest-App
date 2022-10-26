import styled from 'styled-components'

export const HeadingEnsome = styled.p`
	${({ theme }) => theme.headlines.headline1}
	display: -ms-inline-grid;
	grid-row: text1-start / text1-end;
	grid-column: start / middle;

	justify-self: end;
	margin-top: 7rem;
	width: minmax(min-content, 54rem);
	max-width: 54rem;

	& > span {
		color: ${({ theme }) => theme.colors.primary};
	}

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.homeThird}) {
		${({ theme }) => theme.headlines.headline3}
	}

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.homeFourth}) {
		grid-row: text1-start / additional-first;
		grid-column: start / end;
		text-align: center;
	}
`

export const ParagraphEnsome = styled.p`
	${({ theme }) => theme.paragraphs.paragraph2}
	color: ${({ theme }) => theme.colors.grey};
	grid-row: text1-start / text1-end;
	grid-column: middle / end;

	justify-self: start;
	width: minmax(min-content, 35rem);
	max-width: 35rem;
	height: 100%;
	margin-top: 7rem;
	margin-left: 15%;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.homeThird}) {
		${({ theme }) => theme.paragraphs.paragraph3}
		margin-bottom: 8rem;
	}

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.homeFourth}) {
		grid-row: additional-first / text1-end;
		grid-column: start / end;
		justify-self: center;
		text-align: center;
		margin-left: 0;
	}

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.homeFifth}) {
		& > button {
			transform: scale(0.8);
		}
	}
`

export const ImageEnsome = styled.img`
	grid-row: image-start / image-end;
	grid-column: start / end;
	align-self: center;
	justify-self: center;

	background-size: cover;
	width: 100vw;
	max-width: 1920px;
	height: 100%;
	margin: 0 -15vw;
	overflow: hidden;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.homeFourth}) {
		display: none;
	}
`

export const HeadingNewest = styled.p`
	${({ theme }) => theme.headlines.headline1}
	display: -ms-inline-grid;
	grid-row: text2-start / text2-end;
	grid-column: start / middle;

	align-self: center;
	justify-self: end;
	width: minmax(min-content, 54rem);
	max-width: 54rem;

	& > span {
		color: ${({ theme }) => theme.colors.primary};
	}

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.homeThird}) {
		${({ theme }) => theme.headlines.headline3}
	}

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.homeFourth}) {
		text-align: center;
	}
`

export const ParagraphNewest = styled.p`
	display: flex;
	flex-direction: column;
	${({ theme }) => theme.paragraphs.paragraph1}
	color: ${({ theme }) => theme.colors.grey};
	grid-row: text2-start / text2-end;
	grid-column: middle / end;
	justify-self: start;
	width: minmax(min-content, 54rem);
	max-width: 54rem;
	margin-top: 10%;
	margin-left: 3rem;
	margin-bottom: 3rem;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.homeThird}) {
		${({ theme }) => theme.paragraphs.paragraph3}
	}

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.homeFourth}) {
		margin-left: 1rem;
	}

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.homeFifth}) {
		& > button {
			transform: scale(0.7);
			margin-left: -3rem;
		}
	}
`

export const HeadingSolutions = styled.p`
	${({ theme }) => theme.headlines.headline2}
	display: grid;
	grid-row: half-image-start / half-image-end;
	grid-column: middle / end;
	justify-self: start;
	align-self: center;
	width: minmax(min-content, 54rem);
	padding: 3rem 3rem 0 0;
	margin-left: 3rem;

	& > span {
		${({ theme }) => theme.paragraphs.paragraph1}
		color: ${({ theme }) => theme.colors.grey};
		margin-top: 3rem;
	}

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.homeThird}) {
		${({ theme }) => theme.headlines.headline3}
		grid-row: additional-start / additional-end;
		grid-column: start / end;
		justify-items: center;
		text-align: center;

		& > span {
			${({ theme }) => theme.paragraphs.paragraph3}
		}
	}
`

export const ImageSolutions = styled.img`
	grid-row: half-image-start / half-image-end;
	grid-column: start / middle;
	align-self: center;

	background-size: cover;
	width: 100%;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.homeThird}) {
		grid-row: half-image-start / half-image-end;
		grid-column: start / end;
	}
`

export const BackgroundWrapperSolutions = styled.div`
	grid-row: half-image-start;
	grid-column: start / end;
	margin: 0 -10vw;
	z-index: -1;
	background-color: ${({ theme }) => theme.colors.background};
`
