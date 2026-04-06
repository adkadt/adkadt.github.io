// @ts-check
import { defineConfig } from 'astro/config';
import starlight from "@astrojs/starlight";


// https://astro.build/config
export default defineConfig({
    site: 'https://adkadt.github.io',

    integrations: [
        starlight({
            title: 'Personal Portfolio',
            social: [
                {
                    label: 'GitHub',
                    icon: 'github',
                    href: 'https://github.com/adkadt',
                },
            ],
            sidebar: [
                {
                    label: 'Home',
                    link: '/'
                },
                {
                    label: 'Contact',
                    link: '/contact'
                },
            ],
        }),
    ],
});