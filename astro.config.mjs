import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import starlightBlog from 'starlight-blog';
import mermaid from 'astro-mermaid';

export default defineConfig({
    integrations: [
        mermaid(),
        starlight({
        title: 'Adam K Brandt',
        favicon: '/favicon.svg',
        customCss: ['./src/styles/global.css'],
            
        social: [
            { icon: 'github', label: 'GitHub', href: 'https://github.com/adkadt' },
            { icon: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/adam-k-brandt/' },
        ],
        }),
    ],
});