<script lang="ts">
import axios from "axios";
import {onMount} from 'svelte'
import DataLoading from "./DataLoading.svelte";
import sanitize from 'mongo-sanitize';

let msg:HTMLTextAreaElement;
let err:HTMLDivElement;
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

function checkIssue(str:String):number {
    if(str.trim() === ""){ return 1; }
    if(str.replaceAll(' ', '').length < 6){ return 2; }
    if(repeatedLetter(msg.value)){ return 3; }
    if(!buttonLocal()) { return 4; }
    return 0;
}

const errorMsgs = ['Empty message!', 'Message too short!', 'Too many repeated letters!', 'You just sent a message recently!']

function send(){
    let num:number = checkIssue(msg.value)
    if(num) {
        err.innerHTML = "Failure to send: " + errorMsgs[num-1];
        err.style.padding = "0.2rem 0"
        return;
    }else{
        err.innerHTML = '';
        err.style.padding = "0";
    }

    msg.value = sanitize(msg.value);

    let curDate:Date = new Date();

    let dateString:String = (curDate.getMonth()+1).toString() + "/" + (curDate.getDate()).toString();
    
    axios.post(uri, {
        message: msg.value,
        date: dateString,
        checked: false,
        ttokem: "69"
    })
    .catch(function(err){
        console.log(err)
    })
    msg.value = ""
}

function copyEmail() {
    navigator.clipboard.writeText("ygngzln@gmail.com")
}

let qna:any;
let loaded:boolean = false;

onMount(async() => {
    window.scrollTo(0,0);
    qna = await axios.get(uri2);
    qna = qna.data;
    loaded = true;
})
</script>

<div id="background">
    <div id="title">QNA</div>
    {#if loaded}
    <grid id="gridbox">
        <div id="textcont">
            <div id="text">
                <div id="subtitle">Suggestions are welcome here too!</div>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div id="subsubtitle">Please email me at <span title="Copy Email" on:click={copyEmail}>ygngzln@gmail.com</span> if you want me to answer your question immediately! <br />I don't check my Discord bot for QNA updates that often.</div>
            </div>
        </div>
        <div id="inputs">
            <textarea bind:this={msg}></textarea>
            <div id="error" bind:this={err}></div>
            <div id="buttoncont"><button on:click={send}>Send</button></div>
        </div>
    </grid>
    <div id="qnabox">
        {#each qna as entry, x}
            <div class="q">
                {entry.question}
            </div>
            <div class="a">
                {entry.answer}
            </div>
        {/each}
    </div>
    {:else}
        <DataLoading />
    {/if}
</div>

<style>
    #background {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: url('../assets/pondsky.jpg');
        background-size: cover;
    }

    #title {
        font-size: 5rem;
        font-family: 'Cool';
        padding: 1rem 0 0.5rem 0;
        letter-spacing:1rem;
        font-weight: bold;
        color: white;
        text-shadow: 0 0.5rem 12px rgb(74, 74, 74);
        text-align: center;
        text-indent: 1rem;
    }

    #gridbox {
        display: grid;
        grid-template-columns: repeat(2, 2fr);
        grid-template-areas:
        "a b"
    }

    #textcont {
        grid-area: a;
        padding: 1rem 1.8rem;
        display: flex;
        flex-direction: column;
        align-items: end;
    }

    #text {
        text-align: left;
        width: 90%;
        background: rgba(255, 255, 255, 0.4);
        padding: 0.2rem 0.6rem 0.2rem 0.2rem;
    }

    #subtitle {
        font-size: 1.5rem;
        font-family: 'Sunflower';
        grid-area: a;
    }

    #subsubtitle {
        font-size: 1rem;
        font-family: 'Nostalgia';
    }

    #subsubtitle > span {
        font-weight: bold;
        white-space: pre-line;
        text-decoration: underline;
    }

    #subsubtitle > span:hover {
        cursor:pointer;
    }

    #inputs {
        grid-area: b;
        display: flex;
        flex-direction: column;
        padding: 1rem 0 1rem 0.5rem;
    }

    textarea {
        width: 35vw;
        height: 12vh;
        font-family: 'NK57';
        letter-spacing: 1px;
        resize: none;
        scrollbar-width: thin;
        box-sizing: border-box;
        position: relative;
    }

    textarea:focus {
        outline: 4px double black;
    }

    #error {
        color: rgb(207, 5, 5);
        background: rgba(0,0,0,0.4);
        letter-spacing: 0.1rem;
        font-family: 'NK57';
        font-size: 0.8rem;
        width: 35vw;
        text-align: center;
    }

    #buttoncont {
        width: 35vw;
        box-sizing: border-box;
        text-align: center;
    }

    button {
        padding: 0.2rem 0.5rem;
        font-family: 'NK57';
        border: 2px groove black;
        transition: all 0.7s;
        font-size: 1rem;
    }

    button:hover {
        cursor:pointer;
        padding: 0.2rem 12vw;
        transition: all 0.7s;
    }

    #qnabox {
        margin: 1.2rem 0;
        display: flex;
        align-items: center;
        flex-direction: column;
        text-align: left;
        position: relative;
        width: 90%;
    }

    .q {
        font-size: 1.8rem;
        font-family: 'ChocoShake';
        color: rgb(7, 6, 60);
        background-color: rgb(78, 102, 138);
        padding: 0.2rem 0.2rem;
        width: 100%;
        text-align: left;
        box-sizing: border-box;
    }

    .a {
        font-size: 0.9rem;
        font-family: 'NK57';
        padding: 0.2rem 0.2rem;
        background-color: rgba(255, 255, 255, 0.678);
        width: 100%;
        text-align: left;
        box-sizing: border-box;
        margin-bottom: 10px;
    }

    @media screen and (max-width: 414px) {
        textarea {
            height: 20vh;
        }
    }
</style>