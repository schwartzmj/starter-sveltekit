<script>
	import { dev } from '$app/environment';
	import NProgress from '$components/common/NProgress.svelte';
	import DevToolbar from '$components/dev/DevToolbar.svelte';
	import '../app.pcss';
	// Supports weights 100-900
	import '@fontsource-variable/inter';
</script>

<NProgress />
<slot></slot>
{#if dev}
	<DevToolbar />
{/if}
