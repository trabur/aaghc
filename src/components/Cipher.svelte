<script>
  import { onMount } from 'svelte';

  const factors = number => Array
    .from(Array(number + 1), (_, i) => i)
    .filter(i => number % i === 0)

  function testPrime (n) {
    if (n === 1) {
      return false;
    } else if (n === 2) {
      return true;
    } else {
      for (var x = 2; x < n; x++) {
        if (n % x === 0) {
          return false;
        }
      }
      return true;
    }
  }

  let cipherData = []
  let ciphers = [
    '-- ND :: /I /N /Z /K BB',
    '-- DN :: /K /Z /N /I BB',
    '-- PP :: :: -- BB',
    '-- JU :: XX // BB',
    '-- RT VR LL :: BB',
    '-- AA :: M/ BB',
    '-- VV :: W/ BB',
    '-- RT TH LL :: BB',
    '-- HH :: /I AD /I QQ /H BB',
    '-- EE :: /E DA /F QQ /L BB',
    '-- RT KK LL :: BB',
    '-- NN :: KK OG MM ND BB',
    '-- ZZ :: KK GO MM ND BB'
  ]
  ciphers.forEach((cipher) => {
    let letters = []
    cipher.split(' ').forEach((key) => {
      letters.push(key)
    })
    cipherData.push(letters)
  })

  let messageData = []
  let messages = [
    '// board encrypt plug start move from left to right move from top to bottom finish return',
    '// board decrypt plug finish move from top to bottom move from left to right start return',
    '// board PP plug plugboard return',
    '// board JU plug jam reflect return',
    '// board cipher text vector protocol plug return',
    '// board AA plug UP return',
    '// board VV plug DOWN return',
    '// board cipher text math protocol plug return',
    '// board rotors plug start stack above start signal reflect return',
    '// board reflector plug rotor stack below key signal node return',
    '// board cipher text turn protocol plug return',
    '// board NN plug turn clockwise to encrypt decrypt return',
    '// board ZZ plug turn counter clockwise to decrypt encrypt return'
  ]
  messages.forEach((message) => {
    let tracks = []
    message.split('//').forEach((track) => {
      if (track === '') {
        tracks.push('//')
      } else {
        // remove garbage
        track = track.replace(/[\n\r]/g, '')
        // turn spaces into /
        track = track.replace(/[ ]/g, '/')
        // make an even amount of chars
        if (track.length % 2 == 0) {
          // there is an odd amount
          track = `${track}/`
        }
        // split into letters
        let letters = []
        for (let l = 1; l < track.length; l++) {
          // check to see if this is an even letter
          if (l % 2 == 1) { 
            let letter = track.substring(l, l + 2)
            letters.push(letter)
          }
        }
        // console.log('letters:', letters)
        letters.forEach((letter) => {
          tracks.push(letter)
        })
      }
    })
    messageData.push(tracks)
  })

  // console.log('cipherData:', cipherData)
  // cipherData: [
  //   [
  //     '--', 'ND', '::',
  //     '/I', '/N', '/Z',
  //     '/K', 'BB'
  //   ],
  //   ...
  // ]

  let tiles = []
  cipherData.forEach((letters) => {
    // stack the letters if their total is prime so we can tile
    if (testPrime(letters.length)) {
      let aa = []
      let i = 0
      while (i < 2) {
        letters.forEach((data) => {
          aa.push(data)
        })
        i++
      }
      letters = aa
    }
    // console.log('letters:', letters)
  
    // find the number of factors
    let f = factors(letters.length)
    // console.log('factors:', f)
    let total = f.length
    // console.log('total:', total)
    
    // position keys
    let x, y
    if (f.length % 2 == 0) {
      // if there is an even number of factors pick the two center-most numbers
      x = (total / 2)
      y = (total / 2) + 1
    } else {
      // if there is an odd number of factors pick the center-most number twice
      x = y = ((total - 1) / 2) + 1
    }
    // console.log(`x: ${x}, y: ${y}`)

    // position values
    let a = f[y - 1] // pages scroll up and down so
    let b = f[x - 1] // order y and x this way to fit tall data
    // console.log(`a: ${a}, b: ${b}`)

    // split into a tile
    let columns = []
    let counter = 0
    for (let i = 1; i < a + 1; i++) {
      let row = []
      for (let ii = 1; ii < b + 1; ii++) {
        let letter = letters[counter++]
        row.push(letter)
        // console.log('letter', letter)
      }
      // console.log('row', row)
      columns.push(row)
    }
    // console.log('columns', columns)

    // finish
    tiles.push({
      columns: a,
      rows: b,
      data: columns
    })
  })
  // console.log('tiles:', tiles[0].data)

  let grid;
  let Isotope;
  onMount(async () => {
    const module = await import('isotope-layout')
    Isotope = module.default
    let iso = new Isotope(grid, {
      // options...
      itemSelector: '.grid-item',
      masonry: {
        // columnWidth: 10
      }
    })
  })
</script>

<style>
  .grid {
    width: 600px;
    margin: 0 auto;
  }
  .grid-item {
    border: 1px solid #333;
    padding: 0;
    margin: 13px;
  }
  .column {
    width: 100%;
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

<div bind:this="{grid}" class="grid" data-isotope={`{ "itemSelector": ".grid-item"`}>
  {#each tiles as message}
    <div class="grid-item">
      {#each message.data as columns}
        <div class="column">
          {#each columns as letter}
            <!-- <div class="row"> -->
              <input type="text" class="letter" value={letter} />
            <!-- </div> -->
          {/each}
        </div>
      {/each}
    </div>
  {/each}
</div>

<!-- <div>cipher:</div>
<table>
	{#each cipherData as cipher}
    <tr>
    	{#each cipher as letter}
        <td>
          <input type="text" class="letter" value={letter} />
        </td>
	    {/each}
    </tr>
	{/each}
</table>

<div>message:</div>
<table>
	{#each messageData as message}
    <tr>
    	{#each message as letter}
        <td>
          <input type="text" class="letter" value={letter} />
        </td>
	    {/each}
    </tr>
	{/each}
</table> -->