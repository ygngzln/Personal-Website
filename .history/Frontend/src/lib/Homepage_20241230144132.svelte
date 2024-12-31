<script lang="ts">
    import { Link } from "svelte-navigator";
    import {fly} from 'svelte/transition'
</script>

<div id="image" in:fly={{x:-500, duration: 350}}>
    <span id="title">
        Yigeng Lin
    </span>
    <span id="sub">
        Programmer
    </span>
    <hr>
    <div id="frame">
        <div id="projects">
            <Link to="/Projects">My Projects</Link>
        </div>
        <div id="abouttext">
            <Link to="/About">More About Me!</Link>
        </div>
        <div id="image2">
            <Link to="/Pictures">Pictures!</Link>
        </div>
    </div>
</div>

<style>
    #image {
        position: relative;
        max-width: 100%;
        text-align: center;
        background: url("../assets/ar.jpeg");
        background-size: cover;
        background-position-y: 100%;
        image-rendering: crisp-edges;
        color:white;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        padding: 1em 2em 3em 2em;
    }

    #image > hr {
        width: 75%;
        margin-bottom: 2%;
        height: 0.075em;
        background: black;
    }

    #title {
        font-size: 5.4em;
        font-family: 'Sunflower';
        font-weight: lighter;
        letter-spacing: 0.1em;
        text-shadow: -2px -2px 0 rgb(0, 0, 0), 1px -1px 1px #000, -1px 1px 1px #000, 1px 1px 1px #000;
    }

    #sub {
        margin: 0.5% 0;
        font-size: 1.8rem;
        text-shadow: -1.4px -1.4px 0.2px rgb(91, 91, 91), 1.4px -1.4px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
        letter-spacing: 0.2em;
        color: rgb(153, 197, 212);
        font-family: 'ChocoShake';
    }

    #frame {
        width: 92%;
        display: grid;
        grid-template-columns: 5fr 2fr 3fr;
        grid-template-rows: 3fr 3fr 4fr;
        grid-template-areas:
        "p i i"
        "t i i"
        "e m m";
        height: 38rem;
        gap: 2%;
        margin-top: 1rem;
    }

    #projects {
        grid-area: p;
        background: url('../assets/projects.png');
        background-size:cover;
        background-position-y: 18%;
        background-repeat: no-repeat;
        font-size: 2.4em;
        font-family: "Cool";
        font-weight: lighter;
        outline: 0.1rem solid rgb(141, 160, 168);
        text-decoration: none;
        border-radius: 15px;
        text-shadow: -0.05rem -0.05rem 0.1rem darkblue, 0.05rem 0.05rem 0.1rem black, 0.05rem -0.05rem 0.1rem black, -0.05rem 0.05rem 0.1rem black;
        transition: all 0.3s linear;
    }

    #projects > :global(a), #abouttext > :global(a) {
        height: 100%;
        width: 100%;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #projects:hover {
        cursor: pointer;
        animation: hoverInfo 1s;
        border-radius: 10px;
        font-size: 2.7em;
        transition: all 0.3s linear;
    }

    #abouttext {
        grid-area: t;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 15px;
        background: url('../assets/wah.png');
        background-size: cover;
        background-position-y: 20%;
        text-decoration: none;
        color: white;
        text-shadow: -0.1rem -0.1rem 0 black;
        font-size: 1.9em;
        font-family: 'Cool';
        transition: all 0.5s linear;
    }

    #abouttext:hover {
        cursor: pointer;
        animation: hoverInfo 1s;
        border-radius: 10px;
        font-size: 2.1em;
        transition: all 0.5s linear;
    }

    #image2 {
        background: url("../assets/woah.png");
        grid-area: i;
        background-size: cover;
        cursor: pointer;
        border-width: 0.2em 0.25em;
        border-style: double groove;
        border-color: white black;
        border-radius: 2em;
        font-size: 1.5em;
        padding-top: 0.5em;
        text-align: center;
    }

    #image2 > :global(a) {
        font-family: "Cool";
        text-shadow: 0.075em 0.075em 1px black;
        color: white;
        letter-spacing: 0.25em;
        font-size: 1.5em;
    }

    @media screen and (max-width: 414px) {
        #frame {
            grid-template-rows: 1fr 1fr 1.2fr;
            grid-template-columns: 4fr 2fr 3fr;
            height: 45vh;
        }
    }
</style>