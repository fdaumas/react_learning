import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from '../public/locales/en/translation.json';
import translationFR from '../public/locales/fr/translation.json';

const resources = {
	en: {
		translation: translationEN
	},
	fr: {
		translation: translationFR
	}
};

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		returnEmptyString: false,
		debug: true,
		fallbackLng: 'en',
	});

export default i18n;
