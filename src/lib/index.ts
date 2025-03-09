export type Project = {
	id: number;
	title: string;
	description: string;
	techStack: string[];
	slug: string;
	links: {
		image: string;
		video: string;
		liveUrl: string | null;
		githubUrl: string | null;
	};
};

export const projects: Project[] = [
	{
		id: 1,
		title: 'Ifugao University Management System',
		description:
			'A management system for Ifugao State University. It has admin and chairperson users where the admin can manage departments, subjects, sections, chairpersons, and faculties, while the chairperson can manage all of the above except the chairpersons page.',
		techStack: ['Svelte 5', 'SvelteKit', 'Tailwind CSS', 'Supabase', 'Vercel'],
		slug: 'ifugao-university-management-system',
		links: {
			image:
				'https://firebasestorage.googleapis.com/v0/b/hubby-project-f21a7.appspot.com/o/ifugao-system-image.png?alt=media&token=2b7a9bcd-e532-48ff-9fb6-db8c3804458f',
			video:
				'https://firebasestorage.googleapis.com/v0/b/hubby-project-f21a7.appspot.com/o/ifugao-system-video.mp4?alt=media&token=e895a34a-acb1-448d-9472-4bbc92c80a8d',
			liveUrl: null,
			githubUrl: null
		}
	},
	{
		id: 2,
		title: 'Inventory System Cainta',
		description:
			'A management system for the Inventory System Cainta. It has admin and user users where admin can manage departments, subjects, sections, chairpersons, faculties, while chairperson can manage all of the above except the chairpersons page.',
		techStack: ['Svelte 5', 'Tailwind CSS', 'Supabase', 'Vercel'],
		slug: 'inventory-system-cainta',
		links: {
			image:
				'https://firebasestorage.googleapis.com/v0/b/hubby-project-f21a7.appspot.com/o/inventory-sytem-cainta-image.png?alt=media&token=02247d9b-55ed-46da-9de4-6d3b3b07abb6',
			video:
				'https://firebasestorage.googleapis.com/v0/b/hubby-project-f21a7.appspot.com/o/inventory-system-cainta-video.mp4?alt=media&token=401ea3fa-5cac-491b-bb8b-a1a1837b0560',
			liveUrl: null,
			githubUrl: null
		}
	},
	{
		id: 3,
		title: 'Cainta Church Booking System',
		description:
			'A booking system for the Cainta Church. It has admin and user users where admin can manage departments, subjects, sections, chairpersons, faculties, while chairperson can manage all of the above except the chairpersons page.',
		techStack: ['Svelte 5', 'Tailwind CSS', 'Supabase', 'Firebase', 'Vercel'],
		slug: 'cainta-church-booking-system',
		links: {
			image:
				'https://firebasestorage.googleapis.com/v0/b/hubby-project-f21a7.appspot.com/o/cainta-church-booking-image.png?alt=media&token=a2701a7a-3e4a-487b-ba1e-de79909c11db',
			video:
				'https://firebasestorage.googleapis.com/v0/b/hubby-project-f21a7.appspot.com/o/church-booking-cainta-video.mp4?alt=media&token=61542262-46ac-40b5-95cd-c66e0e7f83f8',
			liveUrl: 'https://cainta-church-booking.vercel.app/',
			githubUrl: null
		}
	}
];
