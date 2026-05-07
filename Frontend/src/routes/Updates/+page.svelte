<script lang="ts">
    import axios from 'axios'
    import {fade} from 'svelte/transition'
    import {quintOut} from 'svelte/easing'
    import DataLoading from '../../lib/DataLoading.svelte'

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
        display: flex;
        flex-direction: column;
        align-items: center;
        background: linear-gradient(#9eb1c3, #b5c2d0);
        padding-bottom: 1rem;
    }

    #updateTitle {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Nostalgia';
        margin: 2rem;
        letter-spacing: 0.5rem;
        color: rgb(26, 44, 50);
        font-weight: bold;
        text-shadow: 0.01em 0.01em 2px #ced7e0, -0.01em -0.01em 2px #ced7e0, 0.01em -0.01em 2px #ced7e0, -0.01em 0.01em 2px #ced7e0;
        font-size: 9.5vw;
    }

    #entries {
        position: relative;
        display: flex;
        width: 80%;
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
        background-color: #95b0bb;
        border: 0.2rem solid #53768c;
        border-right: none;
        font-size: 1.4rem;
        padding: 0.4rem 0;
        box-sizing: border-box;
        border-radius: 25% 0 0 25%; 
        font-family: 'Cool';
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .message {
        width: 80%;
        background: rgba(0, 0, 0, 0.98);
        font-size: 1.2rem;
        padding: 0.75rem;
        font-family: 'Nostalgia';
        color: white;
        text-align: left;
    }

    .message:hover {
        background: rgba(0, 0, 0, 0.85)
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