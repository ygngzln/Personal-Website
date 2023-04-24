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

    axios.get(uri)

    let list:any;
    let loaded:boolean = false
    async function get(){
        window.scrollTo(0,0);
        list = await axios.get(uri)
        list = list.data;
        loaded = true;
    }
    get()
</script>

<div id="projTitle">PROJECTS</div>

<div class="center">
    {#if loaded}
        {#each list as x}
            <Case project={x}/>
        {/each}
    {:else}
        <DataLoading />
    {/if}
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=BhuTuka+Expanded+One&display=swap');

    #projTitle {
        position: relative;
        font-size: 60px;
        margin-top: 20px;
        color: white;
        text-align: center;
        font-family: "BhuTuka Expanded One", cursive;
        font-weight: bold;
    }

    .center {
        margin-top: 25px;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 60px;
        justify-content: center;
        position: relative;
    }
</style>