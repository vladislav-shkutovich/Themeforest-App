import { IBlogPost } from './propsInterfaces'

export interface IAppSliceState {
	currentState: string
	isLoggedIn?: boolean
}

export interface IBlogSliceState {
	allPosts: IBlogPost[]
	searchedPosts: IBlogPost[]
	popularPosts: IBlogPost[]
	relatedPosts: IBlogPost[]
	relatedPostsCount: number
	postsAreOver: boolean
}
