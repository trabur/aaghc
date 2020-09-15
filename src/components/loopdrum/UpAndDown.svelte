<style>
  .Loop {
    position: relative;
    height: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  section {
    position: relative;
    text-align: center;
    min-height: 300px;
    max-height: 700px;
    height: 80%;
  }

  ::scrollbar {
    display: none;
  }
  
  .red {
    background: #ff0000;
    color: #fff;
  }
  .orange {
    background: #ffa500;
    color: #fff;
  }
  .yellow {
    background: #ffff00;
    color: #111;
  }
  .green {
    background: #008000;
    color: #fff;
  }
  .blue {
    background: #0000ff;
    color: #fff;
  }
  .purple {
    background: #4b0082;
    color: #fff;
  }

  h1 {
    margin: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    font-size: 80px;
    letter-spacing: 5px;
    text-transform: uppercase;
  }

  .controls {
    margin: 1em;
    position: relative;
    text-align: center;
  }
</style>

<main id='myDiv' class="Loop js-loop" style={`height: ${height}px;`}>
  <section class="red">
    <h1>and</h1>
  </section>
  <section class="orange">
    <h1>or</h1>
  </section>
  <section class="yellow">
    <h1>not</h1>
  </section>
  <section class="green">
    <h1>and</h1>
  </section>
  <section class="blue">
    <h1>or</h1>
  </section>
  <section class="purple">
    <h1>not</h1>
  </section>

  <!--
  These blocks are the same as the first blocks to get that looping illusion going.
  You need to add clones to fill out a full viewport height.
  -->
  <section class="red is-clone">
    <h1>and</h1>
  </section>
  <section class="orange is-clone">
    <h1>or</h1>
  </section>
</main>
{#if settings}
  <div class="controls">
    <button on:click={() => direction(false)}>reverse</button>
    <button on:click={() => play(!watch)}>{watch ? 'stop' : 'play'}</button>
    <button on:click={() => direction(true)}>forward</button>
  </div>
{/if}


<script>
  import { onMount } from 'svelte';
  import zenscroll from 'zenscroll'

  export let settings = false
  export let height = 800
  export let move = true // forward or reverse
  export let watch = true // stop or play

  function direction(enable) {
    move = enable
  }

  function play(enable) {
    watch = enable
  }

  onMount(async () => {
    let defaultDuration = 500
    let edgeOffset = 0
    let myDiv = document.getElementById("myDiv")
    let myScroller = zenscroll.createScroller(myDiv, defaultDuration, edgeOffset)
    let myDivHeight = myDiv.scrollHeight

    setInterval(() => {
      if (!myDiv.matches(":hover")) {
        // ok, mouse is not in div
        if (watch) {
          if (move) {
            myScroller.toY(scrollPos + 200, defaultDuration) // forward
          } else {
            let m = scrollPos - 200
            if (m <= 0) {
              // Scroll to the bottom when you reach the top
              setScrollPos(scrollHeight - clonesHeight);
            }
            reCalc()
            myScroller.toY(scrollPos - 200, defaultDuration) // reverse
          }
        }
      }
    }, 2000)
  })

  let doc;
  let context;
  let clones;

  let disableScroll = false
  let scrollHeight = 0
  let scrollPos = 0
  let clonesHeight = 0
  let i = 0

  function getScrollPos () {
    return (context.pageYOffset || context.scrollTop) - (context.clientTop || 0);
  }

  function setScrollPos (pos) {
    context.scrollTop = pos;
  }

  function getClonesHeight () {
    clonesHeight = 0;

    for (i = 0; i < clones.length; i += 1) {
      clonesHeight = clonesHeight + clones[i].offsetHeight;
    }

    return clonesHeight;
  }

  function reCalc () {
    scrollPos = getScrollPos();
    scrollHeight = context.scrollHeight;
    clonesHeight = getClonesHeight();

    if (scrollPos <= 0) {
      setScrollPos(1); // Scroll 1 pixel to allow upwards scrolling
    }
  }

  function scrollUpdate () {
    if (!disableScroll) {
      scrollPos = getScrollPos();

      if (clonesHeight + scrollPos >= scrollHeight) {
        // Scroll to the top when you’ve reached the bottom
        setScrollPos(1); // Scroll down 1 pixel to allow upwards scrolling
        disableScroll = true;
      } else if (scrollPos <= 0) {
        // Scroll to the bottom when you reach the top
        setScrollPos(scrollHeight - clonesHeight);
        disableScroll = true;
      }
    }

    if (disableScroll) {
      // Disable scroll-jumping for a short time to avoid flickering
      window.setTimeout(function () {
        disableScroll = false;
      }, 40);
    }
  }

  function init () {
    reCalc();
    
    context.addEventListener('scroll', function () {
      window.requestAnimationFrame(scrollUpdate);
    }, false);

    window.addEventListener('resize', function () {
      window.requestAnimationFrame(reCalc);
    }, false);
  }

  onMount(async () => {
    // let context = forever
    doc = window.document
    context = doc.querySelector('.js-loop')
    clones = context.querySelectorAll('.is-clone')

    // if (document.readyState !== 'loading') {
      init()
    // } else {
    //   doc.addEventListener('DOMContentLoaded', init, false)
    // }

    setScrollPos(Math.round(clones.getBoundingClientRect().top + getScrollPos() - (context.offsetHeight - clones.offsetHeight) / 2));
  })
</script>