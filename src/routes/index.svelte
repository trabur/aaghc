<style>
	.board {
		position: relative;
		max-width: 800px;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
  .settings {
    margin: 0 auto;
    width: 600px;
  }
</style>

<svelte:head>
	<title>AAGHC</title>
</svelte:head>

<!-- <Monopoly /> -->
<main>
  <br />
  <div class="settings">
    <h1>reflect encrypt decrypt:</h1>
    <p>reflect encrypt decrypt: reflect encrypt decrypt: reflect encrypt decrypt: reflect encrypt decrypt: reflect encrypt decrypt: reflect encrypt decrypt: reflect encrypt decrypt: reflect encrypt decrypt: reflect encrypt decrypt: </p>
  </div>
	<Example class="board" />
	<!-- <PrototypeCube /> -->
	<!-- <CoinToss />
	<TicTacToe /> -->
</main>

<script>
	// import Monopoly from '../components/Monopoly.svelte';
	import PrototypeCube from '../components/PrototypeCube.svelte';
	import CoinToss from '../components/CoinToss.svelte';
	import TicTacToe from '../components/TicTacToe.svelte';
	import Example from '../components/cipherboard/Example.svelte';
</script>