<style>
  .controls {
    margin: 1em;
    text-align: center;
  }

  .parent {
    position: relative;
    display: flex;
    height: 350px;
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
    top: 75px;
    left: 75px;
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
    top: 0;
    left: 0;
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

  .root {
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 0;
    transform: rotate(180deg);
  }
</style>
<div class="parent">
  {#each gears as gear}
    <div class="gear16" style={`background: ${gear.background}; transform: rotate(${gear.direction}${gear.deg}deg); transition: transform ${speed}s;`}>
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
      <div class="gear8" style={`background: ${gear8.background}; transform: rotate(${gear8.direction}${gear8.deg}deg); transition: transform ${speed}s;`}>
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
            { am: 'A', pm: 'Z' },
            { am: 'B', pm: 'Y' },
            { am: 'C', pm: 'X' },
            { am: 'D', pm: 'W' },
            { am: 'E', pm: 'V' },
            { am: 'F', pm: 'U' },
            { am: 'G', pm: 'T' },
            { am: 'H', pm: 'S' },
            { am: 'I', pm: 'R' },
            { am: 'J', pm: 'Q' },
            { am: 'K', pm: 'P' },
            { am: 'L', pm: 'O' },
            { am: 'M', pm: 'N' },
          ]
        },
      ]
    },
    // {
    //   direction: '-',
    //   deg: 0,
    //   rotateBy: 360 / 8,
    //   background: '#008000', // green
    //   color: '#fff',
    //   teeth: [
    //     { am: 'EE', pm: '11' },
    //     { am: 'FF', pm: '22' },
    //     { am: 'GG', pm: '33' },
    //     { am: 'HH', pm: '44' },
    //   ]
    // }
  ]

  setInterval(() => {
    gears.forEach((gear, index) => {
      gears[index].deg = gear.deg + (gear.rotateBy * (gear.teeth.length * 2 - 1))
    })
  }, 8000)

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