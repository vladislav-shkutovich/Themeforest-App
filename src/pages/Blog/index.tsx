import { MainLayout } from '@layouts/MainLayout'
import { useParams } from 'react-router-dom'
import { NotFoundPage } from '@pages/NotFound'
import { BlogSingleContent } from '@components/BlogSingleContent'
import { useSelector } from 'react-redux'
import { selectAllPosts } from '@store/selectors'
import { IntroductionStyled } from './styled'

export const BlogPage: React.FC = () => {
	const allPosts = useSelector(selectAllPosts)
	const { id: blogSingleId } = useParams()
	const blogSingleItem = allPosts.find((item) => item.id === blogSingleId)
	if (!blogSingleItem) return <NotFoundPage />
	const { title, category } = blogSingleItem

	return (
		<MainLayout>
			<IntroductionStyled>
				<h2>{title}</h2>
				<h6>{category}</h6>
			</IntroductionStyled>
			<BlogSingleContent currentPost={blogSingleItem} />
		</MainLayout>
	)
}
