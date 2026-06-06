// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics';
import starlightSidebarSwipe from 'starlight-sidebar-swipe';
import starlightPageActions from 'starlight-page-actions'

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
                                label: 'Junction', 
                                items: [{ autogenerate: { directory: 'projects/junction' } }]
                            },
                            { 
                                label: 'PartyAnimals',
                                items: [
                                    { label: 'Introduction', link: 'projects/partyanimals' },
                                    { label: 'Features', items: [{ autogenerate: { directory: 'projects/partyanimals/features' } }] },
                                    { label: 'Configuration', items: [{ autogenerate: { directory: 'projects/partyanimals/configuration' } }] },
                                ]
                            },
                            { 
                                label: 'Vessel', 
                                items: [
                                    { label: 'Introduction', link: 'projects/vessel' },
                                    { label: 'Features', items: [{ autogenerate: { directory: 'projects/vessel/features' } }] },
                                    { label: 'Configuration', items: [{ autogenerate: { directory: 'projects/vessel/configuration' } }] },]
                            },
                            { 
                                label: 'Gensou', 
                                items: [{ autogenerate: { directory: 'projects/gensou' } }]
                            },
                            { 
                                label: 'Ordinal', 
                                items: [{ autogenerate: { directory: 'projects/ordinal' } }]
                            },
                        ],
                    },
                ]),
                starlightSidebarSwipe(),
                starlightPageActions({
                    baseUrl: 'https://docs.maboroshi.org/',
                    share: true,
                }),
            ],
        }),
    ],
});
