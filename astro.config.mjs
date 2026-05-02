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
            { icon: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/adam-k-brandt/' },
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
        ],
        }),
    ],
});