<style>
  .controls {
    margin: 1em;
    text-align: center;
  }

  .parent {
    position: relative;
    display: flex;
    height: 450px;
  }

  .tooth {
    position: absolute;
    top: -25px;
    left: 80px;
    z-index: 21;
    width: 40px;
    height: 250px;
    font-size: 1.2em;
    font-weight: bold;
  }

  .gear8 {
    position: absolute;
    top: 125px;
    left: 125px;
    width: 200px;
    height: 200px;
    margin: auto;
    border-radius: 50%;
    color: #fff;
    font-size: 1em;
    text-align: center;
    z-index: 22;
  }

  .gear8 .center {
    position: absolute;
    top: -30px;
    left: -30px;
    z-index: 21;
    width: 260px;
    height: 260px;
    border-radius: 50%;
  }

  .gear8 .cover {
    position: absolute;
    top: 5px;
    left: 5px;
    z-index: 23;
    width: 190px;
    height: 190px;
    border-radius: 50%;
    background: #fff;
  }

  .gear16 {
    position: absolute;
    top: 50px;
    left: 50px;
    width: 350px;
    height: 350px;
    margin: auto;
    border-radius: 50%;
    color: #fff;
    font-size: 1em;
    text-align: center;
    z-index: 12;
    background: #ccc;
  }

  .gear16 .center {
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 11;
    width: 350px;
    height: 350px;
    border-radius: 50%;
  }

  .gear16 .cover {
    position: absolute;
    top: 35px;
    left: 35px;
    z-index: 13;
    width: 280px;
    height: 280px;
    border-radius: 50%;
    background: #fff;
  }

  .gear16 .tooth {
    top: 2.5px;
    left: 153.5px;
    z-index: 11;
    height: 345px;
    width: 42px;
  }

  .gear32 {
    position: absolute;
    top: 0;
    left: 0;
    width: 450px;
    height: 450px;
    margin: auto;
    border-radius: 50%;
    color: #fff;
    font-size: 1em;
    text-align: center;
    z-index: 12;
    background: #ccc;
  }

  .gear32 .center {
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 11;
    width: 450px;
    height: 450px;
    border-radius: 50%;
  }

  .gear32 .cover {
    position: absolute;
    top: 37px;
    left: 37px;
    z-index: 13;
    width: 375px;
    height: 375px;
    border-radius: 50%;
    background: #fff;
  }

  .gear32 .tooth {
    top: 5px;
    left: 202.5px;
    z-index: 11;
    height: 440px;
    width: 45px;
  }

  .root {
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 0;
    transform: rotate(180deg);
  }
