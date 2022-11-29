export const validationFields = {
	NAME: {
		min: 2,
		max: 20,
		req: 'Name is required!',
	},
	EMAIL: {
		intro: 2,
		noEmail: 20,
		req: 'Email is required!',
	},
	THEME: {
		min: 2,
		max: 50,
		req: 'Theme is required!',
	},
	MESSAGE: {
		min: 10,
		max: 300,
		req: 'Message is required!',
	},
}
