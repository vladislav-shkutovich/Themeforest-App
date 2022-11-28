export {}

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			REACT_APP_GOOGLE_MAPS_API_KEY: string
			REACT_APP_EMAILJS_SERVICE_ID: string
			REACT_APP_EMAILJS_TEMPLATE_TO_ID: string
			REACT_APP_EMAILJS_TEMPLATE_FROM_ID: string
			REACT_APP_EMAILJS_PUBLIC_KEY: string
		}
	}
}
