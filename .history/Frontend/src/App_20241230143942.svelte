<script lang="ts">
  import {onMount} from 'svelte'
  import {fly} from 'svelte/transition'
  import {circInOut, elasticOut} from 'svelte/easing'
  import { Router, Link, Route } from "svelte-navigator";
  import axios from 'axios'

  import Homepage from './lib/Homepage.svelte'
  import Updates from './lib/Updates.svelte'
  import Blogs from './lib/Blogs.svelte'
  import GamesBlog from './lib/Blogs/Games.svelte'
  import CampBlog from './lib/Blogs/Camp.svelte'
  import QNA from './lib/Qna.svelte'
  import About from './lib/About.svelte'
  import Projects from './lib/Projects.svelte'
  import Preload from './lib/Preload.svelte'
  import Sbtn from './lib/Sbtn.svelte'
  import Pictures from './lib/Pictures.svelte';

  import G from './assets/github.png'
  import H from './assets/he2.png'

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
  <Preload />
{:else}
  <Router {url}>
    {#if loaded}
    <div id="head">
      <div class="link" transition:fly="{{ y: -100, easing: elasticOut, duration:1250 }}">
        <Link to="/About">About Me</Link>
      </div>
      <div class="link" transition:fly="{{ y: -200, easing: circInOut, duration:600 }}">
        <Link to="/Projects">Projects</Link>
      </div>
      <div id="title">
        <Link to="/"><img src={H} alt="Logo didn't load."/>Home</Link>
      </div>
      <div class="link" transition:fly="{{ y: -100, easing: circInOut, duration:200 }}">
        <Link to="/Updates">Updates</Link>
      </div>
      <div class="link" transition:fly="{{ y: -250, easing: circInOut, duration:600 }}">
        <Link to="/Blogs">Blogs</Link>
      </div>
      <div class="link" transition:fly="{{ y: -250, easing: elasticOut, duration:1250 }}">
        <Link to="/QNA">QNA</Link>
      </div>
    </div>
    <div id="pageContent">
      <Route path="/"><Homepage/></Route>
      <Route path="About"><About/></Route>
      <Route path="Updates"><Updates/></Route>
      <Route path="Projects"><Projects/></Route>
      <Route path="Blogs"><Blogs/></Route>
      <Route path="Blogs/Games"><GamesBlog/></Route>
      <Route path="Blogs/Camp"><CampBlog/></Route>
      <Route path="QNA"><QNA/></Route>
      <Route path="Pictures"><Pictures/></Route>
    </div>
    <footer>
      <div id="footerContent">
        <span id="footerText">
          Made by Yigeng Lin - Hosted With Vercel
        <span class="normalLinks">
          <Link to="/">Home</Link>
          <Link to="/About">About Me</Link>
          <Link to="/Projects">Projects</Link>
          <Link to="/Updates">Updates</Link>
          <Link to="/Blogs">Blogs</Link>
          <Link to="/QNA">QNA</Link>
          <Link to="/Pictures">Pictures</Link>
        </span>
      </span>
        <span id="others">
          <Sbtn stuff={{link: "https://github.com/ygngzln", title:"Github", img: G}} />
        </span>
      </div>
    </footer>
    {/if}
  </Router>
{/if}
<style>
  @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Macondo&family=Rajdhani:wght@300&family=Quicksand:wght@300&display=swap&family=DynaPuff&display=swap&family=Playfair+Display&display=swap&family=Aboreto');
  @import url('https://fonts.googleapis.com/css2?family=Michroma&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200&display=swap');
  @font-face {
    font-family: 'Balegah';
    src: url('./assets/Balegah.otf');
  }
  @font-face {
    font-family: 'Chicken';
    src: url('./assets/chicken.otf');
  }
  @font-face {
    font-family: 'ChocoShake';
    src: url('./assets/chocoshake.otf');
  }
  @font-face {
    font-family: 'Cool';
    src: url('./assets/coolvetica.otf')
  }
  @font-face {
    font-family: 'Energy';
    src: url('./assets/Energy.otf');
  }
  @font-face {
    font-family: 'Mirage';
    src: url('./assets/miragethin.otf');
  }
  @font-face {
    font-family: 'NK57';
    src: url("./assets/nk57cdrg.otf")
  }
  @font-face {
    font-family: 'Nostalgia';
    src: url('./assets/nostalgia.ttf')
  }
  @font-face {
    font-family: 'Qarkine';
    src: url('./assets/Qarkine.otf');
  }
  @font-face {
    font-family: 'Sunflower';
    src: url('./assets/sunflower.otf')
  }

  :global(body) {
    height:100%;
    max-width: 100%;
    background: black;
    margin: 0;
    font-size: 20px;
  }

  :global(html) {
    scrollbar-color: white black;
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
    background: linear-gradient(rgb(171, 219, 238),rgb(108, 162, 180));
    width: 100%;
    height: 3em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-bottom: 0.1em solid rgb(110, 110, 110);
    padding: 0.4em 0;
  }

  #title {
    position: relative;
    padding: 0 1rem;
  }

  #title > :global(a) {
    display: flex;
    align-items: center;
    color: rgb(117, 180, 222);
    text-shadow: 0.02em 0.02em 0 black, 0.02em -0.02em 0 black, -0.02em 0.02em 0 black, -0.02em -0.02em black;
    font-size: 1.8em;
    font-family: 'Macondo', cursive;
    font-weight: bold;
    height: 90%;
  }

  #title img {
    margin-right: 4%;
    width: 1.5em;
    height: 1.5em;
  }

  #title:hover > :global(a) {
    cursor: pointer;
    color: #820438cc;
  }

  #title:hover img {
    content: url("./assets/he.png")
  }

  .link {
    font-size: 0.9em;
    font-weight: bolder;
    border-radius: 3px;
    border: 0.1em solid rgb(91,153,192);
    background-color: #87cefa;
    font-family: 'Rajdhani', sans-serif;
    margin: 0.06em 0.2em;
    white-space: nowrap;
    display: inline-block;
  }

  .link:hover {
    background-color: #68020e;
    border: 0.1em solid darkred;
  }

  .link > :global(a) {
    padding: 0 0.22rem;
    box-sizing: border-box;
    color: black;
    text-decoration: none;
    transition: all 1s;
  }

  .link > :global(a):hover {
    color: pink;
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
    font-size: 0.7em;
  }

  .normalLinks > :global(a) {
    margin: 0 0.4em;
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
      padding: 0 0.5rem;
    }
  }
</style>