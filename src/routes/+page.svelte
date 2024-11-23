<script lang="ts">
	import Carousel from '$lib/components/Carousel.svelte';
	import ProductItem from '$lib/components/ProductItem.svelte';
	import { PUBLIC_POCKETBASE_URL } from '$env/static/public';

	export let data: any;
	let showcase = data.showcase;
	let banners = data.carousels;
</script>

<svelte:head>
	<title>Lavandis</title>
</svelte:head>

{#if banners.length !== 0}
	<Carousel {banners} />
{/if}

<div class="mx-3 md:mx-10">
	<section class="text-gray-800 text-center lg:text-left lg:px-32 lg:py-5">
		<div class="grid lg:grid-cols-2 gap-6 xl:gap-12 justify-center">
			<div class="mb-6 lg:mb-0">
				<h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight">
					Lavandis<br />Pro-care
				</h1>
			</div>
			<div class="mb-6 lg:mb-0 flex flex-col justify-center">
				<p class="text-gray-500 text-lg">
					Born out of a shared love of good design & quality products, we create considered
					solutions fit for the modern lifestyle. Always driven by passion, we work to empower
					others to live the same way.
				</p>
			</div>
		</div>
	</section>

	{#each showcase as showsection}
		<h2 class="text-center font-extrabold text-6xl pt-20 pb-12 uppercase">{showsection.name}</h2>

		<div class="grid gap-12 grid-cols-2 lg:grid-cols-4">
			{#each showsection.expand.products as product (product.id)}
				<ProductItem
					title={product.name}
					image="{PUBLIC_POCKETBASE_URL}/api/files/{product.collectionName}/{product.id}/{product
						.images[0]}"
					hoverImage={product.images.length > 1
						? `${PUBLIC_POCKETBASE_URL}/api/files/${product.collectionName}/${product.id}/${product.images[1]}`
						: ''}
					price={product.price}
					salePrice={product.sale_price}
					link="/products/{product.slug}"
				/>
			{/each}
		</div>
	{/each}
</div>
<br /><br />
