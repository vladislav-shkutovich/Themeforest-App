import { useState, ChangeEventHandler } from 'react'
import { CategoriesList } from '@components/CategoriesList'
import { SearchBar } from '@components/SearchBar'
import { BlogSingleItem } from '@components/BlogSingleItem'
import { IBlogPost } from '@interfaces/index'
import { ServicesSingleContentStyled, NavigationStyled } from './styled'

export const BlogSingleContent: React.FC<{ posts: IBlogPost[]; currentPost: IBlogPost }> = ({
	posts,
	currentPost,
}) => {
	const [filteredList, setFilteredList] = useState(posts)

	const handleSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
		e.preventDefault()
		return setFilteredList(
			posts.filter((item) => item.title.toLowerCase().includes(e.target.value.toLowerCase())),
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
