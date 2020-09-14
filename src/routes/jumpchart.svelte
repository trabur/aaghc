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
		<p>transfer all the bits to a new set of bits. transfer all the bits to a new set of bits. transfer all the bits to a new set of bits. transfer all the bits to a new set of bits. transfer all the bits to a new set of bits. </p>
	</div>
	<JumpChart />
	<br />
	<div class="settings">
		<h1>permutation shift:</h1>
		<p>transfer all the bits by some fixed amount. transfer all the bits by some fixed amount. transfer all the bits by some fixed amount. transfer all the bits by some fixed amount. transfer all the bits by some fixed amount.</p>
	</div>
</main>

<script>
	import JumpChart from '../components/JumpChart.svelte';
</script>