</style>
<div class="parent" style="display: flex; flex-direction: row;">
  {#each gears as gear}
    <div style="flex: 1; position: relative;">
      <div class="gear32" style={`background: ${gear.background}; transform: rotate(${gear.direction}${gear.deg}deg); transition: transform ${speed}s;`}>
        <div class="center" style={`backgrounda: ${gear.background};`}></div>
        <div class="cover"></div>
        {#each gear.teeth as tooth, i}
          <div class="tooth" style={`color: ${gear.color}; background: ${gear.background}; transform: rotate(${gear.rotateBy * i}deg);`}>
            {tooth.am}
            <div class="root">{tooth.pm}</div>
          </div>
        {/each}
      </div>
      {#each gear.gears as gear}
        <div class="gear16" style={`background: ${gear.background}; transform: rotate(${gear.direction}${gear.deg}deg); transition: transform ${speed + 1}s;`}>
          <div class="center" style={`backgrounda: ${gear.background};`}></div>
          <div class="cover"></div>
          {#each gear.teeth as tooth, i}
            <div class="tooth" style={`color: ${gear.color}; background: ${gear.background}; transform: rotate(${gear.rotateBy * i}deg);`}>
              {tooth.am}
              <div class="root">{tooth.pm}</div>
            </div>
          {/each}
        </div>
        {#each gear.gears as gear8}
          <div class="gear8" style={`background: ${gear8.background}; transform: rotate(${gear8.direction}${gear8.deg}deg); transition: transform ${speed + 2}s;`}>
            <div class="center" style={`background: ${gear8.background};`}></div>
            <div class="cover"></div>
            {#each gear8.teeth as tooth, i}
              <div class="tooth" style={`color: ${gear8.color}; background: ${gear8.background}; transform: rotate(${gear8.rotateBy * i}deg);`}>
                {tooth.am}
                <div class="root">{tooth.pm}</div>
              </div>
            {/each}
          </div>
        {/each}
      {/each}
    </div>
  {/each}
</div>

<div class="controls">
  <button on:click={() => turn(false)}>slow</button>
  <button on:click={() => turn(true)}>fast</button>
</div>

<script>
  let speed = 4
  let gears = [
    {
      direction: '+',
      deg: 0,
      rotateBy: 360 / 26,
      background: '#008000', // green
      color: '#fff',
      teeth: [
        { am: 'A', pm: 'N' },
        { am: 'B', pm: 'O' },
        { am: 'C', pm: 'P' },
        { am: 'D', pm: 'Q' },
        { am: 'E', pm: 'R' },
        { am: 'F', pm: 'S' },
        { am: 'G', pm: 'T' },
        { am: 'H', pm: 'U' },
        { am: 'I', pm: 'V' },
        { am: 'J', pm: 'W' },
        { am: 'K', pm: 'X' },
        { am: 'L', pm: 'Y' },
        { am: 'M', pm: 'Z' },
      ],
      gears: [
        {
          direction: '+',
          deg: 0,
          rotateBy: 360 / 26,
          background: '#ffa500', // red
          color: '#fff',
          teeth: [
            { am: 'AA', pm: 'NN' },
            { am: 'BB', pm: 'OO' },
            { am: 'CC', pm: 'PP' },
            { am: 'DD', pm: 'QQ' },
            { am: 'EE', pm: 'RR' },
            { am: 'FF', pm: 'SS' },
            { am: 'GG', pm: 'TT' },
            { am: 'HH', pm: 'UU' },
            { am: 'II', pm: 'VV' },
            { am: 'JJ', pm: 'WW' },
            { am: 'KK', pm: 'XX' },
            { am: 'LL', pm: 'YY' },
            { am: 'MM', pm: 'ZZ' },
          ],
          gears: [
            {
              direction: '+',
              deg: 0,
              rotateBy: 360 / 26,
              background: '#ff0000', // green
              color: '#fff',
              teeth: [
                { am: 'A', pm: 'N' },
                { am: 'B', pm: 'O' },
                { am: 'C', pm: 'P' },
                { am: 'D', pm: 'Q' },
                { am: 'E', pm: 'R' },
                { am: 'F', pm: 'S' },
                { am: 'G', pm: 'T' },
                { am: 'H', pm: 'U' },
                { am: 'I', pm: 'V' },
                { am: 'J', pm: 'W' },
                { am: 'K', pm: 'X' },
                { am: 'L', pm: 'Y' },
                { am: 'M', pm: 'Z' },
              ]
            },
          ]
        },
      ]
    }
  ]

  // duplicate disk
  let copy = JSON.parse(JSON.stringify(gears))

  // reverse disk direction
  copy.forEach((gear, i1) => {
    copy[i1].direction = '-'
    gear.gears.forEach((gear, i2) => {
      copy[i1].gears[i2].direction = '-'
      gear.gears.forEach((gear, i3) => {
        gear.direction = '-'
      })
    })
  })
  gears.push(copy[0])

  setInterval(() => {
    gears.forEach((gear, index) => {
      gears[index].deg = gear.deg + (gear.rotateBy * (gear.teeth.length * 2 - 1))
    })
  }, 8000)

  setInterval(() => {
    gears.forEach((gear, i1) => {
      gear.gears.forEach((gear, i2) => {
        gears[i1].gears[i2].deg = gear.deg + (gear.rotateBy * (gear.teeth.length * 2 - 1))
      })
    })
  }, 16000)

  setInterval(() => {
    gears.forEach((gear, i1) => {
      gear.gears.forEach((gear, i2) => {
        gear.gears.forEach((gear, i3) => {
          gears[i1].gears[i2].gears[i3].deg = gear.deg + (gear.rotateBy * (gear.teeth.length * 2 - 1))
        })
      })
    })
  }, 32000)

  function turn (direction) {
    if (direction) {
      // faster
      speed = speed - 0.4
    } else {
      // slower
      speed = speed + 0.4
    }
  }
</script>