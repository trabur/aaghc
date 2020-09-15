<style>
  .scene {
    margin: 0 auto;
    position: relative;
    perspective: 1000px;
  }

  .carousel {
    width: 100%;
    height: 100%;
    position: absolute;
    transform-style: preserve-3d;
    transition: transform 1s;
  }

  .carousel__cell {
    position: absolute;
    left: 10px;
    top: 10px;
    line-height: 116px;
    font-size: 80px;
    font-weight: bold;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .controls {
    margin: 1em;
    text-align: center;
  }
</style>

<div class="scene" style={`width: ${cellWidth}px; height: ${cellHeight}px;`}>
  <div class={`carousel`} style={`transform: translateZ(-${translateZ}px) rotateY(${deg}deg);`}>
    {#each cells as cell, i}
      <div class="carousel__cell" style={`
        width: ${cellWidth}px;
        height: ${cellHeight}px;
        transform: rotateY(${i * turnBy}deg) translateZ(${translateZ}px);
        color: ${cell.color};
        background: ${cell.background};
      `}>{cell.name}</div>
    {/each}
  </div>
</div>

<div class="controls">
  <button on:click={() => turn(false)}>back</button>
  <button on:click={() => turn(true)}>next</button>
</div>

<script>
  let cells = [
    { name: 'AA', background: '#ff0000', color: '#fff' }, // red
    { name: 'BB', background: '#ffa500', color: '#fff' }, // orange
    { name: 'CC', background: '#ffff00', color: '#111' }, // yellow
    { name: 'DD', background: '#008000', color: '#fff' }, // green
    { name: 'EE', background: '#0000ff', color: '#fff' }, // blue
    { name: 'FF', background: '#4b0082', color: '#fff' }, // purple
    { name: 'GG', background: '#ff0000', color: '#fff' }, 
    { name: 'HH', background: '#ffa500', color: '#fff' }, 
    { name: 'II', background: '#ffff00', color: '#111' }, 
    { name: 'JJ', background: '#008000', color: '#fff' }, 
    { name: 'KK', background: '#0000ff', color: '#fff' }, 
    { name: 'LL', background: '#4b0082', color: '#fff' }, 
    { name: 'MM', background: '#ff0000', color: '#fff' }, 
    { name: 'NN', background: '#ffa500', color: '#fff' }, 
    { name: 'OO', background: '#ffff00', color: '#111' }, 
    { name: 'PP', background: '#008000', color: '#fff' }, 
    { name: 'QQ', background: '#0000ff', color: '#fff' }, 
    { name: 'RR', background: '#4b0082', color: '#fff' }, 
    { name: 'SS', background: '#ff0000', color: '#fff' }, 
    { name: 'TT', background: '#ffa500', color: '#fff' }, 
    { name: 'UU', background: '#ffff00', color: '#111' }, 
    { name: 'VV', background: '#008000', color: '#fff' }, 
    { name: 'WW', background: '#0000ff', color: '#fff' }, 
    { name: 'XX', background: '#4b0082', color: '#fff' }, 
    { name: 'YY', background: '#ff0000', color: '#fff' }, 
    { name: 'ZZ', background: '#ffa500', color: '#fff' }, 
  ]
  let deg = 0
  let cellWidth = 200
  let cellHeight = 120
  let numberOfCells = cells.length
  let turnBy = 360 / numberOfCells
  var translateZ = Math.round( ( cellWidth / 2 ) / Math.tan( Math.PI / numberOfCells ) );
  let move = true // direction

  function turn (direction) {
    move = direction
    if (move) {
      // forward
      deg = deg - turnBy
    } else {
      // backward
      deg = deg + turnBy
    }
  }

  setInterval(() => {
    if (move === false) {
      // switch directions to not go past the beginning
      if (deg >= 3600 - turnBy) {
        move = true
      }
    } else if (move === true) {
      // switch directions to not go past the end
      if (deg <= -360 + turnBy) {
        move = false
      }
    }
    turn(move)
  }, 3000)
</script>