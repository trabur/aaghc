<style>
	.coin-toss {
		width: 19em;
	}

	.coin-toss h3 {
		text-align: center;
	}

	.coins {
		margin: 0 auto;
	}

	.coins tr td {
		width: 2em;
		height: 2em;
		text-align: center;
	}

  /* white */
	.coins .tails {
		background: #ddd;
		color: #333;
		cursor: pointer;
		text-decoration: unset;
	}

  /* black */
	.coins .heads {
		background: #333;
		color: #ddd;
		cursor: pointer;
	}

	.coins .tails a,
	.coins .heads a {
		text-decoration: unset;
	}
</style>

<div class="coin-toss">
	<h3>Coin Toss{flip ? call ? ': [tails]' : ': [heads]' : ''}</h3>
	<table class="coins">
		{#each rows as row, y}
			<tr>
				{#each row.columns as column, x}
					<td class={column.value ? 'tails' : 'heads' }>
						{#if position.x === x && position.y === y}
							<a href on:click={() => handleCallTails(x, y)}>{position.status}</a>
						{:else}
							{#if column.value}
								<a href on:click={() => handleCallTails(x, y)}>T</a>
							{:else}
								<a href on:click={() => handleCallHeads(x, y)}>H</a>
							{/if}
						{/if}
					</td>
				{/each}
			</tr>
		{/each}
	</table>
	<h3>
		(tails: {tails}, heads: {heads}) <br />
		{#if flip}
			{#if tails === heads}
				{`{tie}`}
			{:else if call ? tails > heads : heads > tails}
				{`{win}`}
			{:else}
				{`{lose}`}
			{/if}
		{/if}
	</h3>
</div>

<script>
	let position = {
		status: null,
		x: null, // column
		y: null // row
	}; 
	let flip = false;
	let call; // click heads or tails
	let tails = 0; // white
	let heads = 0; // black

	function handleCallTails(x, y) {
		positionStatus(x, y)
		call = 1
		toss()
		flip = true
	}

	function handleCallHeads(x, y) {
		positionStatus(x, y)
		call = 0
		toss()
		flip = true
	}

	function positionStatus(x, y) {
		let symbol;
		if (tails === heads) {
			symbol = 'AV'
		} else {
			if (call ? tails > heads : heads > tails) {
				symbol = 'AA'
			} else {
				symbol = 'VV'
			}
		}
		position = {
			status: symbol,
			x,
			y
		}
	}

	function randomInteger(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	let rows = []
	function toss () {
		tails = 0
		heads = 0
		rows = []

		let r;
		for (r = 0; r < 8; r++) {
			rows.push({ columns: [] })
	
			let c;
			for (c = 0; c < 8; c++) {
				let flip = randomInteger(0, 1)
				if (flip === 1) {
					tails++ // white
				} else {
					heads++ // black
				}
				rows[r].columns.push({ 
					value: flip 
				})
			}
		}
	}

	// toss coin for initial page load
	toss()
</script>