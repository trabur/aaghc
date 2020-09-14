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
		<h1>from number to alphabet:</h1>
		<p>from number to alphabet: from number to alphabet: from number to alphabet: from number to alphabet: from number to alphabet: from number to alphabet: from number to alphabet: </p>
	</div>
	<JumpChart />
</main>

<script>
	import JumpChart from '../components/JumpChart.svelte';
</script>