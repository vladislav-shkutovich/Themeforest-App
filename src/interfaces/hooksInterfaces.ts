import { IInitialFormValues } from './constantsInterfaces'

export interface IUseForm {
	initialValues: IInitialFormValues
	validationSchema: object
	template: string
	alertMessage: string
}
