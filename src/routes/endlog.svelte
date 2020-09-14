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
    <h1>notapi stack:</h1>
    <p>count up all of the bits and stack. count up all of the bits and stack. count up all of the bits and stack. count up all of the bits and stack. count up all of the bits and stack. count up all of the bits and stack. </p>
  </div>
	<Example class="board" />
</main>

<script>
	// import Monopoly from '../components/Monopoly.svelte';
	import PrototypeCube from '../components/PrototypeCube.svelte';
	import CoinToss from '../components/CoinToss.svelte';
	import TicTacToe from '../components/TicTacToe.svelte';
	import Example from '../components/cipherboard/Example.svelte';
</script>