import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { ButtonDefault } from '@components/ButtonDefault'
import { ISearchBarProps } from '@interfaces/index'
import { SearchBarStyled } from './styled'

export const SearchBar: React.FC<ISearchBarProps> = ({ callback, data }) => {
	const navigate = useNavigate()
	const firstPageRoute = `${data.baseRoute}/${data.id}`

	const formik = useFormik({
		initialValues: {
			input: '',
		},
		enableReinitialize: false,
		onSubmit: () => {
			navigate(firstPageRoute)
		},
	})

	return (
		<SearchBarStyled onSubmit={formik.handleSubmit}>
			<input type="text" onChange={callback} />
			<ButtonDefault text="Search" type="submit" />
		</SearchBarStyled>
	)
}
