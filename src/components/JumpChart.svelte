<script>
  let data = []
  let alphabets = [
    'AA BB CC DD EE FF GG HH II JJ KK LL MM NN OO PP QQ RR SS TT UU VV WW XX YY ZZ'
  ]

  for (let i = 0; i < 25; i++) {
    let string = alphabets[i]
    let array = string.split(' ')
    let first = array.shift()
    array.push(first)
    let s = array.join(' ')
    alphabets.push(s)
  }

  alphabets.unshift('01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26')

  alphabets.forEach((alphabet) => {
    let letters = []
    alphabet.split(' ').forEach((key) => {
      letters.push(key)
    })
    data.push(letters)
  })

 
  // add leading 0s to a number
  function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }
</script>

<style>
  .jump {
    display: flex;
    margin: 0 auto;
    width: 1000px;
  }
  .grid {
    margin: 0 auto;
    border: 1px solid #333;
    padding: 2px;
  }
  .grid-item {
    padding: 0;
    overflow: hidden;
  }
  .column {
    /* width: 100%; */
    float: left;
    margin: 2px;
  }
	.letter {
    width: 26px;
    height: 26px;
    margin: 0;
    padding: 0;
    border: 1px solid #111;
    text-align: center;
  }
</style>

<div class="jump">
  <div class="grid">
    {#each data as cipher, i}
      <div class="grid-item">
        <div class="column">
          <input type="text" class="letter" value={pad(i, 2)} />
        </div>
        {#each cipher as letter}
          <div class="column">
            <input type="text" class="letter" value={letter} />
          </div>
        {/each}
      </div>
    {/each}
  </div>
</div>