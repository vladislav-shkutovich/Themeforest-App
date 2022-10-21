import { OUR_BLOG_CARDS } from '@constants/ourBlogCards'
import { ButtonsSliderDefault } from '@components/ButtonsSliderDefault'
import { OurBlogCard } from '@components/OurBlogCard'
import { OurBlogStyled, HeadingOurBlog, OurBlogCardsContainer } from './styled'

export const OurBlog: React.FC = () => {
	return (
		<OurBlogStyled>
			<HeadingOurBlog>
				<h2>Our Blog</h2>
				<ButtonsSliderDefault />
			</HeadingOurBlog>
			<OurBlogCardsContainer>
				{OUR_BLOG_CARDS.slice(0, 3).map((item) => (
					<OurBlogCard {...item} />
				))}
			</OurBlogCardsContainer>
		</OurBlogStyled>
	)
}
