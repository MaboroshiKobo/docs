// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics';
import starlightSidebarSwipe from 'starlight-sidebar-swipe';

export default defineConfig({
    site: 'https://docs.maboroshi.org',
    integrations: [
        starlight({
            title: 'Maboroshi',
            description: 'Documentation for Maboroshi Projects',
            logo: {
                src: './src/assets/images/logo.avif',
                replacesTitle: true,
            },
            editLink: {
                baseUrl: 'https://github.com/MaboroshiKobo/docs/edit/main/',
            },
            lastUpdated: true,
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/MaboroshiKobo' }, { icon: 'discord', label: 'Discord', href: 'https://discord.maboroshi.org' }],
            customCss: ['./src/styles/custom.css', '@fontsource-variable/anuphan'],
            plugins: [
                starlightSidebarTopics([
                    {
                        label: 'Home',
                        link: 'home',
                        icon: 'star',
                        items: [
                            { label: 'Welcome', link: 'home' },
                        ]
                    },
                    {
                        label: 'Projects', 
                        link: 'projects',
                        icon: 'rocket',
                        items: [
                            { 
                                label: 'Gensou', 
                                autogenerate: { directory: 'projects/gensou' } 
                            },
                            { 
                                label: 'Junction', 
                                autogenerate: { directory: 'projects/junction' } 
                            },
                            { 
                                label: 'Ordinal', 
                                autogenerate: { directory: 'projects/ordinal' } 
                            },
                            { 
                                label: 'PartyAnimals',
                                items: [
                                    { label: 'Introduction', link: 'projects/partyanimals' },
                                    { label: 'Getting Started', autogenerate: { directory: 'projects/partyanimals/getting-started' } },
                                    { label: 'Features', autogenerate: { directory: 'projects/partyanimals/features' } },
                                ]
                            },
                        ],
                    },
                ]),
                starlightSidebarSwipe(),
            ],
        }),
    ],
});
