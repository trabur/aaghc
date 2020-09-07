<style>
  .board {
    position: relative;
    width: 100vw;
    height: 100vw;
    color: #111;
  }
  
  .edge {
    position: absolute;
    right: 1em;
    left: 1em;
    top: 1em;
    bottom: 1em;
    padding: 1em;
    background: #000;
  }

  .dark .board .edge {
    background: #fff;
  }

  .field {
    margin: 1em;
    background: #DAE8CE;
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
  }

  .corner {
    width: calc(15% - 0.2em);
    height: calc(15% - 0.2em);
    border: 0.2em solid #000;
    position: absolute;
  }

  .field .go {
    right: 0;
    bottom: 0;
  }

  .field .in-jail {
    left: 0;
    bottom: 0;
  }

  .field .free-parking {
    top: 0;
    left: 0;
  }

  .field .goto-jail {
    top: 0;
    right: 0;
  }

  .field .move-west {
    display: flex;
    flex-direction: row-reverse;
    border: 0.2em solid #000;
    position: absolute;
    right: 15%;
    left: 15%;
    bottom: 0;
    height: calc(15% - 0.2em);
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .field .move-north {
    border: 0.2em solid #000;
    position: absolute;
    left: 0;
    top: 15%;
    bottom: 15%;
    width: calc(15% - 0.2em);
  }

  .field .move-east {
    border: 0.2em solid #000;
    position: absolute;
    right: 15%;
    left: 15%;
    top: 0;
    height: calc(15% - 0.2em);
  }

  .field .move-south {
    border: 0.2em solid #000;
    position: absolute;
    right: 0;
    top: 15%;
    bottom: 15%;
    width: calc(15% - 0.2em);
  }

  .move-west > li {
    border-left: 0.2em solid #000;
    flex: 1;
    height: 100%;
    float: right;
  }

  .move-west > li:last-child {
    border-left: 0;
  }

  .move-west .one {
    border-top: 2em solid #955436;
  }

</style>

<div class="board">
  <div class="edge">
    <div class="field">
      <div class="corner go">GO</div>
      <div class="corner in-jail">IN JAIL</div>
      <div class="corner free-parking">FREE PARKING</div>
      <div class="corner goto-jail">GO TO JAIL</div>
      <ul class="move-west">
        <li>
          <div class="one">one</div>
        </li>
        <li>
          <div class="two">two</div>
        </li>
        <li>
          <div class="three">three</div>
        </li>
        <li>
          <div class="four">four</div>
        </li>
        <li>
          <div class="five">five</div>
        </li>
        <li>
          <div class="six">six</div>
        </li>
        <li>
          <div class="seven">seven</div>
        </li>
        <li>
          <div class="eight">eight</div>
        </li>
        <li>
          <div class="nine">nine</div>
        </li>
      </ul>
      <div class="move-north">test</div>
      <div class="move-east">test</div>
      <div class="move-south">test</div>
    </div>
  </div>
</div>