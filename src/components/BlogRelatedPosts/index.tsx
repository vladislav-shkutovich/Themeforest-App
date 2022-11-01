import { ButtonDefault } from '@components/ButtonDefault'
import { IBlogPost } from '@interfaces/index'
import { Link } from 'react-router-dom'
import { RelatedPostsStyled } from './styled'

export const BlogRelatedPosts: React.FC<{ list: IBlogPost[] }> = ({ list }) => {
	return (
		<RelatedPostsStyled>
			<h3>Related posts</h3>
			<ul>
				{list.map((item) => (
					<Link to={`${item.baseRoute}/${item.id}`} key={item.id}>
						<img src={item.image} alt="Post" />
						<div>
							<h5>{item.date}</h5>
							<h6>{item.title}</h6>
							<p>{item.previewText}</p>
						</div>
					</Link>
				))}
			</ul>
			<ButtonDefault text="Show more..." />
		</RelatedPostsStyled>
	)
}
