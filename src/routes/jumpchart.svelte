<style>
	main {
		position: relative;
		/* max-width: 56em;
		padding: 2em;
		margin: 0 auto; */
		box-sizing: border-box;
	}
  .settings {
    margin: 0 auto;
    width: 600px;
  }
</style>

<svelte:head>
	<title>AAGHC: cipher chart</title>
</svelte:head>

<main>
	<br />
	<div class="settings">
		<h1>transposition exchange:</h1>
		<p>transposition exchange: transposition exchange: transposition exchange: transposition exchange: transposition exchange: transposition exchange: transposition exchange: transposition exchange: </p>
	</div>
	<JumpChart />
</main>

<script>
	import JumpChart from '../components/JumpChart.svelte';
</script>