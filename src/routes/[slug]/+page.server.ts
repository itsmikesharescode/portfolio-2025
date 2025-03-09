import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, url }) => {
	const slug = url.pathname.split('/').pop();

	if (!slug) {
		console.error('Slug is missing from URL');
		return {
			projects: null,
			error: 'Invalid URL format'
		};
	}

	try {
		const response = await fetch(`/apis/projects-data?slug=${slug}`);

		if (!response.ok) {
			const errorText = await response.text();
			console.error(`API request failed: ${response.status} - ${errorText}`);
			return error(404, 'Project not found');
		}

		return {
			projects: await response.json()
		};
	} catch (err: unknown) {
		const errors = err as { status: number; body: { message: string } };
		return error(errors.status, errors.body.message);
	}
};
