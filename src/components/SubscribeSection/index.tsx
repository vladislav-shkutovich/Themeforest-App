import { SubscribeForm } from '@forms/SubscribeForm'
import {
	SubscribeSectionStyled,
	TextContainerStyled,
	HeadingStyled,
	ParagraphStyled,
} from './styled'

export const SubscribeSection: React.FC = () => {
	return (
		<SubscribeSectionStyled>
			<TextContainerStyled>
				<HeadingStyled>Subscribe to our newsletter</HeadingStyled>
				<ParagraphStyled>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
					laudantium.
				</ParagraphStyled>
			</TextContainerStyled>
			<SubscribeForm />
		</SubscribeSectionStyled>
	)
}
