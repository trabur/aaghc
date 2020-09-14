<svelte:head>
	<title>AAGHC: loop drum</title>
</svelte:head>

<style>
  .frame {
    position: absolute;
    top: 3.5em;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
  }
</style>

<main class="frame">
	<Example />
</main>

<script>
  import Example from '../components/loopdrum/Example.svelte'
</script>