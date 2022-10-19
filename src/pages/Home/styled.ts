import styled from 'styled-components'

export const SetcionIntroduction = styled.section`
	height: max-content;
	display: grid;
	grid-template-rows:
		[section-start text1-start] 28rem [text1-end image-start] max-content
		[image-end text2-start] max-content [text2-end half-image-start] max-content [half-image-end section-end];
	grid-template-columns: [start] 50% [middle] 50% [end];
`

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
	z-index: -1;
	background-color: ${({ theme }) => theme.colors.background};
`

export const SetcionServices = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-items: center;

	height: max-content;
	margin: 8rem 0;

	& > div {
		display: flex;
		flex-direction: row;
	}
`

export const HeadingServices = styled.p`
	${({ theme }) => theme.headlines.headline2}
	margin-bottom: 5rem;
	width: minmax(min-content, 92rem);
	max-width: 92rem;
`

export const ParagraphServices = styled.p`
	${({ theme }) => theme.paragraphs.paragraph1}
	color: ${({ theme }) => theme.colors.grey};
	margin: 0 0 5rem 5rem;
	width: minmax(min-content, 54rem);
	max-width: 54rem;
`

export const AchivementsServices = styled.p`
	display: flex;
	flex-direction: column;
	align-items: center;
	${({ theme }) => theme.paragraphs.paragraph2}
	color: ${({ theme }) => theme.colors.grey};
	margin: 3rem;
	max-width: 16rem;
	max-height: 10rem;

	& > span {
		font-weight: 800;
		color: ${({ theme }) => theme.colors.primary};
		font-size: ${({ theme }) => theme.fontSizes.achivements};
		padding: 1rem;
	}
`

export const LogosContainer = styled.div`
	display: flex;
	max-width: min-content;
`

export const Logo = styled.img`
	width: 18.5rem;
	height: 13.2rem;
`

export const SectionBenefits = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	height: max-content;
	padding: 12rem 0;
	background-color: ${({ theme }) => theme.colors.background};

	& > div {
		display: flex;
	}
`

export const BenefitsContainer = styled.div`
	display: flex;
	flex-direction: column;
`

export const HeadingBenefits = styled.p`
	${({ theme }) => theme.headlines.headline2}
	margin-bottom: 3rem;
	width: minmax(min-content, 54rem);
	max-width: 54rem;
`

export const ParagraphBenefits = styled.p`
	${({ theme }) => theme.paragraphs.paragraph1}
	color: ${({ theme }) => theme.colors.grey};
	width: minmax(min-content, 54rem);
	max-width: 54rem;
`

export const FirstColumnCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const SecondColumnCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 5rem;
`

export const SetcionSliders = styled.section`
	height: max-content;
	border-top: 0.3rem solid blue;
`

export const SetcionHelp = styled.section`
	height: max-content;
	border-top: 0.3rem solid lightcoral;
`
