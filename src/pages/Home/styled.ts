import styled from 'styled-components'

export const SetcionIntroduction = styled.section`
	height: 207rem;
	border-top: 0.3rem solid orangered;

	display: grid;
	grid-template-rows: [section-start text1-start] 28rem [text1-end image-start] 59rem [image-end text2-start] 46rem [text2-end half-image-start] 74rem [half-image-end section-end];
	grid-template-columns: [start] 1fr [middle] 1fr [end];
`

export const HeadingFirst = styled.p`
	${({ theme }) => theme.headlines.headline1}
	display: -ms-inline-grid;
	grid-row: text1-start / text1-end;
	grid-column: start / middle;

	justify-self: start;
	margin-top: 7rem;
	width: 54rem;

	& > span {
		color: ${({ theme }) => theme.colors.primary};
	}
`

export const ParagraphFirst = styled.p`
	${({ theme }) => theme.paragraphs.paragraph2}
	color: ${({ theme }) => theme.colors.grey};
	grid-row: text1-start / text1-end;
	grid-column: middle / end;

	justify-self: end;
	width: 35rem;
	margin-top: 7rem;
`

export const ImageFirst = styled.img`
	grid-row: image-start / image-end;
	grid-column: start / end;

	width: 100vw;
	height: 100%;
	margin: 0 -15vw;
	overflow: hidden;
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
