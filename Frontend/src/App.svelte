<script lang="ts">
  import {onMount} from 'svelte'
  import {fly} from 'svelte/transition'
  import {circInOut, elasticOut} from 'svelte/easing'
  import { Router, Link, Route } from "svelte-routing";

  import Homepage from './lib/Homepage.svelte'
  import Blog from './lib/Blog.svelte'
  import About from './lib/About.svelte'
  import Projects from './lib/Projects.svelte'
  import Preload from './lib/Preload.svelte'
  import Sbtn from './lib/Sbtn.svelte'

  import G from './assets/github.png'
  import R from './assets/repllogo.png'
  import H from './assets/he2.png'

  let loaded:boolean = false;
  let pages:boolean = false;

  onMount(() => {
    loaded = true;
  })
</script>

{#if !loaded}
  <Preload />
{/if}

<Router url="">
  {#if loaded}
  <div id="head">
    <div id="title">
      <Link to="/"><img src={H} alt="Logo didn't load." width=45 height=45/>Yigeng L.</Link>
    </div>
    <div id="pageContainer">
      {#if pages}
          <span id="nav">
            <div class="link" transition:fly="{{ y: -300, easing: elasticOut, duration:1150 }}">
              <Link to="/Blog">Blog & Updates</Link>
            </div>
            <div class="link" transition:fly="{{ y: -200, easing: circInOut, duration:400 }}">
              <Link to="/Projects">Projects</Link>
            </div>
            <div class="link" transition:fly="{{ y: -100, easing: circInOut, duration:200 }}">
              <Link to="/About">About Me</Link>
            </div>
          </span>
      {/if}
      <button id="pages" on:click={() => {pages = !pages}}>☰ Pages</button>
    </div>
  </div>
  <div id="pageContent">
    <Route path="/"><Homepage/></Route>
    <Route path="About"><About/></Route>
    <Route path="Blog"><Blog/></Route>
    <Route path="Projects"><Projects/></Route>
  </div>
  <footer>
    <div id="footerContent">
      <span id="footerText">Yigeng L. - Hosted With Vercel</span>
      <span class="normalLinks">
        <Link to="/">Home</Link>
        <Link to="/About">About Me</Link>
        <Link to="/About">QNA/Suggestions/Ask Questions/Report A Bug</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/Blog">Blog</Link>
      </span>
      <span id="others">
        <Sbtn stuff={{link: "https://github.com/ygngzln", title:"Github", img: G}} />
        <Sbtn stuff={{link: "https://replit.com/@yilitcs2", title: "Replit", img:R}} />
      </span>
      <div class="mobileLinks">
        <Link to="/">Home</Link>
        <Link to="/About">About Me</Link>
        <Link to="/About">QNA/Suggestions/Ask Questions/Report A Bug</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/Blog">Blog</Link>
      </div>
    </div>
  </footer>
  {/if}
</Router>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Macondo&family=Rajdhani:wght@300&family=Quicksand:wght@300&display=swap&family=DynaPuff&display=swap&family=Playfair+Display&display=swap&family=Aboreto');

  :global(body) {
    background: black;
    display: grid;
    margin: 0;
  }

  :global(body)::-webkit-scrollbar {
    width: 4px;
  }

  :global(body)::-webkit-scrollbar-track {
    background: darkblue;
  }

  :global(body)::-webkit-scrollbar-thumb {
    background: rgb(0,0,190);
  }

  #head {
    background: linear-gradient(skyblue, deepskyblue);
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    flex-direction: row;
    grid-area: header;
  }

  #title {
    text-align: center;
    white-space: nowrap;
    position: relative;
    display: flex;
    left: 26px;
  }

  #title > :global(a) {
    display: flex;
    align-items: center;
    color: rgb(60, 0, 60, 0.8);
    font-size: 30px;
    font-family: 'Macondo', cursive;
    font-weight: bold;
    text-decoration: none;
    padding: 0 4px;
    position: relative;
    letter-spacing: 2px;
    width: 6.6em;
    height: 50px;
  }

  #title:hover > :global(a) {
    cursor: pointer;
    color: rgb(0, 186, 65);
    background: linear-gradient(to right, darkblue, blue, darkblue);
  }

  img {
    margin-right: 5px;
  }

  #nav {
    display: inline;
  }

  .link {
    font-size: 20px;
    font-weight: bolder;
    font-style: italic;
    border-radius: 15%;
    border: 2px solid rgb(91, 153, 192);
    background-color: rgb(135, 206, 250);
    font-family: 'Rajdhani', sans-serif;
    padding: 0 4.5px;
    margin-left: 20px;
    display: inline-block;
  }

  .link > :global(a) {
    color: black;
    text-decoration: none;
  }

  .link > :global(a):hover {
    font-size: 21px;
    cursor: pointer;
  }

  .link > :global(a):focus {
    outline-width: 0;
    box-shadow: none;
  }

  #pageContainer {
    left: 45em;
    text-align: left;
    position: relative;
    display: inline-block;
    vertical-align: text-top;
    width: 35%;
  }
  
  #pages {
    font-size: 20px;
    font-weight: bold;
    border-radius: 4px;
    color: rgb(0, 96, 96);
    border: 2px solid darkblue;
    font-family: 'Rajdhani', sans-serif;
    background-color: rgb(0, 186, 186);
    float: right;
    margin-right: 10px;
    transition: 1s;
  }

  #pages:hover {
    cursor: pointer;
    color: white;
    text-shadow: 1px 1px 1px black;
    transition: text-shadow 1s;
    border: 2.5px solid black;
    animation-name: shine;
    animation-duration: 0.2s;
  }

  .mobileLinks {
    display: none;
  }

  @keyframes shine {
    0% {
      background: linear-gradient(
        30deg, 
        white 0%, 
        rgb(0, 186, 186) 25%
      );
    }

    25% {
      background: linear-gradient(
        30deg, 
        rgb(0, 186, 186) 0%, 
        white 25%, 
        rgb(0, 186, 186) 50%);
    }

    50% {
      background: linear-gradient(
        30deg,
        rgb(0, 186, 186) 0%, 
        white 50%, 
        rgb(0, 186, 186) 75%); 
    }

    75% {
      background: linear-gradient(
        30deg, 
        rgb(0, 186, 186) 0%, 
        white 75%, 
        rgb(0, 186, 186) 100%); 
    }

    100% {
      background: linear-gradient(
        30deg, 
        rgb(0, 186, 186) 0%, 
        white 100%); 
    }
  }

  #pageContent {
    grid-area: main;
    position: relative;
    min-height: 700px;
  }

  #footerContent {
    left: 1em;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mobileLinks > :global(a) {
    margin: 0 8px;
    color: black;
    font-family: 'Rajdhani', sans-serif;
    font-weight: bold;
  }

  .normalLinks > :global(a) {
    margin: 0 8px;
    color: black;
    font-family: 'Rajdhani', sans-serif;
    font-weight: bold;
  }

  #others {
    left: 31.3em;
    position: relative;
    padding: 5px 0;
    display: flex;
    align-items: center;
  }

  #footerText {
    position: relative;
    vertical-align: middle;
    margin-right: 5px;
    font-family: monospace;
    font-size: 14px;
    color: black;
  }

  footer {
    background-color: white;
    filter: opacity(0.85);
    margin-top: 2em;
    height: 2.75em;
    grid-area: footer;
    display: flex;
    align-items: center;
    justify-content: left;
  }
  
  @media screen and (max-width: 414px) {
    #title {
      left: 0px;
    }
    #title > :global(a) {
      color: rgb(60, 0, 60, 0.8);
      font-size: 15px;
      padding: 0 2px;
      letter-spacing: 1.5px;
      width: 8.5em;
    }
    #title:hover > :global(a) {
      color: rgb(60, 0, 60, 0.8);
      background: none;
    }
    .link {
      font-size: 9px;
      padding: 2px 2px;
      margin-left: 4.5px;
    }
    .link > :global(a):hover {
      font-size: 10px;
    }
    #nav {
      display: flex;
      align-items: center;
    }
    #pageContainer {
      left: 0;
      width: 71.5%;
      display: flex;
      align-items: center;
      justify-content: right;
    }
    #pages {
      font-size: 10px;
      margin-right: 4px;
      margin-left: 4px;
      width: 24.5%;
    }
    #pages:hover {
      color: black;
      text-shadow: none;
      transition: none;
      border: 2px solid black;
      animation: none;
    }

    #footerText {
      margin-right: 3px;
      font-size: 8px;
    }

    .mobileLinks > :global(a) {
      font-size: 8px;
      margin: 0 2px;
    }

    footer {
      margin-top: 1em;
      height: 4em;
      display: flex;
      justify-content: center;
    }

    #footerContent {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      flex-direction: column;
    }

    #others {
      left: 0em;
      padding: 3px 0;
    }

    .mobileLinks {
      display: inline-block;
      left: 0;
      position: relative
    }

    .normalLinks {
      display: none;
    }
  }
</style>