import { ButtonReadMore } from '@components/ButtonReadMore'
import { BLOG_BASE_ROUTE } from '@constants/router'
import { IOurBlogCard } from '@interfaces/index'
import { OurBlogCardStyled } from './styled'

export const OurBlogCard: React.FC<IOurBlogCard> = ({ image, date, title, text, id }) => {
	return (
		<OurBlogCardStyled>
			<img src={image} alt="Blog" />
			<h6>{date}</h6>
			<h4>{title}</h4>
			<p>{text}</p>
			<ButtonReadMore text="Read more" route={`${BLOG_BASE_ROUTE}/${id}`} />
		</OurBlogCardStyled>
	)
}
