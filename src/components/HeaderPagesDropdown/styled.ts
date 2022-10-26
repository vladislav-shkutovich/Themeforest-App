import styled from 'styled-components'

export const HeaderPagesDropdownStyled = styled.select`
	font-size: ${({ theme }) => theme.fontSizes.medium};
	color: ${({ theme }) => theme.colors.grey};
	border: none;
	background: none;
	cursor: pointer;
	text-align: center;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.homeFifth}) {
		font-size: ${({ theme }) => theme.fontSizes.small};
	}
`

export const OptionStyled = styled.option`
	border: none;
	background: none;
`
