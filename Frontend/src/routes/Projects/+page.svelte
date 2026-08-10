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
    let srclist:string[]
    let loaded:boolean = false;
    onMount(async () => {
        window.scrollTo(0,0);
        list = await axios.get(uri).then((res) => res.data);
        srclist = Array.from(list, (x:any) => import.meta.env.VITE_BACKEND + "api/v1/imgs/"+ x.img);
        await preload();
        loaded = true;
    })

    async function preload() {
        return new Promise(function(resolve) {
            for(let x = 0; x < list.length; x++){
                let img = new Image();
                img.onload = resolve;
                img.src = srclist[x];
            }
        })
    }
</script>

<div class="bg-wrapper">
    <img src={moonclouds} alt='not load' class="bg-img" loading='lazy'/>
    <div id="projTitle">PROJECTS</div>
    <div id="curFrame">
        <span id="curTitle">Ongoing work:</span>
        <span id="curName">• Small orienteering sim (plus map generation?)
            <br>• Info-displaying projects</span>
    </div>
    {#if loaded}
    <div id="caseFrame">
        {#each list as x, i}
            <Case project={x} src={srclist[i]}/>
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
        top: 0;
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
        position: relative;
        box-sizing: border-box;
        margin-top: 1.5rem;
        display: grid;
        width: 100%;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-flow: row dense;
        text-align: center;
    }

    #protection {
        background: rgba(0,0,0,0.7);
        padding: 1em 0;
    }

    #curFrame {
        position: relative;
        margin-top: 1rem;
        width: 80%;
        display: grid;
        grid-template-columns: 1.1fr 1fr;
        align-items: center;
        height: 8rem;
        border: 1.5px solid black;
        padding: 0.32rem 0 0.4rem 0;
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
            font-size: 14vw;
            margin-top: 1rem;
        }

        #caseFrame {
            grid-template-columns: repeat(2, 1fr);
            margin-bottom: 0.35rem;
        }

        #curTitle {
            font-size: 2rem;
        }

        #curName {
            font-size: 1rem;
        }

        #curFrame {
            height: 10vh;
            padding: 0.2rem 0.6rem;
            grid-template-columns: 1fr 1fr;
            gap: 0.8rem;
            margin-top: 2rem;
        }
    }
</style>