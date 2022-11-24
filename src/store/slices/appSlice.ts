import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	currentState: 'Empty state',
}

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		logState(state, action) {
			state.currentState = action.payload
		},
	},
})

export default appSlice.reducer
export const { logState } = appSlice.actions
