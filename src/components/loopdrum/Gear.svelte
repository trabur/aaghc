<style>
  .controls {
    margin: 1em;
    text-align: center;
  }

  .parent {
    display: flex;
    height: 250px;
  }

  .gear {
    position: relative;
    width: 200px;
    height: 200px;
    margin: auto;
    border-radius: 50%;
    transition: transform 1s;
    color: #fff;
    font-size: 1em;
    text-align: center;
  }

  .gear .center {
    position: absolute;
    top: 50px;
    left: 50px;
    z-index: 10;
    width: 100px;
    height: 100px;
    background: #fff;
    border-radius: 50%;
  }

  .tooth {
    position: absolute;
    top: -25px;
    left: 75px;
    z-index: 1;
    width: 50px;
    height: 250px;
    font-size: 1.2em;
    font-weight: bold;
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
    <div class="gear" style={`background: ${gear.background}; transform: rotate(${gear.direction}${gear.deg}deg);`}>
      <div class="center"></div>
      {#each gear.teeth as tooth, i}
        <div class="tooth" style={`color: ${gear.color}; background: ${gear.background}; transform: rotate(${gear.rotateBy * i}deg);`}>
          {tooth.am}
          <div class="root">{tooth.pm}</div>
        </div>
      {/each}
    </div>
  {/each}
</div>

<div class="controls">
  <button on:click={() => turn(false)}>less</button>
  <button on:click={() => turn(true)}>more</button>
</div>

<script>
  let speed = 1
  let gears = [
    {
      direction: '+',
      deg: 0,
      rotateBy: 360 / 8,
      background: '#ff0000', // red
      color: '#fff',
      teeth: [
        { am: '000', pm: '101' },
        { am: '001', pm: '100' },
        { am: '011', pm: '110' },
        { am: '010', pm: '111' },
      ]
    },
    {
      direction: '-',
      deg: 0,
      rotateBy: 360 / 8,
      background: '#ffa500', // orange
      color: '#fff',
      teeth: [
        { am: '010', pm: '111' },
        { am: '011', pm: '110' },
        { am: '001', pm: '100' },
        { am: '000', pm: '101' },
      ]
    },
    {
      direction: '+',
      deg: 0,
      rotateBy: 360 / 8,
      background: '#008000', // green
      color: '#fff',
      teeth: [
        { am: '111', pm: '010' },
        { am: '110', pm: '011' },
        { am: '100', pm: '001' },
        { am: '101', pm: '000' },
      ]
    }
  ]

  setInterval(() => {
    gears.forEach((gear, index) => {
      gears[index].deg = gear.deg + (gear.rotateBy * speed)
    })
  }, 1000)

  function turn (direction) {
    if (direction) {
      // forward
      speed = speed + 1
    } else {
      // backward
      speed = speed - 1
    }
  }
</script>