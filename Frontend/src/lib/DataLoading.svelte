<script lang="ts">
    import { onMount } from "svelte";
    let animation: number = Math.floor(Math.random()*3)+1; //1-3 Inclusive
    if(animation == 1) {
        animation = Math.floor(Math.random()*3)+1;
    }else{
        animation = 4;
    }
    let load1:HTMLElement, load2:HTMLElement, loadFull:HTMLElement;

    onMount(async() => {
        if(animation == 1) {
            load1.style.animation = loadFull.className + "-loadh1 3.5s infinite";
            load2.style.animation = loadFull.className + "-loadh2 3.5s infinite";
        }else if(animation == 2) {
            loadFull.style.animation = loadFull.className + "-loadh12 12s infinite";
            loadFull.style.animationTimingFunction = "ease-in-out"
        }else if(animation == 3) {
            load1.style.animation = loadFull.className + "-loadh13 3.5s infinite";
            load2.style.animation = loadFull.className + "-loadh23 3.5s infinite";
        }else if(animation == 4) {
            load1.style.animation = loadFull.className + "-loadh14 3.5s infinite";
            load2.style.animation = loadFull.className + "-loadh24 3.5s infinite";
            loadFull.style.animation = loadFull.className + "-loadh34 3.5s infinite";
        }
    })
</script>

<span id="load" bind:this={loadFull}>
    <span id="half1" bind:this={load1}>Load</span><span id="half2" bind:this={load2}>ing...</span>
</span>
<div id="grr">(May take up to 2 minutes if data is starting up...)</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Michroma&display=swap');

    #load {
        color: white;
        font-family: 'Michroma', sans-serif;
        font-size: 40px;
        max-height: 60px;
        background: rgb(0, 0, 0, 0.2);
    }

    #grr {
        color: white;
        font-family: 'Michroma', sans-serif;
        background: rgb(0, 0, 0, 0.2);
        margin-top: 10px;
        font-size: 12px;
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
            border-radius: 20px 20px 5px 1em;
            padding: 0 5px 8px 30px;
            margin-right: 5px;
        }
        75% {
            border-bottom: 4px double white;
            border-left: 4px double white;
            border-radius: 20px 20px 5px 1em;
            padding: 0 5px 8px 45px;
            margin-right: 10px;
        }
    }

    @keyframes loadh24 {
        25% {
            border-right: 4px double white;
            border-bottom: 4px double white;
            border-radius: 20px 20px 1em 5px;
            padding: 0 30px 8px 5px;
            margin-left: 5px;
            
        }
        75% {
            border-right: 4px double white;
            border-bottom: 4px double white;
            border-radius: 20px 20px 1em 5px;
            padding: 0 45px 8px 5px;
            margin-left: 10px;
        }
    }

    @keyframes loadh34 {
        25% {
            background: rgb(255, 255, 255, 0.6);
            border-radius: 20px 20px 1em 1em;
            padding-bottom: 8px;
        }
        75% {
            background: rgb(255, 255, 255, 0.2);
            border-radius: 20px 20px 1em 1em;
            padding-bottom: 8px;
        }
    }
</style>