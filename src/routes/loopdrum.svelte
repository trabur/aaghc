<svelte:head>
	<title>AAGHC: loop drum</title>
</svelte:head>

<style>
  .settings {
    margin: 0 auto;
    width: 600px;
  }

  .loop {
    margin: 0 auto;
    width: 800px;
    height: 800px;
  }

  .drum {
    position: absolute;
    top: 3.5em;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
  }
</style>

<main>
  <br />
  <div class="settings">
    <h1>modulo rotation:</h1>
    <p>modulo rotation: modulo rotation: modulo rotation: modulo rotation: modulo rotation: modulo rotation: modulo rotation: modulo rotation: modulo rotation: modulo rotation: modulo rotation: modulo rotation: modulo rotation: </p>
  </div>
  <div class="loop">
	  <Example class="drum" />
  </div>
</main>

<script>
  import Example from '../components/loopdrum/Example.svelte'
</script>