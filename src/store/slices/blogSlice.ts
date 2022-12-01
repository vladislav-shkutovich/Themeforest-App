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
	popularPosts: BLOG_PAGE_POSTS.sort((prev, next) => next.viewsCount - prev.viewsCount).slice(0, 4),
	relatedPosts: [],
	relatedPostsCount: 3,
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
		showMorePosts(state, action: PayloadAction<number>) {
			const nextCount = state.relatedPostsCount + action.payload
			if (nextCount < state.allPosts.length) {
				state.relatedPosts = state.allPosts.slice(0, nextCount)
				state.relatedPostsCount += action.payload
			} else {
				state.postsAreOver = true
				state.relatedPosts = state.allPosts
			}
		},
		searchPosts(state, action: PayloadAction<string>) {
			state.searchedPosts = state.allPosts.filter((item) =>
				item.title.toLowerCase().includes(action.payload),
			)
		},
	},
})

export const { setCurrentPost, setRelatedPosts, showMorePosts, searchPosts } = blogSlice.actions
export default blogSlice.reducer
