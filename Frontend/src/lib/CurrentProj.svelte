<script lang="ts">
    import {onMount} from 'svelte';
    let cimg: any;
    export let currentproject: any;
    let stringstart = import.meta.env.VITE_BACKEND;
    onMount(async () => {
        cimg.src = stringstart + "api/v1/imgs/current.png"
    });
</script>

<div id="next">
    <div id="ptitlelabel">Project Name: " <span id="ptitle">{currentproject.projectName}</span> "</div>
    <div id="imgdiv"><img src="#" bind:this={cimg} id="cimg" alt="Project not found" height=300 width=300/></div>
    <div class="dates">
        Started: <span id="begin">{currentproject.datebegin}</span><br>
    </div>
    <div class="dates">
        Estimated date to be finished by: <span id="estfin"> {currentproject.estimatedfinish} </span>
    </div>
</div>

<style>
    #next {
        position: relative;
        color: white;
        font-size: 22px;
        text-align: center;
        padding: 5px 10px 10px 10px;
        width: 50%;
    }

    #begin {
        color: orange;
        font-weight: bold;
    }

    #estfin {
        color: lime;
        font-weight: bold;
    }

    #cimg {
        border: 20px ridge gold;
    }
    
    #imgdiv {
        margin: 10px 0;
    }

    #ptitle {
        font-family: 'DynaPuff', cursive;
        font-size: 35px;
    }

    .dates {
        font-family: 'Playfair Display', serif;
        margin-bottom: 18px;
        font-size: 28px;
    }

    @media screen and (max-width: 414px) {
        #next {
            width: 100%;
        }

        #ptitlelabel {
            font-size: 20px;
        }

        #ptitle {
            font-size: 15px;
        }

        .dates {
            font-size: 16px;
            margin-bottom: 12px;
        }

        img {
            width: 150px;
            height: 150px;
        }
    }
</style>