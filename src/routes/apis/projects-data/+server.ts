import { projects } from '$lib/index';
import { json } from '@sveltejs/kit';

export const GET = async ({ url }) => {
	const slug = url.searchParams.get('slug');

	if (!slug) {
		return new Response(JSON.stringify({ error: 'Slug parameter is required' }), {
			status: 400
		});
	}

	try {
		const findMatch = projects.find((project) => project.slug === slug);

		if (!findMatch) {
			return new Response(JSON.stringify({ error: 'Project not found' }), {
				status: 404
			});
		}

		return json(findMatch);
	} catch (error) {
		console.error('Error fetching project data:', error);
		return new Response(JSON.stringify({ error: 'Internal server error' }), {
			status: 500
		});
	}
};
