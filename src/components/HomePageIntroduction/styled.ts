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
`

export const ParagraphNewest = styled.p`
	${({ theme }) => theme.paragraphs.paragraph1}
	color: ${({ theme }) => theme.colors.grey};
	grid-row: text2-start / text2-end;
	grid-column: middle / end;
	justify-self: start;
	width: minmax(min-content, 54rem);
	max-width: 54rem;
	margin-top: 10%;
	margin-left: 3rem;
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
`

export const ImageSolutions = styled.img`
	grid-row: half-image-start / half-image-end;
	grid-column: start / middle;
	align-self: center;

	background-size: cover;
	width: 100%;
`

export const BackgroundWrapperSolutions = styled.div`
	grid-row: half-image-start;
	grid-column: start / end;
	margin: 0 -10vw;
	z-index: -1;
	background-color: ${({ theme }) => theme.colors.background};
`
