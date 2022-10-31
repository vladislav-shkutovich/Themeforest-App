import calendar from '@assets/icons/blog_icon_calendar.svg'
import dataLine from '@assets/icons/blog_icon_data_line.svg'
import person from '@assets/icons/blog_icon_person.svg'
import share from '@assets/icons/blog_icon_share.svg'
import tag from '@assets/icons/blog_icon_tag.svg'
import { BLOG_ICONS } from '@constants/blogIcons'
import { IBlogPost } from '@interfaces/index'
import { BlogItemStyled, IconsWrapper } from './styled'

export const BlogSingleItem: React.FC<{ currentPost: IBlogPost }> = ({ currentPost }) => {
	const { title, text, date, image, author, tags, viewsCount } = currentPost

	return (
		<BlogItemStyled>
			<img src={image} alt="Large post" />
			<IconsWrapper>
				<div>
					<img src={calendar} alt="Calendar" />
					<p>{date}</p>
				</div>
				<div>
					<img src={person} alt="Author" />
					<p>{author}</p>
				</div>
			</IconsWrapper>

			<h3>{title}</h3>
			<p>{text}</p>

			<IconsWrapper>
				<div>
					<img src={dataLine} alt="Data line" />
					<p>{viewsCount} Views</p>
				</div>
				<div>
					<img src={share} alt="Share" />
					<p>Share: </p>
					{BLOG_ICONS.map((item) => (
						<img src={item} alt={item} key={item} />
					))}
				</div>
				<div>
					<img src={tag} alt="Tag" />
					<p>Tags: </p>
					{tags.map((item) => (
						<span key={item}>{item}</span>
					))}
				</div>
			</IconsWrapper>
		</BlogItemStyled>
	)
}
