<script lang="ts">
  import {onMount} from 'svelte'
  import {fly} from 'svelte/transition'
  import {circInOut, elasticOut} from 'svelte/easing'
  import Homepage from './lib/Homepage.svelte'
  import Blog from './lib/Blog.svelte'
  import About from './lib/About.svelte'
  import Projects from './lib/Projects.svelte'
  import Preload from './lib/Preload.svelte'
  import Fhilt from './lib/Fhilt.svelte'
  import Admin from './lib/Admin.svelte'
  import Sbtn from './lib/Sbtn.svelte'
  import { Router, Link, Route } from "svelte-routing";
  import G from './assets/github.png'
  import WF from './assets/wynnforumslogo.png'
  import WS from './assets/wynnlogo.png'
  import R from './assets/repllogo.png'

  let loaded = false;
  let pages = false;

  function openPages(){
    pages = !pages
  }

  onMount(() => {
    setTimeout(function(){
      loaded = true
    }, 500)
  })
</script>

{#if !loaded}
<Preload />
{/if}

<Router url="">
<div id="head" class="abs">
  <div id="title"><Link to="/">Yigeng L</Link></div>
  <a href="https://eggsite.herokuapp.com">EGGSITE LINK</a>
</div>
<div id="pageContainer">
  <button id="pages" on:click={openPages}>Pages ></button>
  {#if pages}
      <span id="nav">
        <div class="link" transition:fly="{{ y: -100, easing: circInOut, duration:200 }}"><Link to="/About">About Me</Link></div>
        <div class="link" transition:fly="{{ y: -200, easing: circInOut, duration:400 }}"><Link to="/Projects">Projects</Link></div>
        <div class="link" transition:fly="{{ y: -300, easing: elasticOut, duration:1150 }}"><Link to="/Blog">Blog</Link></div>
      </span>
  {/if}
</div>
<div id="others">
  <Sbtn stuff={{link: "https://github.com/ygngzln", title:"Github", img: G}} />
  <Sbtn stuff={{link: "https://forums.wynncraft.com/members/kittymenace.142840/", title:"Wynncraft Forums", img:WF}} />
  <Sbtn stuff={{link: "https://wynncraft.com/stats/player/AFetKetSlayWybel", title:"Wynncraft Stats", img:WS}}/>
  <Sbtn stuff={{link: "https://replit.com/@yilitcs2", title: "Replit", img:R}} />
</div>
<hr>
<div>
  <Route path="/"><Homepage/></Route>
  <Route path="About"><About/></Route>
  <Route path="Blog"><Blog/></Route>
  <Route path="Projects"><Projects/></Route>
  <Route path="Fhilts"><Fhilt/></Route>
  <Route path='Admin'><Admin/></Route>
</div>
</Router>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Macondo&family=Rajdhani:wght@300&family=Quicksand:wght@300&display=swap');

  :global(body) {
    background: lightskyblue;
  }

  :global(body)::-webkit-scrollbar {
    background: blue
  }

  :global(body)::-webkit-scrollbar-track {
    background: lightskyblue;
  }

  :global(body)::-webkit-scrollbar-thumb {
    background: darkturquoise;
    width: 4px;
    border-radius: 6px;
  }

  #head {
    background: linear-gradient(lightblue, deepskyblue);
    width: 100%;
    display: inline-block;
    margin-top: -10px;
    padding-bottom: 17.5px;
    height: 150px;
  }

  #title > :global(a) {
    font-size: 64px;
    font-family: 'Macondo', cursive;
    color: rgb(60, 0, 60);
    font-weight: bold;
    position: absolute;
    padding: 0 10px;
    left: 55px;
    top: 14px;
    text-decoration: none;
  }

  #title > :global(a):hover {
    background: linear-gradient(to right, deepskyblue, lightblue, deepskyblue);
    border-radius: 10% 10% 35% 35%;
    font-size: 65px;
    cursor: pointer;
  }

  a {
    color: darkblue;
    font-family: 'Rajdhani', sans-serif;
    font-size: 26px;
    font-weight: bold;
    position: absolute;
    top: 77.5px;
    left: 100px;
    margin-top: 20px;
    text-decoration: none;
    background-color: lightskyblue;
    border: 4px solid darkblue;
    border-radius: 6px;
    padding: 4px;
  }

  a:hover {
    font-size: 28px;
  }

  #pageContainer {
    width: 50%;
    top: 31.5px;
    left: 51.5%;
    position: absolute;
    transform: translateX(-50%);
    z-index: 3;
    text-align: left;
    display: inline-block;
    vertical-align: text-top;
  }

  #nav {
    width: 100%;
    display: inline;
  }

  .link {
    display: inline-block;
    background-color: lightskyblue;
    border: 2px solid blue;
    border-radius: 15%;
    font-family: 'Rajdhani', sans-serif;
    font-size: 19px;
    margin-left: 15px;
    font-style: italic;
    font-weight: bold;
    padding: 0 5px;
  }

  .link > :global(a) {
    text-decoration: none;
    color: black
  }

  .link > :global(a):hover {
    font-size: 20px;
    cursor: pointer;
  }
  
  #pages {
    font-size: 24px;
    border: 2px solid darkblue;
    border-radius: 4px;
    color: rgb(0, 96, 96);
    background-color: rgb(0, 200, 200);
    font-family: 'Rajdhani', sans-serif;
    font-weight: bold;
  }

  #pages:hover {
    font-size: 25px;
    cursor: pointer;
  }

  #others {
    z-index: 3;
    position: absolute;
    right: 10%;
    transform: translateX(50%);
    top: 20px;
  }

  .abs {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
</style>