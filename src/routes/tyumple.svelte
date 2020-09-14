<style>
	.board {
		position: reltoive;
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
    <h1>substitution swap:</h1>
    <p>transfer all the bits around each other. transfer all the bits around each other. transfer all the bits around each other. transfer all the bits around each other. transfer all the bits around each other. </p>
  </div>
	<Example class="board" />
  <br />
  <div class="settings">
    <h1>reflection flip:</h1>
    <p>transfer all the bits to their exact opposite. transfer all the bits to their exact opposite. transfer all the bits to their exact opposite. transfer all the bits to their exact opposite. transfer all the bits to their exact opposite. </p>
  </div>
</main>

<script>
	// import Monopoly from '../components/Monopoly.svelte';
	import PrototypeCube from '../components/PrototypeCube.svelte';
	import CoinToss from '../components/CoinToss.svelte';
	import TicTacToe from '../components/TicTacToe.svelte';
	import Example from '../components/cipherboard/Example.svelte';
</script>