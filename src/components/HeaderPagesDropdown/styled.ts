import styled from 'styled-components'

export const HeaderPagesDropdownStyled = styled.select`
	font-size: ${({ theme }) => theme.fontSizes.medium};
	color: ${({ theme }) => theme.colors.grey};
	border: none;
	background: none;
	cursor: pointer;
	text-align: center;
`

export const OptionStyled = styled.option`
	border: none;
	background: none;
`
