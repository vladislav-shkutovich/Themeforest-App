import { IBlogPost } from './propsInterfaces'

export interface IAppSliceState {
	currentState: string
	isLoggedIn?: boolean
}

export interface IBlogSliceState {
	currentPost: IBlogPost
	allPosts: IBlogPost[]
	allTags: string[]
	currentTag: string
	searchedPosts: IBlogPost[]
	popularPosts: IBlogPost[]
	relatedPosts: IBlogPost[]
	popularPostsCount: number
	postsAreOver: boolean
}
