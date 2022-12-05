import {
	selectRelatedPosts,
	selectRelatedPostsCount,
	selectRelatedPostsAreOver,
} from '@store/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { showMorePosts } from '@store/slices/blogSlice'
import { Link } from 'react-router-dom'
import { ButtonDefault } from '@components/ButtonDefault'
import { RelatedPostsStyled } from './styled'

export const BlogRelatedPosts: React.FC = () => {
	const dispatch = useDispatch()
	const relatedPosts = useSelector(selectRelatedPosts)
	const relatedPostsCount = useSelector(selectRelatedPostsCount)
	const relatedPostsAreOver = useSelector(selectRelatedPostsAreOver)

	const handleShowMore = () => {
		dispatch(
			showMorePosts({
				count: 3,
				posts: 'relatedPosts',
				postsCount: 'relatedPostsCount',
				countAreOver: 'relatedPostsAreOver',
			}),
		)
	}

	return (
		<RelatedPostsStyled>
			<h3>Related posts</h3>
			<ul>
				{relatedPosts.slice(0, relatedPostsCount).map((item) => (
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
			{!relatedPostsAreOver && <ButtonDefault text="More articles..." callback={handleShowMore} />}
		</RelatedPostsStyled>
	)
}
