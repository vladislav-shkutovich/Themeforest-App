import { ButtonReadMore } from '@components/ButtonReadMore'
import { BLOG_BASE_ROUTE } from '@constants/router'
import { IBlogPost } from '@interfaces/index'
import { OurBlogCardStyled } from './styled'

export const OurBlogCard: React.FC<IBlogPost> = ({ image, date, title, previewText, id }) => {
	return (
		<OurBlogCardStyled>
			<img src={image} alt="Blog" />
			<h6>{date}</h6>
			<h4>{title}</h4>
			<p>{previewText}</p>
			<ButtonReadMore text="Read more" route={`${BLOG_BASE_ROUTE}/${id}`} />
		</OurBlogCardStyled>
	)
}
