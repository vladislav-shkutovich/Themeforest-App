import { useState, ChangeEventHandler } from 'react'
import { BLOG_PAGE_POSTS } from '@constants/blogPagePosts'
import { BLOG_PAGE_TAGS } from '@constants/blogPageTags'
import { CategoriesList } from '@components/CategoriesList'
import { SearchBar } from '@components/SearchBar'
import { BlogSingleItem } from '@components/BlogSingleItem'
import { BlogPopularPosts } from '@components/BlogPopularPosts'
import { BlogRelatedPosts } from '@components/BlogRelatedPosts'
import { ButtonWithTag } from '@components/ButtonWithTag'
import { IBlogPost } from '@interfaces/index'
import {
	BlogSingleContentStyled,
	NavigationStyled,
	ContentStyled,
	TagsContainerStyled,
} from './styled'

export const BlogSingleContent: React.FC<{ currentPost: IBlogPost }> = ({ currentPost }) => {
	const [filteredList, setFilteredList] = useState(BLOG_PAGE_POSTS)

	const handleSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
		e.preventDefault()
		return setFilteredList(
			BLOG_PAGE_POSTS.filter((item) =>
				item.title.toLowerCase().includes(e.target.value.toLowerCase()),
			),
		)
	}

	return (
		<BlogSingleContentStyled>
			<ContentStyled>
				<BlogSingleItem currentPost={currentPost} />
				{/* // todo добавить в логику */}
				<BlogRelatedPosts list={BLOG_PAGE_POSTS} />
			</ContentStyled>

			<NavigationStyled>
				<SearchBar callback={handleSearch} data={filteredList[0]} />
				{/* // todo убрать slice в логику */}
				<BlogPopularPosts list={BLOG_PAGE_POSTS.slice(0, 4)} />

				<h4>Services</h4>
				<CategoriesList list={filteredList} />

				<h4>Tags</h4>
				<TagsContainerStyled>
					{BLOG_PAGE_TAGS.map((item) => (
						<ButtonWithTag key={item} text={item} isSelected={false} />
					))}
				</TagsContainerStyled>
			</NavigationStyled>
		</BlogSingleContentStyled>
	)
}
