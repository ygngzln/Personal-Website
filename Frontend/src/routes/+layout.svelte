<script lang="ts">
  import {onMount} from 'svelte'
  import {fly} from 'svelte/transition'
  import {circInOut, elasticOut} from 'svelte/easing'
  import axios from 'axios'

  import Preload from '../lib/Preload.svelte'
  import Sbtn from '../lib/Sbtn.svelte'

  import G from '../assets/github.png'
  import H from '../assets/he2.png'

  let loaded:boolean = false;

  let stringstart:string = import.meta.env.VITE_BACKEND;

  const url = stringstart + "api/v1/projects";

  async function wakeup() {
    let projects:any = await axios.get(url);
  }

  onMount(() => {
    wakeup();
    loaded = true;
  })
</script>

{#if !loaded}
  <Preload/>
{:else}
    {#if loaded}
    <div id="head">
      <div class="link" transition:fly="{{ y: -100, easing: elasticOut, duration:1250 }}">
        <a href="/About">About Me</a>
      </div>
      <div class="link" transition:fly="{{ y: -200, easing: circInOut, duration:600 }}">
        <a href="/Projects">Projects</a>
      </div>
      <div id="title">
        <a href="/"><img src={H} alt="Logo didn't load."/>Home</a>
      </div>
      <div class="link" transition:fly="{{ y: -100, easing: circInOut, duration:200 }}">
        <a href="/Updates">Updates</a>
      </div>
      <div class="link" transition:fly="{{ y: -250, easing: elasticOut, duration:1250 }}">
        <a href="/QNA">QNA</a>
      </div>
    </div>
    <slot id="pageContent"/>
    <footer>
      <div id="footerContent">
        <span id="footerText">
          © 2026 Developed by Yigeng Lin 
        <span class="normalLinks">
          <a href="/">Home</a>
          <a href="/About">About Me</a>
          <a href="/Projects">Projects</a>
          <a href="/Updates">Updates</a>
          <a href="/QNA">QNA</a>
          <a href="/Pictures">Pictures</a>
        </span>
      </span>
        <span id="others">
          <Sbtn stuff={{link: "https://github.com/ygngzln", title:"Github", img: G}} />
        </span>
      </div>
    </footer>
    {/if}
{/if}
<style>
  @import url('https://fonts.googleapis.com/css2?family=Macondo&family=Rajdhani:wght@300&family=Quicksand:wght@300&display=swap&family=DynaPuff&display=swap&family=Playfair+Display&display=swap&family=Aboreto');
  @import url('https://fonts.googleapis.com/css2?family=Michroma&display=swap');
  @font-face {
    font-family: 'Chicken';
    src: url('../assets/fonts/chicken.otf');
  }
  @font-face {
    font-family: 'Cool';
    src: url('../assets/fonts/coolvetica.otf')
  }
  @font-face {
    font-family: 'NK57';
    src: url("../assets/fonts/nk57cdrg.otf")
  }
  @font-face {
    font-family: 'Nostalgia';
    src: url('../assets/fonts/nostalgia.ttf')
  }
  @font-face {
    font-family: 'Sunflower';
    src: url('../assets/fonts/sunflower.otf')
  }
  @font-face {
    font-family: 'Quat';
    src: url('../assets/fonts/Quat.ttf')
  }
  @font-face {
    font-family: 'Fanwood';
    src: url('../assets/fonts/fanwood.ttf')
  }
  @font-face {
    font-family: 'Playfair';
    src: url('../assets/fonts/pfdisplay.ttf')
  }
  @font-face {
    font-family: 'Alice';
    src: url('../assets/fonts/alice.ttf')
  }

  :global(body) {
    height:100%;
    max-width: 100%;
    background: black;
    margin: 0;
    font-size: 20px;
  }

  :global(html) {
    scrollbar-color: rgb(243, 240, 242) rgb(28, 0, 32);
    scrollbar-width: thin;
    font-size: 20px;
  }

  :global(html)::-webkit-scrollbar {
    width: thin;
  }

  :global(html)::-webkit-scrollbar-track {
    background: black;
  }

  :global(html)::-webkit-scrollbar-thumb {
    background: white;
  }

  :global(a) {
    text-decoration: none;
  }

  #head {
    background: linear-gradient(rgb(187, 196, 204),rgb(151, 161, 169));
    width: 100%;
    height: 3em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-bottom: 0.1em solid rgb(130, 133, 139);
    padding: 0.4em 0;
  }

  #title {
    position: relative;
    margin: 0 1.25rem 0 0.8rem;
  }

  #title > :global(a) {
    display: flex;
    align-items: center;
    color: rgb(149, 176, 187);
    text-shadow: 0.02em 0.02em 0 black, 0.02em -0.02em 0 black, -0.02em 0.02em 0 black, -0.02em -0.02em black;
    font-size: 2.1em;
    font-family: 'Macondo', cursive;
    font-weight: bold;
    height: 90%;
    column-gap: 0.4rem;
  }

  #title img {
    width: 1.5em;
    height: 1.5em;
  }

  #title:hover > :global(a) {
    cursor: pointer;
    color: #ced7e0;
  }

  #title:hover img {
    content: url("../assets/he.png")
  }

  .link {
    font-size: 1.2em;
    font-weight: bolder;
    border-radius: 3px;
    border: 0.06em solid #083344;
    background-color: rgb(219, 225, 232);
    font-family: 'Rajdhani', sans-serif;
    margin: 0.1em 0.2em;
    box-sizing: border-box;
    white-space: nowrap;
    display: inline-block;
  }

  .link:hover {
    background-color: #95b0bb;
  }

  .link > :global(a) {
    padding: 0.25rem 0.26rem;
    color: black;
    height: 100%;
    text-decoration: none;
    transition: all 0.8s;
    display: inline-block;
  }

  .link > :global(a):hover {
    font-size: 1.1em;
    cursor: pointer;
    transition: all 0.4s;
  }

  .link > :global(a):focus {
    outline-width: 0;
    box-shadow: none;
  }

  #pageContent {
    position: relative;
    min-height: 90%;
  }
  
  #footerContent {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: left;
  }

  #footerText {
    width: 70%;
    position: relative;
    padding-left: 0.75em;
    font-family: monospace;
    font-size: 0.75em;
  }

  .normalLinks > :global(a) {
    margin: 0 0.6em;
    color: black;
    font-family: 'Rajdhani', sans-serif;
    font-weight: bold;
  }

  #others {
    width: 29%;
    position: relative;
    padding: 0.5em 0;
    display: flex;
    align-items: center;
    justify-content: right;
  }

  footer {
    background-color: white;
    height: 13%;
    display: flex;
    align-items: center;
    justify-content: left;
  }
  
  @media screen and (max-width: 414px) {
    :global(body) {
      font-size: 14px;
    }
    :global(html) {
      font-size: 14px;
    }
    #title {
      padding: 0 0.2rem;
      margin: 0 0.3rem 0 0.38rem;
      font-size: 0.9em;
    }
    .link {
      font-size: 1em;
    }
    .normalLinks {
      display: flex;
      flex-direction: row;
      column-gap: 1rem;
    }
    .normalLinks > :global(a) {
      margin: 0 0;
      color: black;
      font-family: 'Rajdhani', sans-serif;
      font-weight: bold;
    }
    #others {
      width: 28%;
    }
  }
</style>