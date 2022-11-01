import iconArrowRight from '@assets/icons/arrow_right.svg'
import { IBlogPost } from '@interfaces/index'
import { Link } from 'react-router-dom'
import { PopularPostsStyled } from './styled'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const BlogPopularPosts: React.FC<{ list: IBlogPost[] }> = ({ list }) => {
	return (
		<PopularPostsStyled>
			<h4>Popular posts</h4>
			<ul>
				{list.map((item) => (
					<li key={item.id}>
						<img src={item.image} alt="Post" />
						<div>
							<p>{item.date}</p>
							<h6>{item.title}</h6>
							<Link to={`${item.baseRoute}/${item.id}`}>
								Read more <img src={iconArrowRight} alt="Arrow" />
							</Link>
						</div>
					</li>
				))}
			</ul>
		</PopularPostsStyled>
	)
}
