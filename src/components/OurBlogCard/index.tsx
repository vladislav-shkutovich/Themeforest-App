import arrowRight from '@assets/icons/arrow_right.svg'
import { Link } from 'react-router-dom'
import { BLOG_ROUTE } from '@constants/router'
import { IOurBlogCard } from '@interfaces/index'
import { OurBlogCardStyled } from './styled'

export const OurBlogCard: React.FC<IOurBlogCard> = ({ image, date, title, text, key }) => {
	return (
		<OurBlogCardStyled key={key}>
			<img src={image} alt={key} />
			<h6>{date}</h6>
			<h4>{title}</h4>
			<p>{text}</p>
			<button type="button">
				<Link to={BLOG_ROUTE}>
					Read more <img src={arrowRight} alt="arrow" />
				</Link>
			</button>
		</OurBlogCardStyled>
	)
}
