<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`notes.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
</script>

<style>
	.posts {
		position: relative;
    width: 600px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
  .settings {
    margin: 0 auto;
    width: 600px;
  }
</style>

<svelte:head>
	<title>Notes</title>
</svelte:head>

<main>
  <br />
  <div class="settings">
    <h1>cutrapiso heap:</h1>
    <p>slice up all of the bits and pile. slice up all of the bits and pile. slice up all of the bits and pile. slice up all of the bits and pile. slice up all of the bits and pile. slice up all of the bits and pile. slice up all of the bits and pile. </p>
  </div>
	<div class="posts">
		<ul>
			{#each posts as post}
				<!-- we're using the non-standard `rel=prefetch` attribute to
						tell Sapper to load the data for the page as soon as
						the user hovers over the link or taps it, instead of
						waiting for the 'click' event -->
				<li><a rel='prefetch' href='notes/{post.slug}'>{post.title}</a></li>
			{/each}
		</ul>
	</div>
</main>