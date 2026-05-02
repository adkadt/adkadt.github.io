import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';

export default defineConfig({
    integrations: [
        starlight({
        title: 'Adam K Brandt',
        favicon: '/favicon.svg',
            
        social: [
            { icon: 'github', label: 'GitHub', href: 'https://github.com/adkadt' },
        ],
        plugins: [
            // starlightBlog({
            //   title: 'Blog',
            // }),
        ],
        sidebar: [
            {
            label: 'About Me',
            items: [
                { label: 'Contact', link: '/about/contact/' },
            ],
            },
            // {
            //   label: 'Rocketry',
            //   items: [
            //     { label: 'Lti Software Management', link: '/rocketry/lti-software/' },
            //   ],
            // },
            // {
            //   label: 'Robotics',
            //   items: [
            //     { label: 'Pathing Algorithms', link: '/robotics/pathing/' },
            //   ],
            // },
        ],
        }),
    ],
});