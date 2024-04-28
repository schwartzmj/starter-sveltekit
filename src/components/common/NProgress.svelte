<script lang="ts">
	import NProgress from 'nprogress';
	import { navigating } from '$app/stores';
	import 'nprogress/nprogress.css';

	let progressBarTimeout: number | undefined = undefined;
	const startProgressBar = () => {
		if (progressBarTimeout) clearTimeout(progressBarTimeout);
		progressBarTimeout = setTimeout(NProgress.start, 200);
	};

	const stopProgressBar = () => {
		if (progressBarTimeout) clearTimeout(progressBarTimeout);
		NProgress.done();
	};

	NProgress.configure({
		// Full list: https://github.com/rstacruz/nprogress#configuration
		minimum: 0.16
	});

	$effect(() => {
		if ($navigating) {
			startProgressBar();
		} else {
			stopProgressBar();
		}
	});
</script>
