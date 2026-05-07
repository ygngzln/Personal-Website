<script lang="ts">
import linked from '../../assets/icons/linkedin.png';
import github from '../../assets/icons/github.png';
import gmail from '../../assets/icons/gmail.png';
import pinksky from '../../assets/pinksky.jpg'
import {fly} from 'svelte/transition'

let icons:string[] = [linked, github, gmail];
let names:string[] = ["LinkedIn", "GitHub", "Gmail"];
let links:string[] = [
    "https://www.linkedin.com/in/yigeng-lin-b12268295/",
    "https://github.com/ygngzln",
    "mailto:ygngzln@gmail.com"
];

const basictext:string = "My name is Yigeng Lin and I'm a CS student. I make projects and sometimes post them. Music taste is mostly rnb and game soundtracks. Avid Minecraft and Tetris player. Definitely more on the outdoors side of things, I enjoy camping and hikes. I don't really like Javascript that much but I end up using it anyways.";
const basictext2:string = "I'm a cat person. Dogs are okay too tho. I read manga over anime because of the pacing but I'm always willing to give stuff a try. Am from Washington but I live in California. I definitely prefer the sunnier weather here. Bye =w=";
const goalstext:string = "I have aspirations to help make a larger-scale game one day. I also want to try making some projects that can find a use in helping others. Other than programming stuff, I always want to be a better Tetris player. Have a bunch of other personal goals too.";
const progtext:string = "I'm actively looking for project opportunities and I'm down to learn new things. I know how to use Godot, JS/TS, C++, Svelte, React, APIs, and databases. I often use AI to help me debug and polish. Lmk if you have any opportunities for me.";
</script>

<div id="background">
    <img src={pinksky} alt='pink sky bg' class="bg-img" loading='lazy'/>
    <div id="gridwrapper">
        <div id="title" in:fly={{y:-200, duration: 500}}>ABOUT ME</div>
        <div class="basictext aboutText" id="basic1">{basictext}</div>
        <div id="basics" class="aboutTitle">Basic Info</div>
        <div class="basictext aboutText" id="basic2">{basictext2}</div>
        <div id="goalstext" class="aboutText">{goalstext}</div>
        <div id="goals" class="aboutTitle">Goals</div>
        <div id="prog" class="aboutTitle">CS</div>
        <div id="progtext" class="aboutText">{progtext}</div>
    </div>
    <div id="contactwrapper">
        <div id="contacts">Contact Info</div>
        {#each names as x, i}
            <a href={links[i]} target="_blank"><img class="linkimg" src={icons[i]} alt={names[i]}/></a>
        {/each}
    </div>
</div>

<style>
    #background {
        position: relative;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .bg-img {
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        top: 0;
        z-index: -1;
        object-fit: cover;
    }

    #gridwrapper {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 2fr);
        grid-template-rows: repeat(2, 2fr);
        grid-template-areas:
        "t t t t"
        "p p pi pii"
        "g gi h ht";
        justify-items: center;
        gap: 0.75rem;
    }

    #title {
        font-size: 9vw;
        letter-spacing: 0.6rem;
        grid-area: t;
        color: black;
        font-family:'Chicken';
        text-shadow: 0.15rem 0.15rem 8px white, 0.15rem -0.15rem 4px white, -0.1rem -0.1rem 8px white, -0.2rem 0.2rem 4px white;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #basic1 {
        grid-area: pi;
    }

    #basic2 { 
        grid-area: pii;
    }

    .aboutTitle {
        width: 100%;
        letter-spacing: 4px;
        box-sizing: border-box;
        display: flex;
        font-family: 'Cool';
        justify-content: center;
        align-items: center;
        color: white;
        opacity: 0.95;
    }

    .aboutTitle:hover {
        opacity: 1;
    }

    .aboutText {
        color: rgb(244, 241, 241);
        width: 100%;
        font-size: 1.2em;
        letter-spacing: 0.04em;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        font-family: 'Nostalgia';
        opacity: 0.96;
        padding: 0.9em;
        background: rgba(17, 0, 54, 0.95);
    }

    .aboutText:hover {
        opacity: 1;
    }

    #basics {
        font-size: 7vw;
        background: rgba(30, 24, 42, 0.95);
        grid-area: p;
        font-weight: bold;
        height: 100%;
    }

    #goals {
        background-color: rgba(74, 3, 74, 0.95);
        grid-area: g;
        font-size: 8vw;
    }

    #goalstext {
        grid-area: gi;
    }

    #prog {
        font-size: 7vw;
        grid-area: h;
        background-color: rgba(59, 4, 14, 0.95);
    }

    #contacts {
        font-family: 'Cool';
        font-size: 6vw;
        letter-spacing: 3px;
        position: relative;
        height: 100%;
        box-sizing: border-box;
        text-align: center;
        display: flex;
        align-items: center;
        color: white;
        opacity: 0.95;
        padding: 0 0.75rem;
        background-color: rgba(2, 123, 83, 0.67);
    }

    #contactwrapper {
        margin-top: 0.75rem;
        display: flex;
        width: 100%;
        height: 7rem;
        gap: 0.75rem;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: left;
        align-items: center;
        background-color: rgba(2, 123, 83, 0.2);
    }

    .linkimg {
        font-size: 1vw;
        width: 6rem;
        display: block;
        box-sizing: border-box;
    }

    @media screen and (max-width: 414px) {
        #gridwrapper {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(4, 2fr);
            grid-template-rows: repeat(2, 2fr);
            grid-template-areas:
            "t t t t"
            "p p pi pii"
            "g gi h ht";
            justify-items: center;
            gap: 0.75rem;  
        }
    }
</style>