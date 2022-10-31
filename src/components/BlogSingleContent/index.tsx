import { useState, ChangeEventHandler } from 'react'
import { BLOG_PAGE_POSTS } from '@constants/blogPagePosts'
import { CategoriesList } from '@components/CategoriesList'
import { SearchBar } from '@components/SearchBar'
import { BlogSingleItem } from '@components/BlogSingleItem'
import { IBlogPost } from '@interfaces/index'
import { ServicesSingleContentStyled, NavigationStyled } from './styled'

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
		<ServicesSingleContentStyled>
			<BlogSingleItem currentPost={currentPost} />

			<NavigationStyled>
				<SearchBar callback={handleSearch} data={filteredList[0]} />
				<h4>Services</h4>
				<CategoriesList list={filteredList} />
			</NavigationStyled>
		</ServicesSingleContentStyled>
	)
}
