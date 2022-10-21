import styled from 'styled-components'

export const HelpSectionStyled = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-width: 100vw;
	height: 43rem;
	background-color: ${({ theme }) => theme.colors.background};

	& > h2 {
		${({ theme }) => theme.headlines.headline2};
		margin-bottom: 3rem;
	}

	& > p {
		${({ theme }) => theme.paragraphs.paragraph1};
		color: ${({ theme }) => theme.colors.grey};
		max-width: 54rem;
		text-align: center;
	}
`
