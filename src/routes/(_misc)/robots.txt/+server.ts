export const prerender = true;

export const GET = async (event): Promise<Response> => {
	const headers: Record<string, string> = {
		'Cache-Control': 'max-age=3600',
		'Content-Type': 'text/plain; charset=utf-8'
	};

	return new Response(`User-agent: *\nDisallow:\n\nSitemap: ${event.url.origin}/sitemap.xml`, {
		headers: headers
	});
};
