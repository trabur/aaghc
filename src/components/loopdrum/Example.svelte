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

  /* body {
    font-family: "Avenir Next", Helvetica, sans-serif;
    font-weight: normal;
    font-size: 100%;
  } */

  .red {
    background: #FF4136;
  }
  .green {
    background: #2ECC40;
  }
  .blue {
    background: #0074D9;
  }
  .orange {
    background: rebeccapurple;
  }

  h1 {
    margin: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    font-size: 80px;
    letter-spacing: 5px;
    color: #fff;
    text-transform: uppercase;
  }
</style>

<main class="Loop js-loop">
  <section class="green">
    <h1>One</h1>
  </section>
  <section class="red">
    <h1>For</h1>
  </section>
  <section class="blue">
    <h1>All</h1>
  </section>
  <section class="orange">
    <h1>And</h1>
  </section>
  <section class="blue">
    <h1>All</h1>
  </section>
  <section class="red">
    <h1>For</h1>
  </section>

  <!--
  These blocks are the same as the first blocks to get that looping illusion going.
  You need to add clones to fill out a full viewport height.
  -->
  <section class="green is-clone">
    <h1>One</h1>
  </section>
  <section class="red is-clone">
    <h1>For</h1>
  </section>
</main>

<script>
  import { onMount } from 'svelte';

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
      context.log(':)')
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