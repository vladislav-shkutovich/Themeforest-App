import { ButtonDefault } from '@components/ButtonDefault'
import { SearchBarStyled } from './styled'

export const SearchBar: React.FC = () => {
	return (
		<SearchBarStyled>
			<input type="text" />
			<ButtonDefault text="Search" />
		</SearchBarStyled>
	)
}

/*
const dispatch = useDispatch()

	const formik = useFormik({
		initialValues: {
			input: '',
		},

		onSubmit: (values, { resetForm }) => {
			resetForm({ input: '' })

			dispatch(
				addTodo({
					text: values.input,
					id: uuidv4(),
					isEditing: false,
				}),
			)
		},
	})

	return (
		<Form onSubmit={formik.handleSubmit} autoComplete="off">
			<Input
				id="input"
				name="input"
				placeholder="Type your task..."
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.input}
			/>
			<InputButton type="submit">Add</InputButton>
		</Form>
	)
*/
