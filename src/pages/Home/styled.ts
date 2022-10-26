import styled from 'styled-components'

export const SetcionIntroduction = styled.section`
	height: max-content;
	display: grid;
	grid-template-rows:
		[section-start text1-start] 28rem [text1-end image-start] max-content
		[image-end text2-start] max-content [text2-end half-image-start] max-content [half-image-end section-end];
	grid-template-columns: [start] 50% [middle] 50% [end];

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.homeThird}) {
		grid-template-rows:
			[section-start text1-start] max-content [text1-end image-start] max-content
			[image-end text2-start] max-content [text2-end half-image-start] max-content [half-image-end section-end] max-content [additional-end];
		grid-template-columns: [start] 50% [middle] 50% [end];
	}

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.homeFourth}) {
		grid-template-rows:
			[section-start text1-start] max-content [additional-first] max-content [text1-end image-start] max-content
			[image-end text2-start] max-content [text2-end half-image-start] max-content [half-image-end section-end] max-content [additional-end];
		grid-template-columns: [start] 50% [middle] 50% [end];
	}
`

export const SectionBenefits = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	height: max-content;
	padding: 10rem 0;
	background-color: ${({ theme }) => theme.colors.background};

	& > div {
		display: flex;

		@media only screen and (max-width: ${({ theme }) => theme.breakpoints.homeSecond}) {
			flex-wrap: wrap;
			flex-direction: column;
			text-align: center;
			max-width: 100rem;
		}
	}
`

export const SectionSliders = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	column-gap: 12rem;
	height: minmax(min-content, max-content);
	padding: 12rem 0;
`
