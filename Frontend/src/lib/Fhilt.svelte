<script>
    import axios from 'axios'
    import {fly, fade} from 'svelte/transition'
    import {linear} from 'svelte/easing'

    const uri = 'https://backendyigeng.herokuapp.com/api/v1/fhilts'
    let maxpages;
    let flist = [];
    let loaded = false;
    let up = false;
    async function maxpg(){
        maxpages = await axios.get(uri)
        for(let x=0;x<maxpages.data.length;x++){
            flist.unshift(maxpages.data[x])
        }
        maxpages = Object.keys(maxpages.data).length
        loaded = true;
    }
    maxpg()

    let page = 1;

    function left(){
        if(page-1 == 0){
            page = maxpages;
            ups()
            return;
        }
        page--
        ups()
    }
    function right(){
        if(page+1 > maxpages){
            page = 1
            ups()
            return;
        }
        page++
        ups()
    }
    function ups(){
        up = !up
    }
</script>

<div id="title" out:fade="{{duration:1}}">🔥 FLAMESHOT HILT COLLECTION 🔥</div>

<button id="left" class="b" on:click={left} out:fade="{{duration:1}}">←</button>
{#if loaded}
    {#key up}
        <img src={flist[maxpages-page].imgLink} alt="Fhilt did not load" width=480 height=545 in:fade="{{easing: linear, duration: 500}}" out:fly="{{x:100, easing:linear, duration: 500}}"/>
    {/key}
{/if}
<button id="right" class="b" on:click={right} out:fade="{{duration:1}}">→</button>

<style>
    #title {
        font-family: fantasy;
        position: absolute;
        width: 100%;
        text-align: center;
        left: 50%;
        transform: translateX(-50%);
        top: 174px;
        font-weight: bold;
        font-size: 40px;
    }

    #right {
        background-color: darkcyan;
        border: 4px solid darkblue;
        top: 55%;
        left: 75%;
        transform: translateX(-50%);
        position: absolute;
    }

    #left {
        background-color: darksalmon;
        border: 4px solid darkred;
        top: 55%;
        left: 25%;
        transform: translateX(-50%);
        position: absolute;
    }

    img {
        top: 30%;
        left: 50%;
        transform: translateX(-50%);
        position: absolute;
    }

    .b {
        font-size: 80px;
        font-family:Verdana, sans-serif
    }

    .b:hover {
        font-size: 85px;
        cursor: pointer;
    }
</style>