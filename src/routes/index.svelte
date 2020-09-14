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
    <h1>information tilewrap:</h1>
    <p>plain text: plain text: plain text: plain text: plain text: plain text: plain text: plain text: plain text: plain text: plain text: plain text: plain text: plain text: plain text: plain text: plain text: plain text: plain text: plain text: </p>
  </div>
	<Example class="board" />
  <br />
  <div class="settings">
    <h1>instruction cubyter:</h1>
    <p>encrypt decrypt: encrypt decrypt: encrypt decrypt: encrypt decrypt: encrypt decrypt: encrypt decrypt: encrypt decrypt: encrypt decrypt: encrypt decrypt: encrypt decrypt: encrypt decrypt: encrypt decrypt:</p>
  </div>
	<br />
	<div class="settings">
		<h1>combination lock:</h1>
		<p>jam the transfer of bits between points. jam the transfer of bits between points. jam the transfer of bits between points. jam the transfer of bits between points. jam the transfer of bits between points. </p>
	</div>
	<br />
	<div class="settings">
		<h1>friction timing:</h1>
		<p>limit the transfer of bits between points. limit the transfer of bits between points. limit the transfer of bits between points. limit the transfer of bits between points. limit the transfer of bits between points. </p>
	</div>
	<br />
</main>

<script>
	// import Monopoly from '../components/Monopoly.svelte';
	import PrototypeCube from '../components/PrototypeCube.svelte';
	import CoinToss from '../components/CoinToss.svelte';
	import TicTacToe from '../components/TicTacToe.svelte';
	import Example from '../components/cipherboard/Example.svelte';
</script>