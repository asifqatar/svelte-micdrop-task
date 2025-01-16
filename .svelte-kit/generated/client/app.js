export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20')
];

export const server_loads = [];

export const dictionary = {
		"/": [3],
		"/daily": [4],
		"/daily/[date]": [5],
		"/dashboard": [6,[2]],
		"/monthly": [7],
		"/monthly/[month]": [8],
		"/quarter": [9],
		"/quarter/[quarter]": [10],
		"/settings": [11],
		"/settings/create-role": [12],
		"/settings/invite-user": [13],
		"/settings/profile": [14],
		"/settings/venue/add": [15],
		"/upload-csv": [16],
		"/weekly": [17],
		"/weekly/[date]": [18],
		"/yearly": [19],
		"/yearly/[yearly]": [20]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';