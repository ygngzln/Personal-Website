<script lang="ts">
import axios from "axios";
import {onMount} from 'svelte'

let msg:HTMLInputElement;
let stringstart:string;
if(import.meta.env.VITE_NODE_ENV === "development") {
    stringstart = "http://localhost:4000/"
} else {
    stringstart = "https://y-hnyw.onrender.com/"
}
let uri2:string = stringstart + 'api/v1/qna/'
let uri:string = stringstart + 'api/v1/suggestions/'

function buttonLocal() {
    let before = localStorage.getItem("time");
    if(!before) {
        localStorage.setItem("time", `${Date.now()}`)
        return 1;
    }

    let now = Date.now();
    if(now - parseInt(before) > 90000) {
        localStorage.setItem("time", `${now}`);
        return 1;
    } else {
        return 0;
    }
}

function repeatedLetter(str:String) {
    str = str.toLowerCase();
    let cnt = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] == str[i-1]) cnt++;
        else cnt = 0;
        if(cnt == 5) return true;
    }
    return false;
}

function send(){
    if(msg.value.trim() === ""){ return; }
    if(msg.value.replaceAll(' ', '').length < 6){ return; }
    if(msg.value.indexOf(' ') == -1){ return; }
    if(repeatedLetter(msg.value)){ return; }
    if(!buttonLocal()) { return; }
    
    axios.post(uri, {
        message: msg.value,
        checked: false,
        ttokem: "69"
    })
    .catch(function(err){
        console.log(err)
    })
    msg.value = ""
}

let qna:any;

onMount(async() => {
    window.scrollTo(0,0);
    qna = await axios.get(uri2);
    qna = qna.data;
})

const skillstext = "Programming is enjoyable to me as a person because it allows me to create, fix, and bring my ideas from imaginations onto the screen. I use JS a lot and also have some experience with C++ and GDScript (from Godot).";
const skillstext2 = "I have made a few projects (mostly frontend) and I intend to start making more and expanding out from frontend/web dev. I've done competitive programming (USACO and other competitions), and currently am trying to build a main focus for my skills. Expect to see more projects in the future.";
const goalstext = "I have big goals for programming and wish to explore other parts of computer science. More specifically, moving away from frontend-focused design and expanding on what I can do with backend and databases. I also want to try parts of CS like mobile apps or software apps.";
const gamestext = "One of my most favorite (and least stable) hobbies is games! I play/have played a lot of different games and amassed hours in them wasting my life away doing different things. While I really lack skill in basically all of the games I have ever played, the experience mattered to me and I had a lot of fun until that fun burns out. Check out games I reviewed in my Blogs page!";
const camptext = "As a volunteer for White Stag Leadership Development in Monterey for the past few years, I go out camping pretty often. I like taking pictures of the scenery and sharing them. The fun part about camping for me is how surreal it is sometimes, especially with so many friends around";
</script>

<div id="background">
    <div id="gridwrapper">
        <div id="title">ABOUT ME</div>
        <div class="skillstext aboutText" id="skill1">{skillstext}</div>
        <div id="skills" class="aboutTitle">Programming</div>
        <div class="skillstext aboutText" id="skill2">{skillstext2}</div>
        <div id="goalstext" class="aboutText">{goalstext}</div>
        <div id="goals" class="aboutTitle">Goals</div>
        <div id="hobbies" class="aboutTitle">Hobbies</div>
        <div id="hobbycontent">
            <div id="gameimage"></div>
            <div id="gametext" class="aboutText">{gamestext}</div>
            <div id="camptext" class="aboutText">{camptext}</div>
            <div id="campimage"></div>
        </div>
    </div>
</div>

<style>
    #background {
        display: flex;
        align-items: center;
        justify-content: center;
        background: url('../assets/nightclouds2.jpg');
        background-size: cover;
    }

    #gridwrapper {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 2fr);
        grid-template-rows: 3.25fr repeat(2, 3fr) 2fr 4fr;
        grid-template-areas:
        "t t t t"
        "pi p p pii"
        "g g gi gi"
        "h h h h"
        "ht ht ht ht";
        justify-items: center;
    }

    #title {
        font-size: 10vw;
        letter-spacing: 0.8rem;
        grid-area: t;
        color: black;
        font-family:'Chicken';
        text-shadow: 0.15rem 0.15rem 8px white, 0.15rem -0.15rem 4px white, -0.1rem -0.1rem 8px white, -0.2rem 0.2rem 4px white;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #skill1 {
        grid-area: pi;
    }

    #skill2 { 
        grid-area: pii;
    }

    .skillstext {
        padding: 1.4em 1em;
        background: rgba(22, 0, 71, 0.5);
    }

    .aboutTitle {
        width: 100%;
        letter-spacing: 5px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
    }

    .aboutText {
        color: white;
        width: 100%;
        font-size: 0.9em;
        letter-spacing: 0.1em;
        box-sizing: border-box;
        display: flex;
        justify-content: center;

    }

    #skills {
        font-family:'Qarkine';
        font-size: 4vw;
        background: rgba(22, 0, 71, 0.5);
        text-shadow: -0.025em 0.025em 0.2px skyblue, 0.025em -0.025em 0.2px salmon;
        grid-area: p;
        height: 100%;
    }

    #goals {
        background-color: rgba(17, 18, 87, 0.296);
        font-weight: bold;
        grid-area: g;
        font-size: 10vw;
        font-family: 'Balegah';
    }

    #goalstext {
        background-color: rgba(17, 18, 87, 0.296);
        font-size: 1.2em;
        padding: 0.5em 1em;
        grid-area: gi;
        align-items: center;
    }

    #hobbies {
        font-family: 'Celt';
        font-size: 6vw;
        grid-area: h;
        background-color: rgba(22, 0, 71, 0.5);
    }

    #hobbycontent {
        width: 100%;
        grid-area: ht;
        display: grid;
        grid-template-columns: 2fr 3fr 3fr 2fr;
        grid-template-rows: 1fr;
        grid-template-areas:
        "g gi ci c";
    }

    #gameimage {
        grid-area: gi;
        background: url('../assets/games.png');
        background-size: cover;
        background-position-x: -140px;
        border-right: 4px solid rgb(82, 7, 0);
    }

    #gametext {
        background-color: rgba(22, 0, 71, 0.5);
        padding: 2em 0.75em;
        grid-area: g;
    }

    #camptext {
        grid-area: c;
        background-color: rgba(22, 0, 71, 0.5);
        padding: 2em 0.75em;
    }

    #campimage {
        grid-area: ci;
        background: url("../assets/pc.png");
        background-size: cover;
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

        #hobbycontent {
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: 0.8fr 1fr;
            grid-template-areas:
            "gi gi ci ci"
            "g g c c";
        }
    }
</style>