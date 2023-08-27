import Divider from '@mui/material/Divider';
import Form from './form/Form';
import FormAge from './form/FormAge';
import FormField from './form/FormField';
import FormFirstName from './form/FormFirstName';
import FormLastName from './form/FormLastName';
import FormBirthDate from './form/FormBirthDate';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CatFacts from './api/CatFacts';
import { useTranslation } from 'react-i18next';
const queryClient = new QueryClient()

function App() {
	const { i18n } = useTranslation();

	return (
		<>
			<Form 
				field={
					<FormField>
						<FormFirstName />
						<Divider orientation="vertical" variant="middle" flexItem />
						<FormLastName />
						<Divider orientation="vertical" variant="middle" flexItem />
						<FormAge />
						<Divider orientation="vertical" variant="middle" flexItem />
						<FormBirthDate />
					</FormField>
				}	
			/>

			<QueryClientProvider client={queryClient}>
				<CatFacts />
			</QueryClientProvider>

			<div>
				<button onClick={() => i18n.changeLanguage('fr')}>fr</button>
				<button onClick={() => i18n.changeLanguage('en')}>en</button>
			</div>
		</>
	)
}

export default App
