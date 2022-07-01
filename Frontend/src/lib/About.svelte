<script>
import axios from "axios";

let msg;
const uri = 'https://backendyigeng.herokuapp.com/api/v1/suggestions/'
function send(){
    axios.post(uri, {
        message: msg.value,
        checked: false,
        ttokem: import.meta.env.VITE_TTOKEM
    })
    .catch(function(err){
        console.log(err)
    })
    msg.value = ""
}

</script>

<div id="first" class="text">
    <p>Why programming? How did I begin programming?</p>
    I like programming because of the fact it is possible to create pretty much anything. Making programs that are useful, entertaining, or pleasant to others and also myself is something that makes me feel very accomplished. I was introduced to coding at a pretty early age. Scratch was where I started off. I did a lot of block coding and made a few cool projects, which were actually not bad. I slowly transitioned into Javascript after 1-2 years.
</div>
<div id="second" class="text">
    <p>Who am I? Where am I at in programming?</p>
    Hi, I'm egg. I do a lot of coding. I mainly use Javascript but I also have been learning Java. I have touched C++, C#, Lua, Ruby, Python, Typescript, and BrainF for some reason. I've created a few projects but have not done any really huge scale projects like frameworks or RPGs. I know a fair bit about programming in general and my programming logic is beginner to mediocre. Leetcode-wise, I can do easy problems with a little thought but medium problems can be extremely difficult to impossible for me.
</div>
<div id="third" class="text">
    <p>What are some other things about me?</p>
    I enjoy math (contrary to others but heh whatever) and weird psychological ideas. I don't really have a hobby outside of programming but I reckon I probaaaably need to touch grass a lot more.
</div>

<div id="s">
    <input type="text" bind:this={msg} id="msg" placeholder="Ask a question!" autocomplete="off"> 
    <button id="send" on:click={send}>Send</button>
    <div id="ss">You can add your name as well!</div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Tiro+Gurmukhi&display=swap');

    #first {
        left: 20%;
    }

    #second {
        left: 55%;
    }

    #third {
        min-width: 300px;
        left: 85%;
    }

    p {
        padding: 5px;
        font-weight: bold;
        text-align: center;
        font-size: 30px;
        font-family: 'Tiro Gurmukhi', serif;
        width: 100%;
    }

    .text {
        background: linear-gradient(lightblue, skyblue, mediumaquamarine);
        border-radius: 8px;
        padding: 0 10px;
        font-size: 24px;
        top: 174px;
        text-align: left;
        max-width: 450px;
        font-family: 'Quicksand', sans-serif;
        font-weight: bold;
        position: absolute;
        transform: translateX(-50%);
    }
    
    #s {
        text-align: center;
        position: absolute;
        left: 85.5%;
        transform: translateX(-50%);
        bottom: 25px;
    }

    #ss {
        font-size: 18px;
        font-family: Georgia, serif;
    }

    #msg {
        border: 2px solid gray;
        background-color: silver;
    }

    #msg:focus {
        outline-width: 0;
        border: 2px solid black;
    }

    #send {
        border: 3px solid darkgoldenrod;
        background-color: yellow;
        margin-top: 5px;
        font-family:fantasy;
    }

    #send:hover {
        font-size: 15px;
        cursor: pointer;
    }
</style>