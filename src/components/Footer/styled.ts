import styled from 'styled-components'

export const FooterContainerStyled = styled.div`
	width: 100vw;
	height: 53rem;
	background-color: ${({ theme }) => theme.colors.secondary};
	display: flex;
	flex-direction: column;

	& > * {
		display: flex;
	}
`

export const FooterTopPartStyled = styled.div`
	justify-content: center;
	column-gap: 5vw;

	& > * {
		display: flex;
		margin: 5rem;
	}
`

export const InfoContainerStyled = styled.div`
	flex-direction: column;
	max-width: 28.5rem;

	& > * {
		display: flex;
	}
`

export const LogoStyled = styled.img`
	width: 14.1rem;
	height: 4.6rem;
	color: ${({ theme }) => theme.colors.white};
	margin-bottom: 2rem;
	cursor: pointer;
`

export const IconContainerStyled = styled.div`
	margin-top: 2rem;
	column-gap: 1.6rem;
`

export const IconStyled = styled.img`
	width: 2.4rem;
	height: 2.4rem;
	cursor: pointer;
`

export const LinksContainerStyled = styled.div`
	flex-direction: column;
`

export const ContactsContainerStyled = styled.div`
	flex-direction: column;
	max-width: 23.3rem;
`

export const HeadingStyled = styled.div`
	${({ theme }) => theme.headlines.headline6}
	color: ${({ theme }) => theme.colors.white};
	margin-bottom: 3rem;
`

export const ParagraphStyled = styled.div`
	${({ theme }) => theme.paragraphs.paragraph3}
	color: ${({ theme }) => theme.colors.grey};
	margin-bottom: 1.2rem;

	& > * {
		${({ theme }) => theme.paragraphs.paragraph3}
		color: ${({ theme }) => theme.colors.grey};
		text-decoration: none;
	}
`

export const LineSeparatorStyled = styled.div`
	width: 80vw;
	height: 0px;

	align-self: center;

	border: 0.1rem solid ${({ theme }) => theme.colors.helperBlue2};
	transform: rotate(180deg);
`

export const RightsContainerStyled = styled.div`
	align-items: center;
	justify-content: center;
	margin-top: 3rem;

	& > * {
		display: flex;
		${({ theme }) => theme.paragraphs.paragraph3}
		color: ${({ theme }) => theme.colors.helperBlue2};
	}
`

export const RightsTextStyled = styled.div`
	margin-left: 10vw;
	margin-right: auto;
`

export const PrivacyTextStyled = styled.div`
	margin-left: 3rem;
	margin-right: 10vw;
`
