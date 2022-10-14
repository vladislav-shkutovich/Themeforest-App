import styled from 'styled-components'

export const SubscribeSectionStyled = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	width: 100vw;
	height: 30.6rem;
	padding: 0 15vw;

	background-color: ${({ theme }) => theme.colors.secondary};
`

export const TextContainerStyled = styled.div`
	display: flex;
	flex-direction: column;

	width: 54rem;
`

export const HeadingStyled = styled.p`
	${({ theme }) => theme.headlines.headline2}
	color: ${({ theme }) => theme.colors.white};

	margin-bottom: 2.4rem;
`

export const ParagraphStyled = styled.p`
	${({ theme }) => theme.paragraphs.paragraph1}
	color: ${({ theme }) => theme.colors.white}
`

export const InputContainerStyled = styled.div`
	display: flex;

	width: 44.5rem;
	height: 5.4rem;
`

export const InputStyled = styled.input`
	display: flex;
	align-items: center;

	background-color: ${({ theme }) => theme.colors.helperBlue3};
	${({ theme }) => theme.paragraphs.paragraph3}

	border-radius: 0.6rem;
	border: none;
	width: 44.5rem;
	margin-right: -12.5rem;
	padding: 1.5rem 2.5rem;
`

export const ButtonStyled = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	background-color: ${({ theme }) => theme.colors.white};
	${({ theme }) => theme.headlines.headline6}

	border-radius: 0.6rem;
	border: none;
	width: 12.5rem;
	padding: 1.5rem 2rem;
`
