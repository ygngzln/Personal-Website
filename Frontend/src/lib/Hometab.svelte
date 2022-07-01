<script lang="ts">
    import {fly} from 'svelte/transition'
    import {circIn} from 'svelte/easing'
    export let tabmsg;
    export let msg;
    export let left;
    export let top;
    let open;

    function click(){
        open = !open;
    }
</script>

<main style="--left: {left}%; --top: {top}px; --newtop: {parseInt(top)+59}px">
<button id="paratitle" on:click={() => click()}>{tabmsg}</button>
{#if open}
  <div id="para" in:fly={{duration: 550, easing: circIn}}>
    {#each msg as x}
      <div class="para">{x}</div>
    {/each}
  </div>
{/if}
</main>

<style>
  #paratitle {
    text-decoration: underline;
    position: absolute;
    left: var(--left);
    transform: translateX(-50%);
    width: 36%;
    top: var(--top);
    border: none;
    font-size: 35px;
    z-index: 1;
    padding: 7.5px;
    background-color: darkcyan;
    border-radius: 20% 20% 0 0;
    font-family: 'Quicksand', sans-serif;
    font-weight: bold;
  }

  #paratitle:hover {
    background-color: seagreen;
    font-size: 36px;
    cursor:pointer;
  }

  #para {
    position: absolute;
    left: var(--left);
    transform: translateX(-50%);
    top: var(--newtop);
    width: 35.3%;
    overflow-y: auto;
    max-height: 60%;
    padding: 12px 5px;
    background-color: lightseagreen;
  }

  #para::-webkit-scrollbar {
    border-radius: 4px;
    background: seagreen;
    width: 8px;
  }

  #para::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: mediumaquamarine;
  }

  .para {
    text-align: left;
    font-size: 20px;
    z-index: 2;
    background-color: lightseagreen;
    font-family: 'Quicksand', sans-serif;
    font-weight: bold;
  }
</style>