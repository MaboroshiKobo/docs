// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Maboroshi Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/MaboroshiKobo/docs' }],
			sidebar: [
				{
					label: 'About',
					items: [
						{ label: 'Welcome', slug: 'welcome' },
					],
				},
				{
					label: 'Gensou',
					autogenerate: { directory: 'gensou' },
				},
				{
					label: 'Plugins',
					items: [
						{ label: 'Overview', slug: 'plugins' },
						{ label: 'Junction', autogenerate: { directory: 'plugins/junction' } },
						{ label: 'Ordinal', autogenerate: { directory: 'plugins/ordinal' } },
						{ label: 'PartyAnimals', autogenerate: { directory: 'plugins/partyanimals' } },
					]
				},
			],
		}),
	],
});
