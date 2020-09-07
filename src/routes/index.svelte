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
	<title>AAGHC</title>
</svelte:head>

<!-- <Monopoly /> -->
<main>
	<Cipher />
	<!-- <PrototypeCube /> -->
	<!-- <CoinToss />
	<TicTacToe /> -->
</main>

<script>
	// import Monopoly from '../components/Monopoly.svelte';
	import PrototypeCube from '../components/PrototypeCube.svelte';
	import CoinToss from '../components/CoinToss.svelte';
	import TicTacToe from '../components/TicTacToe.svelte';
	import Cipher from '../components/Cipher.svelte';
</script>