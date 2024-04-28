<script lang="ts">
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	type Props = {
		as?: keyof HTMLElementTagNameMap;
		class?: string;
		verticalSpacing?: 'padding' | 'margin' | 'none';
		children: Snippet;
	};
	let {
		as = 'div',
		class: className = '',
		verticalSpacing = 'padding',
		children,
		...restProps
	}: Props = $props();

	let verticalSpacingClasses = $derived(
		verticalSpacing === 'margin'
			? 'my-20 lg:my-40'
			: verticalSpacing === 'padding'
				? 'py-20 lg:py-40'
				: ''
	);
</script>

<svelte:element
	this={as}
	class={twMerge('mx-auto max-w-7xl px-4 md:px-6', verticalSpacingClasses, className)}
	{...restProps}
>
	{@render children()}
</svelte:element>
