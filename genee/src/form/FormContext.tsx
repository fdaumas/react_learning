import { createContext, useContext } from 'react';
import { FormInfo } from './type.ts';


const FormContext = createContext<{ formInfo: FormInfo } | null>(null);

export function useFormContext() {
	const context = useContext(FormContext);
	if (!context) {
		throw new Error (
			'FormInfo.* component must be rendered as child of Form component'
		);
	}
	return context;
}

export default FormContext;
