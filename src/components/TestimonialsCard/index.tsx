import { ITestimonials } from '@interfaces/index'
import { TestimonialsCardStyled } from './styled'

export const TestimonialsCard: React.FC<ITestimonials> = ({ photo, name, position, text, key }) => {
	return (
		<TestimonialsCardStyled key={key}>
			<div>
				<img alt={key} src={photo} />
				<div>
					<h5>{name}</h5>
					<h6>{position}</h6>
				</div>
			</div>
			<p>{text}</p>
		</TestimonialsCardStyled>
	)
}
