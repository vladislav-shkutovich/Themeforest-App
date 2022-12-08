/* eslint-disable prettier/prettier */
import { useState, ChangeEventHandler } from 'react'
import serviceSingleImage1 from '@assets/images/services_single1.png'
import serviceSingleImage2 from '@assets/images/services_single2.png'
import checkMark from '@assets/icons/check_mark.svg'
import { servicesSingleList } from '@constants/servicesSingleList'
import { CategoriesList } from '@components/CategoriesList'
import { SearchBar } from '@components/SearchBar'
import { IServicesSingleItem } from '@interfaces/index'
import { ServicesSingleContentStyled, DummyContentStyled, NavigationStyled } from './styled'

export const ServicesSingleContent: React.FC<{ services: IServicesSingleItem[] }> = ({
	services,
}) => {
	const [filteredList, setFilteredList] = useState(services)

	const handleSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
		e.preventDefault()

		return setFilteredList(
			services.filter((item) => item.title.toLowerCase().includes(e.target.value.toLowerCase())),
		)
	}

	return (
		<ServicesSingleContentStyled>
			<DummyContentStyled>
				<h3>Customer</h3>
				<p>
					Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque finibus consequat felis vel
					pretium. Aliquam gravida nisi vel convallis ultricies. Integer ante sapien, consequat et dolor
					vel.
				</p>
				<img src={serviceSingleImage1} alt="Services Single 1" />

				<h3>Challenge</h3>
				<p>
					Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque finibus consequat felis vel
					pretium. Aliquam gravida nisi vel convallis ultricies. Integer ante sapien, consequat et dolor
					vel. Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit,
					tincidunt aliquam ligula id, lacinia auctor orci.
				</p>

				<h3>Solution</h3>
				<p>
					Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque finibus consequat felis vel
					pretium. Aliquam gravida nisi vel convallis ultricies. Integer ante sapien, consequat et dolor
					vel.
				</p>

				<div>
					<img src={serviceSingleImage2} alt="Services Single 2" />
					<ul>
						{servicesSingleList.map((item) => (
							<li key={item}>
								<img src={checkMark} alt="check" />
								{item}
							</li>
						))}
					</ul>
				</div>

				<h3>Results</h3>
				<p>
					Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque finibus consequat felis vel
					pretium. Aliquam gravida nisi vel convallis ultricies. Integer ante sapien, consequat et dolor
					vel. Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit,
					tincidunt aliquam ligula id, lacinia auctor orci.
				</p>

				<h3>Technologies</h3>
				<p>
					Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque finibus consequat felis vel
					pretium. Aliquam gravida nisi vel convallis ultricies. Integer ante sapien, consequat et dolor
					vel.
				</p>
			</DummyContentStyled>

			<NavigationStyled>
				<SearchBar callback={handleSearch} data={filteredList[0]} />
				<h4>Services</h4>
				<CategoriesList list={filteredList} />
			</NavigationStyled>
		</ServicesSingleContentStyled>
	)
}
