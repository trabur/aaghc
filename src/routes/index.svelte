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
    <h1>generation message:</h1>
    <p>population of plain text keyboard chars to transfer between peers. population of plain text keyboard chars to transfer between peers. population of plain text keyboard chars to transfer between peers.</p>
  </div>
  <br />
  <div class="settings">
    <h1>mutation key:</h1>
    <p>one time scramble of chars to secure plain text information. one time scramble of chars to secure plain text information. one time scramble of chars to secure plain text information. one time scramble of bits to secure plain text information. </p>
  </div>
  <br />
  <div class="settings">
    <h1>instruction cubyter:</h1>
    <p>tilewrap bits to encrypt and decrypt information. tilewrap bits to encrypt and decrypt information. tilewrap bits to encrypt and decrypt information. tilewrap bits to encrypt and decrypt information. </p>
  </div>
	<Example class="board" />
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
	<div class="settings">
		<h1>communication plug:</h1>
		<p>transfer the bits through wiring by signal. transfer the bits through wiring by signal. transfer the bits through wiring by signal. transfer the bits through wiring by signal. transfer the bits through wiring by signal. </p>
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