import { RootState } from 'types'

export const selectRelatedPosts = ({ blogState }: RootState) => blogState.relatedPosts

export const selectPostsAreOver = ({ blogState }: RootState) => blogState.postsAreOver

export const selectSearchedPosts = ({ blogState }: RootState) => blogState.searchedPosts
