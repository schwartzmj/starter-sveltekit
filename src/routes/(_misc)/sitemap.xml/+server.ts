import { SITE_CONFIG } from '$lib/site-config.js';
import type { RequestEvent } from '@sveltejs/kit';

const STATIC_PAGES = Object.keys(import.meta.glob('/src/routes/**/+page.(svelte|md)'));

function formatStaticPages(event: RequestEvent) {
	return STATIC_PAGES.filter(
		(page) => !['/src/routes/+page.svelte'].find((filter) => page.includes(filter))
	)
		.map((page) =>
			page
				.replace('/src/routes', SITE_CONFIG.host)
				.replace('/+page.svelte', '')
				.replace('/+page.md', '')
		)
		.filter((page) => !page.includes('['))
		.map(
			(url: string) => `<url>
    <loc>${url}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
    <lastmod>${`${new Date().toISOString()}`}</lastmod>
  </url>`
		)
		.join('');
}

export const prerender = true;

export const GET = async (event): Promise<Response> => {
	const headers: Record<string, string> = {
		'Cache-Control': 'max-age=3600',
		'Content-Type': 'application/xml'
	};

	return new Response(
		`<?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
      xmlns:xhtml="http://www.w3.org/1999/xhtml"
      xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
    >
      <url>
        <loc>${SITE_CONFIG.host}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
        <lastmod>${`${new Date().toISOString()}`}</lastmod>
      </url>
      ${formatStaticPages(event)}
    </urlset>`,
		{ headers: headers }
	);
};
