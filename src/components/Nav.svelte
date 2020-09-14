<style>
	nav {
		border-bottom: 1px solid #ccc;
		font-weight: 300;
		padding: 0 1em;
		display: flex;
		height: 3.5em;
	}

	.dark > nav {
		border-bottom: 1px solid #555;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	.dark > nav [aria-current]::after {
		background-color: #888;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: #333;
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<nav>
	<ul style="flex: 1;">
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">cipherboard</a></li>
		<li><a aria-current="{segment === 'loopdrum' ? 'page' : undefined}" href="loopdrum">loopdrum</a></li>
		<li><a aria-current="{segment === 'endlog' ? 'page' : undefined}" href="endlog">endlog</a></li>
		<li><a aria-current="{segment === 'jumpchart' ? 'page' : undefined}" href="jumpchart">jumpchart</a></li>
	</ul>
	<div style="flex: 1;">
		<h1 on:click={toggleTheme} style="text-align: center; margin: 0 auto; padding: 0.25em 0 0 0; cursor: pointer;"><strong>AA</strong>GHC</h1>
	</div>
	<ul style="flex: 1;">
		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li style="float: right;"><a rel=prefetch aria-current="{segment === 'notes' ? 'page' : undefined}" href="notes">notes</a></li>
		<li style="float: right;"><a aria-current="{segment === 'umple' ? 'page' : undefined}" href="umple">umple</a></li>
	</ul>
</nav>

<script>
	export let segment;
	export let toggleTheme;
</script>