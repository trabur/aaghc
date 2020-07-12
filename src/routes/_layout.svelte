

<style>
	#aaghc {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    top: 0;
	}

	main {
		position: relative;
		max-width: 56em;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}

	.dark {
		background: #000;
		color: #ccc;
	}
</style>


<div id="aaghc" class={theme}>
	<Nav {toggleTheme} {segment} />
	<main>
		<slot></slot>
	</main>
</div>


<script>
	import Nav from '../components/Nav.svelte';

	let theme = "dark"
	export let segment

	function toggleTheme() {
		if (theme === "dark") {
			theme = "light"
		} else {
			theme = "dark"
		}
	}

</script>