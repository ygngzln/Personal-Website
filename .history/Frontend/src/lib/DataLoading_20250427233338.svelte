<script lang="ts">
    import { onMount } from "svelte";
    let animation: number = Math.floor(Math.random()*3)+1;
    if(animation == 1) {
        animation = Math.floor(Math.random()*3)+1;
    }else{
        animation = 4;
    }
    let load1:HTMLElement, load2:HTMLElement, loadFull:HTMLElement;

    onMount(async() => {
        load1.style.animation = loadFull.className + "-loadh14 3.5s infinite";
        load2.style.animation = loadFull.className + "-loadh24 3.5s infinite";
        loadFull.style.animation = loadFull.className + "-loadh34 3.5s infinite";
    })
</script>

<div id="case">
    <span id="load" bind:this={loadFull}>
        <span id="half1" bind:this={load1}>Load</span><span id="half2" bind:this={load2}>ing...</span>
    </span>
    <div id="grr">(May take up to a minute if data is starting up...)</div>
</div>
<style>
    #case {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    #load {
        color: white;
        font-family: 'Michroma', sans-serif;
        font-size: 3vw;
        max-height: 3rem;
        background: rgb(0, 0, 0, 0.2);

    }

    #grr {
        color: white;
        font-family: 'Michroma', sans-serif;
        background: rgb(0, 0, 0, 0.2);
        font-size: 0.6rem;
        margin: 0.75rem 0;
    }

    @keyframes loadh1 {
        0% {
            margin-right: 0px;
            color: skyblue;
        }
        50% {
            margin-right: 100px
        }
        80% {
            margin-right: -150px;
        }
        100% {
            margin-right: 0px;
        }
    }

    @keyframes loadh2 {
        0% {
            margin-left: 0px;
            color: coral;
        }
        50% {
            margin-left: 50px;
        }
        80% {
            margin-left: -150px;
        }
        100% {
            margin-left: 0px;
        }
    }

    @keyframes loadh12 {
        0% {
            margin-right: 0px;
            font-weight: normal;
        }
        1% {
            margin-right: 50px;
            font-weight: 500;
        }
        2% {
            margin-right: -50px;
            font-weight: 600;
        }
        3% {
            margin-right: 50px;
            font-weight: 700;
        }
        4% {
            margin-right: -50px;
            font-weight: 750;
        }
        5% {
            margin-right: 50px;
            font-weight: 800;
        }
        6% {
            margin-right: -50px;
            font-weight: 850;
        }
        7% {
            margin-right: 50px;
            font-weight: 875;
        }
        8% {
            margin-right: -50px;
        }
        9% {
            margin-right: 50px;
        }
        10% {
            margin-right: -50px;
            font-weight: bolder;
        }
        30% {
            font-weight: 800;
        }
        50% {
            font-weight: 650;
            color: silver;
        }
        90% {
            margin-right: 50px;
            font-weight: 500;
        }
        100% {
            margin-right: 0px;
            font-weight: normal;
        }
    }
    
    @keyframes loadh13 {
        0% {
            color: gold;
        }
        50% {
            color: gold;
            text-shadow: -2px 0px 2px orange, -4px 0 yellow, -6px 0 white;
            font-weight: bold;
            margin-right: 10px;
        }
        100% {
            color: gold;
        }
    }

    @keyframes loadh23 {
        0% {
            color: gold;
        }
        50% {
            color: gold;
            text-shadow: 2px 0 2px orange, 4px 0px yellow, 6px 0px white;
            font-weight: bold;
            margin-left: 10px;
        }
        100% {
            color: gold;
        }
    }

    @keyframes loadh14 {
        25% {
            border-bottom: 4px double white;
            border-left: 4px double white;
            border-radius: 1rem 1rem 5px 1em;
            padding: 0 5px 0.4rem 1.5rem;
            margin-right: 5px;
        }
        75% {
            border-bottom: 4px double white;
            border-left: 4px double white;
            border-radius: 1rem 1rem 5px 1em;
            padding: 0 0.25rem 0.4rem 2.25rem;
            margin-right: 0.5rem;
        }
    }

    @keyframes loadh24 {
        25% {
            border-right: 4px double white;
            border-bottom: 4px double white;
            border-radius: 1rem 1rem 1em 5px;
            padding: 0 1.5rem 0.4rem 0.25rem;
            margin-left: 0.25rem;
            
        }
        75% {
            border-right: 4px double white;
            border-bottom: 4px double white;
            border-radius: 1rem 1rem 1em 5px;
            padding: 0 2.25rem 0.4rem 5px;
            margin-left: 0.5rem;
        }
    }

    @keyframes loadh34 {
        25% {
            background: rgb(255, 255, 255, 0.6);
            border-radius: 1rem 1rem 1em 1em;
            padding-bottom: 0.4rem;
        }
        75% {
            background: rgb(255, 255, 255, 0.2);
            border-radius: 1rem 1rem 1em 1em;
            padding-bottom: 0.4rem;
        }
    }
</style>