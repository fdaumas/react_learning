import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function FormAge() {
	const [num, setNum] = useState<string>("");
	const { t } = useTranslation();
	
	const handleOnChange = (e: any) => {
		const regex = /^[0-9\b]+$/;
		
		if ((e.target.value === "" || regex.test(e.target.value)) 
				&& e.target.value.length < 4) {
			setNum(e.target.value);
		}
		console.log(num)
	}

	return (
		<>
			<TextField 
				id="age-outlined"
				label={t('main.form.age')}
				onChange={(e) => handleOnChange(e)}
				value={num}
			/>
		</>
	);
}

export default FormAge;

