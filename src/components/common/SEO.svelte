<script lang="ts">
	type Props = {
		title: string;
		description: string;
		og: {
			image: string;
		};
	};
	let { title, description, og }: Props = $props();
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:image" content={og.image} />
	<!-- <link rel="canonical" href={$page.url.origin + $page.url.pathname} /> -->
</svelte:head>
