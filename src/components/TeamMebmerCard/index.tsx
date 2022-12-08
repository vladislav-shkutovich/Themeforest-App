import { IOurTeamContentCard } from '@interfaces/index'
import iconLinkedIn from '@assets/icons/team_member_card_linkedin.svg'
import iconInstagramIn from '@assets/icons/team_member_card_instagram.svg'
import { TeamMemberCardStyled } from './styled'

export const TeamMemberCard: React.FC<{ teamMemberCard: IOurTeamContentCard }> = ({
	teamMemberCard,
}) => {
	const { firstName, lastName, role, photo, description, links } = teamMemberCard

	return (
		<TeamMemberCardStyled>
			<img src={photo} alt="Team member" />

			<div>
				<div>
					<h6>Name</h6>
					<p>
						{firstName} {lastName}
					</p>
				</div>
				<div>
					<h6>Position</h6>
					<p>{role}</p>
				</div>
				<div>
					<h6>Description</h6>
					<p>{description}</p>
				</div>
				<div>
					<h6>Social networks</h6>
					<div>
						<a href={links[1]}>
							<img src={iconInstagramIn} alt="Instagram" />
						</a>
						<a href={links[2]}>
							<img src={iconLinkedIn} alt="LinkedIn" />
						</a>
					</div>
					<a href={links[0]} target="_blank" rel="noreferrer">
						Read {firstName}&apos;s Biography
					</a>
				</div>
			</div>
		</TeamMemberCardStyled>
	)
}
