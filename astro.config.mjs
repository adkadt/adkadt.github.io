// @ts-check
import { defineConfig } from 'astro/config';
import starlight from "@astrojs/starlight";


// https://astro.build/config
export default defineConfig({
    site: 'https://adkadt.github.io',

    integrations: [
        starlight({
            title: 'Personal Portfolio',
            social: {
                github: 'https://github.com/adkadt',
            },
            sidebar: [
                {
                    label: 'Home',
                    link: '/'
                },
                {
                    label: 'About',
                    link: '/about'
                },
                {
                    label: 'Projects',
                    link: '/projects'
                },
                {
                    label: 'Contact',
                    link: '/contact'
                },
            ],
        }),
    ],
});
