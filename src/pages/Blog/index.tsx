import { MainLayout } from '@layouts/MainLayout'
import { useParams } from 'react-router-dom'
import { NotFoundPage } from '@pages/NotFound'
import { BLOG_PAGE_POSTS } from '@constants/blogPagePosts'
import { BlogSingleContent } from '@components/BlogSingleContent'
import { IntroductionStyled } from './styled'

export const BlogPage: React.FC = () => {
	const { id: blogSingleId } = useParams()

	const blogSingleItem = BLOG_PAGE_POSTS.find((item) => item.id === blogSingleId)
	if (!blogSingleItem) return <NotFoundPage />
	const { title, category } = blogSingleItem

	return (
		<MainLayout>
			<IntroductionStyled>
				<h2>{title}</h2>
				<p>{category}</p>
			</IntroductionStyled>
			<BlogSingleContent posts={BLOG_PAGE_POSTS} currentPost={blogSingleItem} />
		</MainLayout>
	)
}
