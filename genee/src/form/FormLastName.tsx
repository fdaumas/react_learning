import TextField from '@mui/material/TextField';
import { useTranslation } from 'react-i18next';

function FormFirstName() {
	const { t } = useTranslation();

	const handleOnChange = (e: any) => {
		console.log(e.target.value)
	}

	return (
		<>
			<TextField
				id="last-name-outlined"
				label={t('main.form.last_name')}
				onChange={(e) => handleOnChange(e)}
			/>
		</>
	);
}

export default FormFirstName;

