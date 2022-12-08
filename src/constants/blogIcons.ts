import facebook from '@assets/icons/blog_icon_facebook.svg'
import google from '@assets/icons/blog_icon_google.svg'
import linkedin from '@assets/icons/blog_icon_linkedin.svg'
import twitter from '@assets/icons/blog_icon_twitter.svg'
import youtube from '@assets/icons/blog_icon_youtube.svg'
import { IItemLink } from '@interfaces/constantsInterfaces'

export const BLOG_ICONS: IItemLink[] = [
	{ name: facebook, route: 'https://www.facebook.com/' },
	{ name: google, route: 'https://www.google.com/' },
	{ name: linkedin, route: 'https://www.linkedin.com/in/vladislav-shkutovich' },
	{ name: twitter, route: 'https://www.twitter.com/' },
	{ name: youtube, route: 'https://www.youtube.com/' },
]
