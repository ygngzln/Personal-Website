<script>
    import axios from 'axios'
    import {fly} from 'svelte/transition'
    import {sineIn} from 'svelte/easing'
    let us, pass, date, msg;
    const uri = 'https://backendyigeng.herokuapp.com/api/v1/blogs/'
    let list;
    let loaded = false
    async function get(){
        list = await axios.get(uri)
        loaded = true;
    }
    get()
    function submitData(){
        if(us.value != import.meta.env.VITE_USER && pass.value != import.meta.env.VITE_PASS){ return; }
        axios.post(uri, {
            date: date.value,
            message: msg.value
        })
        .catch(function(err){
            console.log(err)
        })
        date.value = ""
        msg.value = ""
    }
</script>

<div id="entries">
    {#if loaded}
        {#each list.data as entry}
            <div in:fly="{{y: entry.entry*-300, easing: sineIn, duration: 550}}">
                <div class="date">{entry.date}</div>
                <div class="message">{entry.message}</div>
            </div>
        {/each}
    {:else}
            <div id="load">Loading<span id="1">.</span><span id="2">.</span><span id="3">.</span></div>
    {/if}
</div>

<div id="entry">
    <input id="us" bind:this={us} type="text" autocomplete="off" placeholder="Username" />
    <input id="pass" bind:this={pass} type="password" autocomplete="off" placeholder="Password" />
    <input id="date" bind:this={date} type="text" autocomplete="off" placeholder="Date" />
    <input id="msg" bind:this={msg} type="text" autocomplete="off" placeholder="Message"/><br />
    <button id="sub" on:click={submitData}>Submit</button>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&family=Montserrat:wght@100&display=swap');

    #us {
        border: 2px solid blue;
        background-color: aqua;
    }

    #pass {
        border: 2px solid darkred;
        background-color: orange;
    }

    #date {
        border: 2px solid green;
        background-color: lawngreen;
    }

    #msg {
        border: 2px solid gray;
        background-color: silver;
    }

    #sub {
        border: 3px solid darkgoldenrod;
        background-color: yellow;
        margin-top: 5px;
        font-family:fantasy;
    }

    #sub:hover {
        font-size: 15px;
        cursor: pointer;
    }

    #load {
        font-size: 40px;
        margin-top: 45px;
        font-family: Georgia, 'Times New Roman', Times, serif;
    }

    #entry {
        text-align: center;
        top: 162px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }

    #pass:focus, #date:focus, #msg:focus, #us:focus {
        outline-width: 0;
        border: 2px solid black;
    }

    input::placeholder {
        font-family: Georgia, 'Times New Roman', Times, serif;
    }

    #entries {
        top: 230px;
        z-index: 4;
        position: absolute;
        display: table;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        table-layout: fixed;
    }

    .date {
        margin-top: 15px;
        background-color: rgb(0, 181, 181);
        font-weight: bold;
        font-size: 28px;
        padding: 8px 0;
        border-radius: 25% 25% 0 0; 
        font-family: 'Kdam Thmor Pro', sans-serif;
    }

    .message {
        margin-bottom: 5px;
        background-color: darkcyan;
        font-size: 18px;
        padding: 10px;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        font-style: normal;
    }

    #1 {
        animation-duration: 1s;
        animation-name: blink;
        animation-iteration-count: infinite;
    }

    #2 {
        animation-duration: 1.5s;
        animation-name: blink;
        animation-iteration-count: infinite;
    }

    #3 {
        animation-duration: 2s;
        animation-name: blink;
        animation-iteration-count: infinite;
    }

    @keyframes blink {
        0% {
            display:hidden;
        }

        50% {
            display:visible;
        }

        100% {
            display:hidden;
        }
    }
</style>