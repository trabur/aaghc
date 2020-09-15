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
    height: 850px;
  }

  .forever {
    margin: 0 auto;
    width: 800px;
  }
</style>

<main>
  <br />
  <div class="settings">
    <h1>rotation modulo:</h1>
    <p>spin all the bits up and down. spin all the bits up and down. spin all the bits up and down. spin all the bits up and down. spin all the bits up and down. spin all the bits up and down. spin all the bits up and down. </p>
  </div>
  <div class="loop">
	  <UpAndDown settings={true} />
  </div>
  <br />
  <br />
  <div class="settings">
    <h1>function return:</h1>
    <p>spin all the bits back and fourth. spin all the bits back and fourth. spin all the bits back and fourth. spin all the bits back and fourth. spin all the bits back and fourth. spin all the bits back and fourth. </p>
  </div>
  <div class="forever">
    <BackAndFourth />
  </div>
  <br />
  <div class="settings">
    <h1>motion wheel:</h1>
    <p>spin all the bits on a gear. spin all the bits on a gear. spin all the bits on a gear. spin all the bits on a gear. spin all the bits on a gear. spin all the bits on a gear. spin all the bits on a gear. spin all the bits on a gear. </p>
  </div>
  <div class="forever">
    <Gear />
  </div>
  <br />
  <div class="settings">
    <h1>gravitation disk:</h1>
    <p>spin all the bits on a cassette. spin all the bits on a cassette. spin all the bits on a cassette. spin all the bits on a cassette. spin all the bits on a cassette. spin all the bits on a cassette. spin all the bits on a cassette. </p>
  </div>
  <br />
  <div class="settings">
    <h1>transition train:</h1>
    <p>spin all the bits on a track. spin all the bits on a track. spin all the bits on a track. spin all the bits on a track. spin all the bits on a track. spin all the bits on a track. spin all the bits on a track. </p>
  </div>
  <br />
</main>

<script>
  import UpAndDown from '../components/loopdrum/UpAndDown.svelte'
  import BackAndFourth from '../components/loopdrum/BackAndFourth.svelte'
  import Gear from '../components/loopdrum/Gear.svelte'
</script>