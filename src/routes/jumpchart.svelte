<style>
	main {
		position: relative;
		max-width: 56em;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<svelte:head>
	<title>AAGHC: cipher chart</title>
</svelte:head>

<main>
	<ReferenceChart />
</main>

<script>
	import ReferenceChart from '../components/ReferenceChart.svelte';
</script>