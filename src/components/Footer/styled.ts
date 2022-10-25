import styled from 'styled-components'

export const FooterContainerStyled = styled.div`
	min-width: 100vw;
	min-height: 53rem;
	background-color: ${({ theme }) => theme.colors.secondary};
	display: flex;
	flex-direction: column;
`

export const FooterTopPartStyled = styled.div`
	display: flex;
	justify-content: space-between;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.footerFirst}) {
		flex-direction: column;
		align-items: center;
	}
`

export const InfoContainerStyled = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 28.5rem;

	& > * {
		display: flex;
	}

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.footerFirst}) {
		margin-bottom: 5rem;

		& > * {
			align-self: center;
			text-align: center;
		}
	}
`

export const LogoStyled = styled.img`
	width: 14.1rem;
	height: 4.6rem;
	color: ${({ theme }) => theme.colors.white};
	margin-bottom: 2rem;
	cursor: pointer;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.footerFirst}) {
		align-self: center;
	}
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
	display: flex;
	flex-direction: column;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.footerFirst}) {
		margin-bottom: 5rem;
		align-items: center;
	}
`

export const ContactsContainerStyled = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 23.3rem;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.footerFirst}) {
		& > * {
			align-self: center;
			text-align: center;
		}
	}
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

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.footerFirst}) {
		width: 80%;
	}
`

export const RightsContainerStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	align-self: center;
	margin-top: 3rem;
	width: 100%;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.footerFirst}) {
		flex-direction: column;
		gap: 2rem;
		margin-bottom: 5rem;
	}
`

export const RightsTextStyled = styled.div`
	display: flex;
	margin-right: auto;

	${({ theme }) => theme.paragraphs.paragraph3}
	color: ${({ theme }) => theme.colors.helperBlue2};

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.footerFirst}) {
		margin-right: 0;
	}
`

export const PrivacyTextStyled = styled.div`
	display: flex;
	margin-left: 9.5rem;

	${({ theme }) => theme.paragraphs.paragraph3}
	color: ${({ theme }) => theme.colors.helperBlue2};

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.footerFirst}) {
		margin-left: 0;
	}
`
