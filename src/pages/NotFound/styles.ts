import styled from 'styled-components'

export const MessageStyled = styled.div`
	display: flex;
	align-self: center;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	margin: 12rem 0;

	& > h1 {
		${({ theme }) => theme.headlines.headline2}
		color: ${({ theme }) => theme.colors.error};
	}

	& > p {
		${({ theme }) => theme.paragraphs.paragraph1}
		color: ${({ theme }) => theme.colors.black};
	}
`
