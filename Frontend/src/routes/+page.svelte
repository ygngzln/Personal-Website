<script lang="ts">
    import {fly} from 'svelte/transition'
</script>

<div id="image" in:fly={{x:-500, duration: 350}}>
    <span id="title">
        Yigeng Lin
    </span>
    <span id="sub">
        Computer Science Major
    </span>
    <hr>
    <div id="frame">
        <div id="projects">
            <a href="/Projects">My Projects</a>
        </div>
        <div id="abouttext">
            <a href="/About">More About Me!</a>
        </div>
        <div id="image2">
            <a href="/Pictures">Places I've Been</a>
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
        text-shadow: 0px 0px 1px salmon, 0px 0px 4px black, 0px 0px 4px black, 0px 0px 8px black;
    }

    #sub {
        margin: 0.5% 0;
        font-size: 2rem;
        text-shadow: -1.4px -1.4px 0.1px rgb(91, 91, 91), 1.4px -1.4px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 0px 0px 2px red;
        letter-spacing: 0.2em;
        color: rgb(211, 116, 143);
        font-family: 'ChocoShake';
    }

    #frame {
        width: 92%;
        display: grid;
        grid-template-columns: 5fr 2fr 3fr;
        grid-template-rows: 3fr 3fr 4fr;
        grid-template-areas:
        "t p p"
        "i p p"
        "e m m";
        height: 38rem;
        gap: 2%;
        margin-top: 1rem;
    }

    #projects {
        grid-area: p;
        background: url('../assets/projects.png');
        background-size:cover;
        background-repeat: no-repeat;
        background-position-y: 18%;
        font-size: 3em;
        font-family: "Nostalgia";
        font-weight: bold;
        text-decoration: none;
        border-width: 0.1em 0.15em;
        border-style: double groove;
        border-color: white black;
        border-radius: 1.8em;
        text-shadow: -0.05rem -0.05rem 0.15rem darkblue, 0.05rem 0.05rem 0.15rem black, 0.05rem -0.05rem 0.15rem black, -0.05rem 0.05rem 0.15rem black;
        transition: all 0.3s linear;
        letter-spacing: 0.072em;
        padding-top: 11rem;
    }

    #projects > :global(a), #abouttext > :global(a), #image2 > :global(a) {
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
        border-radius: 1.7em;
        font-size: 3.4em;
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
        background: url("../assets/pictures/woah.png");
        grid-area: i;
        background-size: cover;
        cursor: pointer;
        background-position-y: 35%;
        border-radius: 15px;
        font-size: 1.35em;
        padding-top: 0.5em;
        text-align: center;
        text-shadow: 0px 0px 1px black;
        transition: all 0.4s;
    }

    #image2:hover {
        font-size: 1.5em;
    }

    #image2 > :global(a) {
        font-family: "Cool";
        text-shadow: 0.04em 0.04em 2px black, -0.04em 0.04em 0.5px black;
        color: white;
        letter-spacing: 0.1em;
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