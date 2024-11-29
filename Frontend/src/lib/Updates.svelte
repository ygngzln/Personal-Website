<script lang="ts">
    import axios from 'axios'
    import {fade} from 'svelte/transition'
    import {quintOut} from 'svelte/easing'
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
<div id="background">
    <div id="updateTitle"> Updates </div>

    {#if loaded}
        <div id="entries">
        {#each list.data as entry}
            <div class="blogCase" in:fade="{{easing: quintOut, duration: (Object.keys(list.data).length - entry.entry + 1)*700}}">
                <div class="date">{entry.date}</div>
                <div class="message">{entry.message}</div>
            </div>
        {/each}
        </div>
    {:else}
        <DataLoading />
    {/if}
</div>

<style>
    #background {
        width: 100%;
        height: 100%;
        background: url("../assets/nightstars.jpg");
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #updateTitle {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Qarkine';
        letter-spacing: 0.3rem;
        color: rgb(126, 157, 167);
        text-shadow: 0.01em 0.01em 4px white, -0.01em -0.01em 4px white, 0.01em -0.01em 4px white, -0.01em 0.01em 4px white;
        font-size: 9.5vw;
    }

    #entries {
        position: relative;
        display: flex;
        width: 60%;
        text-align: center;
        flex-direction: column;
    }

    .blogCase {
        width: 100%;
        display: flex;
        flex-direction: row;
        margin: 1em 0 1em 0;
    }

    .date {
        width: 20%;
        background-color: lightblue;
        border: 0.2rem solid rgb(33, 129, 174);
        border-right: none;
        font-size: 1.4rem;
        padding: 0.4rem 0;
        border-radius: 25% 0 0 25%; 
        font-family: 'Cool';
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .message {
        width: 80%;
        margin-bottom: 0.25rem;
        background: rgba(0, 0, 0, 0.6);
        font-size: 0.9rem;
        padding: 0.5rem;
        font-family: 'Nostalgia';
        color: white;
        text-align: left;
    }

    @media screen and (max-width: 414px) {
        .date {
            width: 45%;
        }

        #entries {
            width: 95%;
        }
    }
</style>