<script>
    import axios from 'axios'
    import {fade} from 'svelte/transition'
    import {cubicInOut} from 'svelte/easing'
    const uri = 'https://backendyigeng.herokuapp.com/api/v1/blogs/'
    let list;
    let loaded = false
    async function get(){
        list = await axios.get(uri)
        loaded = true;
    }
    get()
</script>

<div id="entries">
    {#if loaded}
        {#each list.data as entry}
            <div in:fade="{{easing: cubicInOut, duration: (Object.keys(list.data).length - entry.entry + 1)*700}}">
                <div class="date">{entry.date}</div>
                <div class="message">{entry.message}</div>
            </div>
        {/each}
    {:else}
            <div id="load">Loading<span id="1">.</span><span id="2">.</span><span id="3">.</span></div>
    {/if}
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&family=Montserrat:wght@100&display=swap');

    #load {
        font-size: 40px;
        margin-top: 45px;
        font-family: Georgia, 'Times New Roman', Times, serif;
    }

    #entries {
        top: 175px;
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

    #load {
        animation: load 3.5s infinite;
    }

    @keyframes load {
        0% {
            font-size: 10px;
            margin-top: 120px;
            margin-right: 120px
        }
        17% {
            font-size: 30px
        }
        25% {
            font-size: 35px
        }
        35% {
            font-size: 20px;
            margin-right: -120px;
            margin-top: 0px;
        }
        50% {
            font-size: 45px;
            margin-right: 0px;
            margin-top: 0px;
        }
        62% {
            font-size: 20px;
        }
        75% {
            font-size: 35px
        }
        87% {
            font-size: 30px
        }
        100% {
            font-size: 10px;
            margin-top: 120px;
            margin-right: 120px;
        }
    }
</style>