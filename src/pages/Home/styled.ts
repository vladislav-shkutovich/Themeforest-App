import styled from 'styled-components'

export const SetcionIntroduction = styled.section`
	height: 207rem;
	display: grid;
	grid-template-rows:
		[section-start text1-start] 28rem [text1-end image-start] minmax(10rem, 59rem)
		[image-end text2-start] 46rem [text2-end half-image-start] 74rem [half-image-end section-end];
	grid-template-columns: [start] 50% [middle] 50% [end];
`

export const HeadingEnsome = styled.p`
	${({ theme }) => theme.headlines.headline1}
	display: -ms-inline-grid;
	grid-row: text1-start / text1-end;
	grid-column: start / middle;

	justify-self: end;
	margin-top: 7rem;
	width: 54rem;

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
	width: 35rem;
	margin-top: 7rem;
	margin-left: 22rem;
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

	justify-self: end;
	margin-top: 10%;
	width: 54rem;

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
	width: 35rem;
	margin-top: 10%;
	margin-left: 3rem;
`

export const HeadingSolutions = styled.p`
	${({ theme }) => theme.headlines.headline2}
	display: -ms-inline-grid;
	grid-row: half-image-start / half-image-end;
	grid-column: middle / end;

	justify-self: start;
	margin-top: 16rem;
	width: 54rem;
	margin-left: 3rem;
`

export const ParagraphSolutions = styled.p`
	${({ theme }) => theme.paragraphs.paragraph1}
	color: ${({ theme }) => theme.colors.grey};
	grid-row: half-image-start / half-image-end;
	grid-column: middle / end;

	justify-self: start;
	width: 35rem;
	margin-top: 30rem;
	margin-left: 3rem;
`

export const ImageSolutions = styled.img`
	grid-row: half-image-start / half-image-end;
	grid-column: start / middle;

	background-size: cover;
	width: 100%;
	height: 100%;
`

export const BackgroundWrapperSolutions = styled.div`
	grid-row: half-image-start / half-image-end;
	grid-column: start / end;
	z-index: -1;
	background-color: ${({ theme }) => theme.colors.background};
`

export const SetcionServices = styled.section`
	height: 62rem;
	border-top: 0.3rem solid red;
`

export const SetcionBenefits = styled.section`
	height: 82rem;
	border-top: 0.3rem solid green;
`

export const SetcionSliders = styled.section`
	height: 221rem;
	border-top: 0.3rem solid blue;
`

export const SetcionHelp = styled.section`
	height: 42rem;
	border-top: 0.3rem solid lightcoral;
`
