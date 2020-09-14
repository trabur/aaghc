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
    <h1>rotation modulo:</h1>
    <p>spin all the bits up and down. spin all the bits up and down. spin all the bits up and down. spin all the bits up and down. spin all the bits up and down. spin all the bits up and down. spin all the bits up and down. </p>
  </div>
  <div class="loop">
	  <Example class="drum" />
  </div>
  <br />
  <div class="settings">
    <h1>function return:</h1>
    <p>spin all the bits back and fourth. spin all the bits back and fourth. spin all the bits back and fourth. spin all the bits back and fourth. spin all the bits back and fourth. spin all the bits back and fourth. </p>
  </div>
</main>

<script>
  import Example from '../components/loopdrum/Example.svelte'
</script>