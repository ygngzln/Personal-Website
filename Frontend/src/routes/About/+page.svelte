<script lang="ts">
import linked from '../../assets/icons/linkedin.png';
import github from '../../assets/icons/github.png';
import gmail from '../../assets/icons/gmail.png';

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
    <div id="gridwrapper">
        <div id="title">ABOUT ME</div>
        <div class="basictext aboutText" id="basic1">{basictext}</div>
        <div id="basics" class="aboutTitle">Basic Info</div>
        <div class="basictext aboutText" id="basic2">{basictext2}</div>
        <div id="goalstext" class="aboutText">{goalstext}</div>
        <div id="goals" class="aboutTitle">Goals</div>
        <div id="prog" class="aboutTitle">CS</div>
        <div id="progtext" class="aboutText">{progtext}</div>
        <div id="contacts" class="aboutTitle">Contacts</div>
        <div id="contactwrapper">
            {#each names as x, i}
                <a href={links[i]} target="_blank"><img class="linkimg" src={icons[i]} alt={names[i]}/></a>
            {/each}
        </div>
    </div>
</div>

<style>
    #background {
        display: flex;
        align-items: center;
        justify-content: center;
        background: url('../../assets/nightclouds2.jpg');
        background-size: cover;
    }

    #gridwrapper {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 2fr);
        grid-template-rows: 2.2fr repeat(2, 3fr) 2fr 4fr;
        grid-template-areas:
        "t t t t"
        "p p pi pii"
        "g gi h ht"
        "c ci ct ct";
        justify-items: center;
        gap: 0.65rem;
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
        opacity: 0.95;
        padding: 0.9em;
        background: rgba(17, 0, 54, 0.9);
    }

    .aboutText:hover {
        opacity: 1;
    }

    #basics {
        font-family:'Celt';
        font-size: 7vw;
        background: rgba(30, 24, 42, 0.9);
        grid-area: p;
        font-weight: bold;
        height: 100%;
    }

    #goals {
        background-color: rgba(74, 3, 74, 0.7);
        grid-area: g;
        font-size: 8vw;
        font-family: 'Celt';
    }

    #goalstext {
        grid-area: gi;
    }

    #prog {
        font-family: 'Celt';
        font-size: 7vw;
        grid-area: h;
        background-color: rgba(59, 4, 14, 0.7);
    }

    #contacts {
        grid-area: c;
        font-family: 'Celt';
        font-size: 5vw;
        background-color: rgba(2, 123, 83, 0.6);
    }

    #contactwrapper {
        display: flex;
        grid-area: ci;
        width: 100%;
        gap: 0.5rem;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: left;
        align-items: center;
    }

    .linkimg {
        font-size: 1vw;
        width: 6rem;
        height: 6rem;
        box-sizing: border-box;
    }

    @media screen and (max-width: 414px) {
        #gridwrapper {
            grid-template-columns: repeat(4, 2fr);
            grid-template-rows: 0.2fr 0.1fr 0.3fr 0.15fr 0.3fr 0.2fr 0.2fr;
            grid-template-areas:
            "t t t t"
            "p p p p"
            "pi pi pii pii"
            "g g g g"
            "gi gi gi gi"
            "h h h h"
            "ht ht ht ht";  
        }
    }
</style>