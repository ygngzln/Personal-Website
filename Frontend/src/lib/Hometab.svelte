<script lang="ts">
  import {fly} from 'svelte/transition'
  import {circIn} from 'svelte/easing'
  export let tabmsg: string;
  export let msg: string;
  let open:boolean = true;

  function click(){
    open = !open;
  }
</script>

<span id="main">
  <div id="tabTitle" on:click={() => click()}>{tabmsg}</div>
  {#if open}
    <div id="tabButton" transition:fly|local={{y: 100, duration: 400, easing: circIn}}>
      <div class="tabText">{msg}</div>
    </div>
  {/if}
</span>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap');

  #main {
    display: table-cell;
    vertical-align: top;
    padding: 0 40px;
    height: 2
  }

  #tabTitle {
    position: relative;
    text-align: center;
    font-size: 35px;
    width: 550px;
    border: 2px solid red;
    padding: 5.5px 18px;
    background-color: salmon;
    border-radius: 35% 35% 0 0;
    font-family: 'Chakra Petch', sans-serif;
    font-weight: bold;
  }

  #tabTitle:hover {
    background-color: gainsboro;
    font-size: 36px;
    cursor:pointer;
  }

  #tabButton {
    overflow-y: auto;
    padding: 12px 20px;
    width: 550px;
    height: 170px;
    display: inline-block;
    color: white;
    background-color: rgb(0, 0, 0, 0.4);
  }

  #tabButton::-webkit-scrollbar {
    border-radius: 4px;
    background: black;
    width: 8px;
  }

  #tabButton::-webkit-scrollbar-thumb {
    background: maroon;
    width: 4px
  }

  .tabText {
    text-align: left;
    font-size: 20px;
    padding: 4px;
    background-color: rgb(0,0,0,0.4);
    font-family: 'Quicksand', sans-serif;
    font-weight: bold;
  }

  @media screen and (max-width: 414px) {
    #main {
      padding: 0 10px;
    }

    #tabTitle {
      font-size: 18px;
      width: 155px;
      border: 2px solid red;
      padding: 4px 12px;
    }

    #tabTitle:hover {
      background-color: salmon;
      font-size: 15px;
    }

    #tabButton {
      overflow-y: auto;
      padding: 12px 8px;
      width: 168px;
    }

    .tabText {
      font-size: 14px;
      padding: 4px;
    }
  }
</style>