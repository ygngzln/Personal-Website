<script lang="ts">
    import axios from 'axios'
    import {fade} from 'svelte/transition'
    import {cubicInOut} from 'svelte/easing'
    import DataLoading from './DataLoading.svelte'
    let stringstart:string;
    if(import.meta.env.VITE_NODE_ENV === "development") {
        stringstart = "http://localhost:4000/"
    } else {
        stringstart = import.meta.env.VITE_BACKEND
    }
    const uri:string = stringstart + 'api/v1/blogs/'
    let list:any;
    let loaded:boolean = false
    async function get(){
        window.scrollTo(0,0);
        list = await axios.get(uri)
        loaded = true;
    }
    get()
</script>

<div id="blogTitle"> Blogs </div>
<div id="temp">(Longer posts/articles coming soon)</div>

<div id="entries">
    {#if loaded}
        {#each list.data as entry}
            <div in:fade="{{easing: cubicInOut, duration: (Object.keys(list.data).length - entry.entry + 1)*700}}">
                <div class="date">{entry.date}</div>
                <div class="message">{entry.message}</div>
            </div>
        {/each}
    {:else}
        <DataLoading />
    {/if}
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&family=Montserrat:wght@100&display=swap');

    #temp {
        font-size: 10px;
        color: white;
        position: relative;
        text-align: center;
    }

    #blogTitle {
        position: relative;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        margin-top: 7.5px;
        font-family: Aboreto;
        font-weight: bolder;
        color: white;
        font-size: 45px;
    }

    #entries {
        position: relative;
        display: flex;
        width: 50%;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .date {
        margin-top: 15px;
        background-color: salmon;
        border: 4px solid red;
        font-weight: bold;
        font-size: 28px;
        padding: 8px 0;
        border-radius: 25% 25% 0 0; 
        font-family: 'Kdam Thmor Pro', sans-serif;
    }

    .message {
        margin-bottom: 5px;
        background: url("../assets/blackbrick.jpeg");
        font-size: 18px;
        padding: 10px;
        border-radius: 0 0 0.2em 0.2em;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        color: white;
        font-style: normal;
    }
</style>