import { useEffect, ChangeEventHandler } from 'react'
import { CategoriesList } from '@components/CategoriesList'
import { SearchBar } from '@components/SearchBar'
import { BlogSingleItem } from '@components/BlogSingleItem'
import { BlogPopularPosts } from '@components/BlogPopularPosts'
import { BlogRelatedPosts } from '@components/BlogRelatedPosts'
import { BlogTags } from '@components/BlogTags'
import { useDispatch, useSelector } from 'react-redux'
import { selectSearchedPosts } from '@store/selectors'
import { searchPosts, updatePosts } from '@store/slices/blogSlice'
import { BlogSingleContentStyled, NavigationStyled, ContentStyled } from './styled'

export const BlogSingleContent: React.FC = () => {
	const searchedPosts = useSelector(selectSearchedPosts)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(updatePosts())
	}, [dispatch])

	const handleSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
		e.preventDefault()
		dispatch(searchPosts(e.target.value.toLowerCase()))
	}

	return (
		<BlogSingleContentStyled>
			<ContentStyled>
				<BlogSingleItem />
				<BlogRelatedPosts />
			</ContentStyled>

			<NavigationStyled>
				<SearchBar callback={handleSearch} data={searchedPosts[0]} />

				<h4>All posts</h4>
				<CategoriesList list={searchedPosts} />

				<BlogPopularPosts />

				<h4>Tags</h4>
				<BlogTags />
			</NavigationStyled>
		</BlogSingleContentStyled>
	)
}
