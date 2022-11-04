import styled from 'styled-components'

export const TeamMemberCardStyled = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	row-gap: 4rem;
	column-gap: 3rem;
	margin: 12rem 0;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.layoutFirst}) {
		margin: 6rem 0;
	}

	& > img {
		height: 100%;
		max-width: 54rem;
		max-height: 72rem;
		border-radius: 0.6rem;
		align-self: center;

		@media only screen and (max-width: ${({ theme }) => theme.breakpoints.ourTeamFirst}) {
			max-width: 37.8rem;
			max-height: 50.4rem;
		}

		@media only screen and (max-width: ${({ theme }) => theme.breakpoints.ourTeamSingleThird}) {
			max-width: 30.24rem;
			max-height: 40.32rem;
		}
	}

	& > div {
		display: flex;
		flex-direction: column;
		row-gap: 2rem;
		width: minmax(min-content, 54rem);
		max-width: 54rem;

		@media only screen and (max-width: ${({ theme }) => theme.breakpoints.layoutFirst}) {
			align-items: center;
		}

		& > div {
			display: flex;
			flex-direction: column;
			row-gap: 1rem;

			@media only screen and (max-width: ${({ theme }) => theme.breakpoints.layoutFirst}) {
				align-items: center;
			}

			& > h6 {
				${({ theme }) => theme.headlines.headline6}
				color: ${({ theme }) => theme.colors.primary};

				@media only screen and (max-width: ${({ theme }) => theme.breakpoints.layoutFirst}) {
					text-align: center;
				}
			}

			& > p {
				${({ theme }) => theme.paragraphs.paragraph1}

				@media only screen and (max-width: ${({ theme }) => theme.breakpoints.ourTeamSingleFirst}) {
					${({ theme }) => theme.paragraphs.paragraph2}
					max-width: 38rem;
				}

				@media only screen and (max-width: ${({ theme }) => theme.breakpoints.ourTeamSingleSec}) {
					max-width: 30rem;
				}

				@media only screen and (max-width: ${({ theme }) => theme.breakpoints.layoutFirst}) {
					max-width: 38rem;
					text-align: center;
				}
			}

			& > div {
				display: flex;
				gap: 1rem;
			}

			& > a {
				width: max-content;
				padding: 1rem;
				margin: 0.5rem 0;
				border-radius: 0.6rem;
				${({ theme }) => theme.headlines.headline6}
				color: ${({ theme }) => theme.colors.white};
				background-color: ${({ theme }) => theme.colors.primary};
				text-decoration: none;
			}
		}
	}
`
