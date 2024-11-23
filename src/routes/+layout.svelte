<script>
	import '$lib/app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	// Supports weights 200-900
	import '@fontsource-variable/nunito-sans';
</script>

<svelte:head>
	<title>Lavandis</title>

	<meta name="description" content="" />
</svelte:head>

<Navbar />
<slot />
<Footer />
