<script lang="ts">
    import Case from '../../lib/Case.svelte'
    import axios from 'axios'
    import { onMount } from 'svelte';
    import DataLoading from '../../lib/DataLoading.svelte'
    import moonclouds from '../../assets/moonclouds.jpeg'
    
    let stringstart:string;
    if(import.meta.env.VITE_NODE_ENV === "development") {
        stringstart = "http://localhost:4000/";
    } else {
        stringstart = import.meta.env.VITE_BACKEND;
    }
    let uri:string = stringstart + "api/v1/projects"

    axios.get(uri)

    let list:any;
    let loaded:boolean = false;
    onMount(async () => {
        window.scrollTo(0,0);
        list = await axios.get(uri).then((res) => res.data);
        loaded = true;
        console.log(list)
    })
</script>

<div class="bg-wrapper">
    <img src={moonclouds} alt='not load' class="bg-img" loading='lazy'/>
    <div id="projTitle">PROJECTS</div>
    <div id="curFrame">
        <span id="curTitle">Current work:</span>
        <span id="curName">• RPG-style game dev
            <br>• Stat-displaying projects</span>
    </div>
    {#if loaded}
    <div id="caseFrame">
        {#each list as x}
            <Case project={x}/>
        {/each}
    </div>
    {:else}
        <div id="protection"><DataLoading /></div>
    {/if}
    
</div>

<style>
    .bg-wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .bg-img {
        position:absolute;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }

    #projTitle {
        position: relative;
        font-size: 9vw;
        padding-top: 1rem;
        padding-left: 1rem;
        box-sizing: border-box;
        color: #eae7e7;
        text-shadow: 0 0 0.2rem rgb(91, 111, 119), 1px 0 4px black, 0 1px 4px black, -1px 0 4px black, 0 -1px 4px black, 0 0 2rem #ced7e0;
        text-align: center;
        font-family: "Nostalgia";
        font-weight: bold;
        letter-spacing: 0.12em;
    }

    #caseFrame {
        margin-top: 1.5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-flow: row dense;
        text-align: center;
    }

    #protection {
        background: rgba(0,0,0,0.7);
        padding: 1em 0;
    }

    #curFrame {
        margin-top: 1rem;
        width: 74%;
        display: grid;
        grid-template-columns: 1.1fr 1fr;
        align-items: center;
        height: 6.5rem;
        border: 1.5px solid black;
        padding: 0.32rem 0 0.4rem 0;
        /* background: linear-gradient(rgba(162, 172, 182, 0.93),rgb(97, 108, 118)); */
        background: rgba(40,40,40,0.65);
        border-radius: 4px;
    }

    #curTitle {
        font-size: 2.7rem;
        color: #ededed;
        text-shadow: 0 0 0.2rem rgb(91, 111, 119), 1px 0 2px black, 0 1px 2px black, -1px 0 2px black, 0 -1px 2px black;
        font-weight: bold;
        font-family: 'Sunflower';
        text-align: center;
        letter-spacing: 0.12rem;
    }

    #curName {
        color: rgb(198, 51, 35);
        font-weight: bold;
        text-shadow: -1px -1px 0 #470404, 1px -1px 0 #470404, -1px 1px 0 #470404, 1px 1px 0 #470404;
        font-size: 1.82rem;
        letter-spacing: 0.15rem;
        font-family: 'Nostalgia';
        text-align: left;
    }

    @media screen and (max-width: 414px) {
        #projTitle {
            font-size: 45px;
        }

        #curTitle {
            display: flex;
            text-align: center;
            align-items: center;
            justify-content: center;
            padding: 0;
        }

        #curFrame {
            width: 100%;
            display: grid;
            grid-template-rows: repeat(3, 1fr);
            grid-template-columns: repeat(2, 2fr) repeat(2, 1.5fr);
            grid-template-areas:
            "t t t t"
            "i i n n"
            "i i e e";
            height: 36vh;
            padding: 0.8rem 0;
        }
    }
</style>