import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from 'dayjs';

function FormBirthDate() {
	const [value, setValue] = useState<Dayjs | null>(null);

	const handleOnChange = (e: Dayjs | null) => {
		setValue(e);
		console.log(e);
	}

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DatePicker value={value} onChange={(e) => handleOnChange(e)} />
		</LocalizationProvider>
	);
}

export default FormBirthDate;
