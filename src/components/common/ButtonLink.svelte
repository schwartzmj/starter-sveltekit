<script lang="ts">
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	// TODO: restprops?

	type AnchorProps = {
		variant?: 'primary' | 'alt' | 'ghost' | 'outline';
		class?: string;
		children: Snippet;
		href: string;
	};

	let { variant = 'primary', class: className, children, href }: AnchorProps = $props();

	const baseClasses =
		'group inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer';

	let classes = {
		primary: `${baseClasses} btn-base bg-primary-600 text-white hover:bg-primary-500 hover:text-slate-100 focus-visible:outline-primary-600`,
		alt: `${baseClasses} bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 focus-visible:outline-slate-600`,
		outline: `${baseClasses} text-slate-700 ring-1 ring-slate-200 hover:text-slate-900 hover:ring-slate-300 focus-visible:outline-primary-600 focus-visible:ring-slate-300`,
		ghost: `${baseClasses} text-slate-700 hover:text-slate-900 focus-visible:outline-primary-600`
	};
</script>

<a class={twMerge(classes[variant ?? 'primary'], className ?? '')} {href}>
	{@render children()}
</a>
