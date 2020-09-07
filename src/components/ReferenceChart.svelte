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
	.letter {
    width: 20px;
    text-align: center;
	}
</style>

<div>from number to alphabet:</div>
<table>
	{#each data as cipher, i}
    <tr>
      <td>
        <input type="text" class="letter" value={pad(i, 2)} />
      </td>
    	{#each cipher as letter}
        <td>
          <input type="text" class="letter" value={letter} />
        </td>
	    {/each}
    </tr>
	{/each}
</table>