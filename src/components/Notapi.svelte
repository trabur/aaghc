<style>
  .container {
    position: relative;
    display: grid;
    grid-gap: 0px;
    /* grid-template-rows: 80px 10px 10px 30px; */
    grid-template-rows: 8fr 1fr 1fr 3fr;
    grid-template-columns: 13fr 2fr 1fr 5fr;
    height: calc(260px * 2);
    width: calc(420px * 2);
    margin: 0 auto;
    border: 2px solid #000;
  }

  .item {
    color: #111;
    background-color: #ddd;
    border: 2px solid #000;
  }

  .box1,
  .box8,
  .box5,
  .box3,
  .box2 {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .box13 {
    grid-row: 1 / 5;
  }
  .box8 {
    grid-column: 2 / 5;
  }
  .box5 {
    grid-row: 2 / 5;
    grid-column: 4 / 5; 
  }
  .box3 {
    grid-row: 4 / 5;
    grid-column: 2 / 4;  
  }
  .box2 {
    grid-row: 2 / 4;
    grid-column: 2 / 3;
  }
</style>

<div class="container">
  <div class="item box13">
    <UpAndDown />
  </div>
  <div class="item box8">NOT</div>
  <div class="item box5">NOT</div>
  <div class="item box3">AND</div>
  <div class="item box2">AND</div>
  <div class="item box1">OR</div>
  <div class="item box1">OR</div>
</div>

<script>
  import UpAndDown from './loopdrum/UpAndDown.svelte'
</script>