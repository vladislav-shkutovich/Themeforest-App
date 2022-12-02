import { BLOG_PAGE_POSTS } from '@constants/blogPagePosts'
import { BLOG_PAGE_TAGS } from '@constants/blogPageTags'
import { IBlogPost, IBlogSliceState } from '@interfaces/index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: IBlogSliceState = {
	currentPost: BLOG_PAGE_POSTS[0],
	allPosts: BLOG_PAGE_POSTS,
	allTags: BLOG_PAGE_TAGS,
	currentTag: 'All topics',
	searchedPosts: BLOG_PAGE_POSTS,
	popularPosts: [],
	relatedPosts: [],
	popularPostsCount: 3,
	postsAreOver: false,
}

const blogSlice = createSlice({
	name: 'blog',
	initialState,
	reducers: {
		setCurrentPost(state, action: PayloadAction<IBlogPost>) {
			state.currentPost = action.payload
		},
		setRelatedPosts(state) {
			state.relatedPosts = state.allPosts
				.filter(
					(item) =>
						item.tags.some((tag) => state.currentPost.tags.includes(tag)) &&
						item.id !== state.currentPost.id,
				)
				.slice(0, 3)
		},
		setPopularPosts(state) {
			state.popularPosts = state.allPosts.sort((prev, next) => next.viewsCount - prev.viewsCount)
		},
		showMorePosts(state, action: PayloadAction<number>) {
			const nextCount = state.popularPostsCount + action.payload
			if (nextCount < state.popularPosts.length) {
				state.popularPostsCount += action.payload
			} else {
				state.popularPostsCount += action.payload
				state.postsAreOver = true
			}
		},
		searchPosts(state, action: PayloadAction<string>) {
			state.searchedPosts = state.allPosts.filter((item) =>
				item.title.toLowerCase().includes(action.payload),
			)
		},
	},
})

export const { setCurrentPost, setRelatedPosts, setPopularPosts, showMorePosts, searchPosts } =
	blogSlice.actions
export default blogSlice.reducer
