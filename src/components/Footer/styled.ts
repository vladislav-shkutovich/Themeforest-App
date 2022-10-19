import styled from 'styled-components'

export const FooterContainerStyled = styled.div`
	min-width: 100vw;
	height: 53rem;
	background-color: ${({ theme }) => theme.colors.secondary};
	display: flex;
	flex-direction: column;
`

export const FooterTopPartStyled = styled.div`
	display: flex;
	justify-content: space-between;
`

export const InfoContainerStyled = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 28.5rem;
	margin: 5rem 0;

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
	display: flex;
	width: 100%;
	height: 0px;
	margin-top: 3.8rem;

	align-self: center;

	border: 0.1rem solid ${({ theme }) => theme.colors.helperBlue2};
	transform: rotate(180deg);
`

export const RightsContainerStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	align-self: center;
	margin-top: 3rem;
	width: 100%;
`

export const RightsTextStyled = styled.div`
	display: flex;
	margin-right: auto;

	${({ theme }) => theme.paragraphs.paragraph3}
	color: ${({ theme }) => theme.colors.helperBlue2};
`

export const PrivacyTextStyled = styled.div`
	display: flex;
	margin-left: 9.5rem;

	${({ theme }) => theme.paragraphs.paragraph3}
	color: ${({ theme }) => theme.colors.helperBlue2};
`
