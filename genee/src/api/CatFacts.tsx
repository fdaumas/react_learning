import { useQuery } from '@tanstack/react-query';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

function CatFacts() {
	const { t } = useTranslation();

	const { isLoading, error, data } = useQuery({
		queryKey: ['repoData'],
		queryFn: () =>
			fetch('https://catfact.ninja/fact').then(
				(res) => res.json(),
			),
	});

	if (isLoading) {
		return (t('main.api.cat_facts.loading'));
	}

	if (error) {
		return (t('main.api.cat_facts.error'));
	}

	return (
		<div>
			<Suspense fallback="...loading">
				<h3>{t('main.api.cat_facts.fact')}</h3>
			</Suspense>
			<p>{data.fact}</p>
		</div>
	);
}

export default CatFacts;
