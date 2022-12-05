import iconArrowRight from '@assets/icons/arrow_right.svg'
import { ButtonDefault } from '@components/ButtonDefault'
import { selectPopularPosts, selectPopularPostsCount, selectPostsAreOver } from '@store/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { showMorePosts } from '@store/slices/blogSlice'
import { Link } from 'react-router-dom'
import { PopularPostsStyled } from './styled'

export const BlogPopularPosts: React.FC = () => {
	const dispatch = useDispatch()
	const popularPosts = useSelector(selectPopularPosts)
	const popularPostsCount = useSelector(selectPopularPostsCount)
	const postsAreOver = useSelector(selectPostsAreOver)

	const handleShowMore = () => {
		dispatch(showMorePosts(3))
	}

	return (
		<PopularPostsStyled>
			<h4>Popular posts</h4>
			<ul>
				{popularPosts.slice(0, popularPostsCount).map(({ id, image, date, title, baseRoute }) => (
					<li key={id}>
						<img src={image} alt="Post" />
						<div>
							<p>{date}</p>
							<h6>{title}</h6>
							<Link to={`${baseRoute}/${id}`}>
								Read more <img src={iconArrowRight} alt="Arrow" />
							</Link>
						</div>
					</li>
				))}
			</ul>
			{!postsAreOver && <ButtonDefault text="More articles..." callback={handleShowMore} />}
		</PopularPostsStyled>
	)
}
