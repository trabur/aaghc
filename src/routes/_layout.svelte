

<style>
	#aaghc {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    top: 0;
		overflow: auto;
	}

	.dark {
		background: #000;
		color: #ccc;
	}
</style>


<div id="aaghc" class={theme}>
	<Nav {toggleTheme} {segment} />
	<slot></slot>
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