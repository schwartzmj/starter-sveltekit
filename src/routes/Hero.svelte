<script lang="ts">
	import { onMount } from 'svelte';
	import Splide from '@splidejs/splide';
	import '@splidejs/splide/dist/css/splide.min.css';

	const carouselImages = [
		{
			src: '/img/mountains.jpg',
			alt: 'Mountains'
		},
		{
			src: '/img/northern-lights.jpg',
			alt: 'Northern Lights'
		},
		{
			src: '/img/desert.jpg',
			alt: 'Desert'
		}
	];

	let splideEle: HTMLElement;

	onMount(() => {
		new Splide(splideEle, {
			type: 'fade',
			rewind: true,
			speed: 7000,
			autoplay: true,
			interval: 4000,
			arrows: false
		}).mount();
	});
</script>

<div class="relative pb-24 pt-40 sm:pb-32 sm:pt-48 xl:pb-48 xl:pt-64">
	<div
		bind:this={splideEle}
		class="splide !absolute left-0 top-0 h-full w-full"
		aria-label="Featured Images"
	>
		<div class="splide__track relative h-full w-full">
			<ul class="splide__list">
				{#each carouselImages as image}
					<li class="splide__slide relative h-full w-full">
						<img
							src={image.src}
							alt={image.alt}
							class="absolute left-0 top-0 h-full w-full object-cover"
						/>
					</li>
				{/each}
			</ul>
		</div>
		<!-- start -->
		<!-- Play/Pause -->
		<button class="splide__toggle absolute bottom-1 right-1 z-10 text-zinc-200/70" type="button">
			<span class="splide__toggle__play">
				<span class="sr-only">Play</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
					/>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			</span>
			<span class="splide__toggle__pause">
				<span class="sr-only">Pause</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			</span>
		</button>
		<!-- Progress Bar -->
		<div class="splide__progress !pointer-events-none absolute bottom-0 z-10 w-full">
			<div class="splide__progress__bar !bg-zinc-200/50"></div>
		</div>
		<!-- end -->
	</div>

	<div class="absolute left-0 top-0 h-full w-full bg-zinc-900/60"></div>
	<div
		class="container relative mx-auto flex h-full w-full flex-wrap items-center justify-center text-center text-zinc-50"
	>
		<div class="w-full px-4 md:px-0">
			<h1
				class="mx-auto max-w-4xl font-heading text-4xl font-bold uppercase md:text-6xl lg:text-7xl xl:text-7xl"
			>
				Starter Sveltekit
			</h1>
			<p class="mx-auto mt-4 max-w-xl text-lg md:mt-10 md:text-2xl">
				A starting point for a new SvelteKit website.
			</p>
			<div class="mt-8 md:mt-16">
				<a
					href="/"
					class="theme-rounded inline-flex items-center space-x-2 border border-zinc-100/90 bg-transparent px-4 py-2 font-heading text-lg font-semibold transition duration-300 ease-in-out hover:scale-105 hover:bg-white/10 hover:shadow-xl md:px-8 md:py-3 md:text-xl"
				>
					<span>Lorem Ipsum</span>
				</a>
			</div>
		</div>
	</div>
</div>
