<style>
	.endlog {
		max-width: 800px;
		margin: 0 auto;
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
	<Notapi class="endlog" />
  <br />
  <div class="settings">
    <h1>addition overflow:</h1>
    <p>count up all of the bits and stack. count up all of the bits and stack. count up all of the bits and stack. count up all of the bits and stack. count up all of the bits and stack. count up all of the bits and stack. </p>
  </div>
</main>

<script>
	import Notapi from '../components/Notapi.svelte';
</script>