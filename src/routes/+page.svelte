<script lang="ts">
	import Seo from '$components/common/SEO.svelte';
	import Container from '../components/common/Container.svelte';
	import CallToAction from './CallToAction.svelte';
	import Hero from './Hero.svelte';
</script>

<Seo
	title="Starter SvelteKit"
	description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quae laudantium suscipit illum aspernatur iure incidunt unde illo, nihil voluptatem officia dicta similique maxime quisquam alias tempora molestias. Minima, numquam!"
	og={{
		image: '/img/northern-lights.jpg'
	}}
/>
<Hero />
<Container class="!pt-0">
	<section
		class="mt-12 grid grid-cols-1 items-center gap-20 py-10 lg:mt-24 lg:grid-cols-2 lg:pb-20"
	>
		<div>
			<h2 class="mt-4 text-4xl font-bold tracking-tight text-stone-800 lg:text-3xl">Lorem Ipsum</h2>
			<div class="mt-6 leading-7">
				<p class="prose">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quae laudantium
					suscipit illum aspernatur iure incidunt unde illo, nihil voluptatem officia dicta
					similique maxime quisquam alias tempora molestias. Minima, numquam!
				</p>
			</div>
		</div>
		<img
			sizes="(min-width: 1024px) 50vw, 100vw"
			class="mt-4 rounded-lg shadow-md shadow-stone-800/50"
			src="/img/northern-lights.jpg"
			alt="Northern lights"
		/>
	</section>
	<section class="grid grid-cols-1 items-center gap-20 py-10 lg:grid-cols-2 lg:pb-20 lg:pt-40">
		<img
			sizes="(min-width: 1024px) 50vw, 100vw"
			class="order-last mt-4 rounded-lg shadow-md shadow-stone-800/50 lg:order-first"
			src="/img/mountains.jpg"
			alt="Mountains"
		/>
		<div>
			<h2 class="mt-4 text-4xl font-bold tracking-tight text-stone-800 lg:text-3xl">Lorem Ipsum</h2>
			<div class="prose mt-6 leading-7">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam molestias vel quasi
					reprehenderit, eaque assumenda ad neque itaque asperiores? Nobis veritatis quis cupiditate
					est iure? Perferendis officia esse accusamus quia.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique incidunt, vitae fugiat
					eius delectus asperiores sed quaerat quae, porro, modi commodi ea omnis! Consequatur,
					illum libero. Aperiam temporibus asperiores recusandae!
				</p>
			</div>
		</div>
	</section>
	<section
		class="mt-12 grid grid-cols-1 items-center gap-20 py-10 lg:mt-24 lg:grid-cols-2 lg:pb-20"
	>
		<div>
			<h2 class="mt-4 text-4xl font-bold tracking-tight text-stone-800 lg:text-3xl">Lorem Ipsum</h2>
			<div class="mt-6 leading-7">
				<p class="prose">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quae laudantium
					suscipit illum aspernatur iure incidunt unde illo, nihil voluptatem officia dicta
					similique maxime quisquam alias tempora molestias. Minima, numquam!
				</p>
			</div>
		</div>
		<img
			sizes="(min-width: 1024px) 50vw, 100vw"
			class="mt-4 rounded-lg shadow-md shadow-stone-800/50"
			src="/img/desert.jpg"
			alt="Desert landscape"
		/>
	</section>
</Container>
<CallToAction />
