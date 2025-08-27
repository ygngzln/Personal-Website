<script lang="ts">
    import Case from './Case.svelte'
    import axios from 'axios'
    import DataLoading from './DataLoading.svelte'
    let stringstart:string;
    if(import.meta.env.VITE_NODE_ENV === "development") {
        stringstart = "http://localhost:4000/"
    } else {
        stringstart = import.meta.env.VITE_BACKEND
    }
    let uri:string = stringstart + "api/v1/projects"
    let uri2:string = stringstart + "api/v1/currentproject"

    axios.get(uri)

    let list:any;
    let cur:any;
    let loaded:boolean = false
    async function get(){
        window.scrollTo(0,0);
        list = await axios.get(uri);
        list = list.data;
        cur = await axios.get(uri2);
        cur = cur.data[0];
        loaded = true;
    }
    get();
</script>

<div id="background">
    <div id="projTitle">PROJECTS</div>
    {#if loaded}
    <div id="caseFrame">
        {#each list as x}
            <Case project={x}/>
        {/each}
    </div>

    <div id="curFrame">
        <div id="curTitle">Currently working on:</div>
        <img id="curImg" loading="lazy" src={import.meta.env.VITE_BACKEND + "api/v1/imgs/current.png"} alt="Current Project"/>
        <div id="curName">{cur.projectName}</div>
        <div id="curDL">Estimated finish date: <span class="datestyle">{cur.estimatedfinish}</span></div>
    </div>
    {:else}
        <div id="protection"><DataLoading /></div>
    {/if}
    
</div>

<style>
    #background {
        background: url('../assets/nightsea.jpeg');
        background-size: cover;
        background-position-y: -100px;
    }

    #projTitle {
        position: relative;
        font-size: 9vw;
        padding-top: 1rem;
        box-sizing: border-box;
        color: rgb(3, 3, 73);
        text-align: center;
        font-family: "Energy";
        letter-spacing: 0.1em;
        text-shadow: 0 0 1.25rem white, 0 0 4px rgba(0, 34, 255, 0.628);
    }

    #caseFrame {
        margin-top: 1.5rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-flow: row dense;
        text-align: center;
    }

    #protection {
        background: rgba(0,0,0,0.7);
        padding: 1em 0;
    }

    #curFrame {
        width: 100%;
        display: grid;
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: repeat(2, 1.5fr) repeat(2, 2fr) repeat(2, 1.5fr);
        grid-template-areas:
        "t t i i n n"
        "t t i i e e";
        height: 36vh;
        padding: 0.8rem 0;
    }

    #curTitle {
        grid-area: t;
        font-size: 2.8rem;
        display: flex;
        align-items: center;
        padding-left: 3rem;
        color: rgb(225, 222, 240);
        text-shadow: 0px 0px 2px rgb(25, 25, 83), 0px 0px 10px rgb(101, 8, 145);
        font-family: 'Nostalgia';
        background: rgba(0,0,0,0.1);
    }

    #curImg {
        height: 100%;
        width: 100%;
        grid-area: i;
    }

    #curName {
        grid-area: n;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 1.8rem;
        font-weight: bold;
        font-family: 'Sunflower';
        background: rgba(0,0,0,0.4);
    }

    #curDL {
        grid-area: e;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 1.4rem;
        padding: 0.8rem 1.4rem;
        font-weight: bold;
        font-family: 'NK57';
        color: white;
        text-shadow: 0px 0px 8px black;
        background: rgba(0,0,0,0.4);
    }

    .datestyle {
        color: darkred;
        text-shadow: 0px 0px 0.2rem rgba(174, 166, 146, 0.718);
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