<script lang="ts">
import axios from "axios";
import {onMount} from 'svelte'
import {fly} from 'svelte/transition'
import DataLoading from './DataLoading.svelte'

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

function repeatedLetter(str) {
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

</script>

<div id="meInfoContainer">

    <div id="first" class="text">
        <p>Why programming? How did I begin programming?</p>
        I like programming because of the fact it is possible to create pretty much anything and make it fun. Making programs that are pleasing to the eye and have satisfying interations is something that makes me feel very accomplished. Also, it pays a lot so that's really nice. I discovered coding in the form of video games and block code. Scratch was where I started off because it was extremley simple and user friendly for a child like me. I made a lot of block code stuff but eventually, I later started learning text code.
    </div>
    <div id="second" class="text">
        <p>Who am I? Where am I at in programming?</p>
        My name is Yigeng. I've used a lot of Javascript but I also have been learning Java and C++. I learn basics of some other languages once in a while but I have not used them for bigger projects. I am planning to finally make some cool things with C++. I can't wait to make larger projects and get better at competitive programming.
    </div>
    <div id="third" class="text">
        <p>What are some other things about me?</p>
        I have cats and they're really goofy.
        <div id="sendContainer">
            <div id="sendTitle">Suggestions & Questions</div>
            <input type="text" bind:this={msg} id="msg" placeholder="Ask a question!" autocomplete="off"> <br/>
            <button id="send" on:click={send}>Send</button>
            <div id="sendEmail">You can also contact me at ygngzln@gmail.com</div>
        </div>
    </div>

</div>
{#if qna}
    <div id="qna">
        <div id="qnatitle">QNA</div>
        {#each qna as qnaPart, x}
            <div class="qaContainer" in:fly={{x: (400*(x%2==0 ? -1 : 1)), duration: 2750}}>
                <span class="q">Question: {qnaPart.question}</span><br />
                <span class="a">Answer: {qnaPart.answer}</span>
            </div>
        {/each}
    </div>
{:else}
    <div id="loadingCenter"><DataLoading /></div>
{/if}

<style>
    @import url('https://fonts.googleapis.com/css2?family=Tiro+Gurmukhi&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Quantico&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Marhey&display=swap');

    #third {
        max-width: 400px;
    }

    p {
        padding-bottom: 15px;
        font-weight: bold;
        text-align: center;
        font-size: 30px;
        font-family: 'Tiro Gurmukhi', serif;
        border-bottom: 4px double white;
        border-right: 2px solid white;
        border-left: 2px double white;
        border-radius: 0.75em;
    }

    .text {
        top: 0.2em;
        background: linear-gradient(lightblue, skyblue, mediumaquamarine);
        border-radius: 8px;
        padding: 0px 20px 15px 20px;
        text-align: center;
        font-size: 24px;
        display: inline-block;
        vertical-align: top;
        max-width: 450px;
        font-family: 'Quicksand', sans-serif;
        font-weight: bold;
        position: relative;
        min-height: 589px;
    }
    
    #sendContainer {
        text-align: center;
        margin-top: 4em;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border: 6px solid darkgreen;
        border-radius: 1em;
        opacity: 80%;
        background: repeating-linear-gradient(green, lime, lightgreen) 8%;
        padding: 5px 20px;
    }

    #sendContainer:hover {
        opacity: 100%;
    }

    #sendTitle {
        margin-bottom: 20px;
        font-size: 30px;
        color: white;
    }

    #sendEmail {
        margin-top: 4px;
        font-size: 12px;
    }

    #msg {
        border: 2px solid gray;
        background-color: silver;
        font-family: 'Macondo', cursive;
    }

    #msg:focus {
        outline-width: 0;
        border: 2px solid rgb(70,70,70);
    }

    #send {
        border: 3px solid darkgoldenrod;
        background-color: yellow;
        font-family:fantasy;
    }

    #send:hover {
        font-size: 15px;
        cursor: pointer;
    }

    #qna {
        margin-top: 2em;
        display: inline-block;
        border: 12px double white;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 2em;
        background: repeating-linear-gradient(grey 0.2%, lightgray 0.1%, darkgray 0.3%);
        position: relative;
        text-align: center;
        padding: 0 10px;
    }

    .q {
        color: white;
        font-family: 'Quantico', sans-serif;
        font-weight: bold;
        font-size: 24px;
    }

    .a {
        color: white;
        font-size: 16px;
        font-family: 'Ubuntu', sans-serif;
    }

    .qaContainer {
        margin: 8px 0;
        background: rgb(0,0,0,0.2);
        border-radius: 20px;
        padding: 10px 5px;
    }

    #qnatitle {
        color: black;
        font-size: 40px;
        font-family: "Marhey", cursive;
        font-weight: bold;
    }

    #loadingCenter {
        margin-top: 2.5em;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
    }

    @media screen and (max-width: 414px) {
        #meInfoContainer {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        p {
            padding-bottom: 12px;
            font-size: 15px;
        }

        #third {
            width: 94%;
            max-width: 94%;
        }
        
        .text {
            top: 0.6em;
            padding: 0px 8px 12px 8px;
            font-size: 14px;
            max-width: 94%;
            text-align: left;
            margin-top: 4px;
            min-height: 0;
        }

        #sendContainer {
            margin-top: 1.5em;
            opacity: 100%;
            width: 70%;
            padding: 5px 15px;
            left: 50%;
            transform: translateX(-50%);
            position: relative;
        }

        #sendTitle {
            margin-bottom: 20px;
            font-size: 12px;
        }

        #sendEmail {
            font-size: 6px;
            margin-top: 2px;
        }

        #msg {
            width: 75%;
        }

        #msg::placeholder {
            font-size: 9px;
            color: dimgrey;
        }

        #send {
            font-size: 8px;
            width: 20%;
            border-radius: 4px;
            border-width: 1px;
            margin-bottom: 10px;
            font-family: 'Macondo', cursive;
        }

        #send:hover {
            font-size: 10px;
        }

        .q {
            font-size: 19px;
        }

        .a {
            font-size: 16px;
        }
    }
</style>