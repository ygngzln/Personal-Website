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
        <div id="projects" class="hometitle">
            <a href="/Projects">My Projects</a>
        </div>
        <div id="abouttext" class="hometitle">
            <a href="/About">More About Me!</a>
        </div>
        <div id="image2" class="hometitle">
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
        color: white;
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
        font-size: 6.5rem;
        font-family: 'Quat';
        letter-spacing: 0.09em;
        text-shadow: 0px 0px 1px salmon, 0px 0px 4px black, 0px 0px 4px black, 0px 0px 8px black;
    }

    #sub {
        margin: 0.75rem 0;
        font-size: 2.8rem;
        text-shadow: 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, -1px -1px 0 #000;
        letter-spacing: 0.14rem;
        color: rgb(200, 116, 140);
        font-family: 'Fanwood';
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

    .hometitle {
        background-repeat: no-repeat;
        font-family: "Quat";
        border-radius: 15px;
    }

    .hometitle > :global(a) {
        height: 100%;
        width: 100%;
        color: white;
        display: flex;
        justify-content: center;
        text-shadow: 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, -2px -2px 0 #000;
        align-items: center;
        text-decoration: none;
    }

    #projects {
        grid-area: p;
        background: url('../assets/projects.png');
        background-size: cover;
        font-size: 3.5rem;
        padding-top: 12rem;
        transition: all 0.3s linear;
    }

    #projects:hover {
        cursor: pointer;
        border-radius: 1.2rem;
        font-size: 3.55em;
        transition: all 0.3s linear;
    }

    #abouttext {
        grid-area: t;
        display: flex;
        justify-content: center;
        align-items: center;
        background: url('../assets/wah1.jpg');
        background-size: cover;
        background-position-y: 42%;
        font-size: 3rem;
        transition: all 0.4s linear;
    }

    #abouttext:hover {
        cursor: pointer;
        border-radius: 1.2rem;
        font-size: 3.1rem;
        transition: all 0.3s linear;
    }

    #image2 {
        background: url("../assets/pictures/woah.png");
        background-size: cover;
        grid-area: i;
        cursor: pointer;
        background-position-y: 35%;
        background-position-x: -20%;
        border-radius: 15px;
        font-size: 3rem;
        text-align: center;
        text-shadow: 1.8px -1.8px 0 #000, -1.8px 1.8px 0 #000, 1.8px 1.8px 0 #000, -1.8px -1.8px 0 #000;
        transition: all 0.6s;
    }

    #image2:hover {
        font-size: 3.1rem;
        border-radius: 1.2rem;
    }

    @media screen and (max-width: 414px) {
        #title {
            font-size: 4rem;
        }

        #sub {
            font-size: 2.1rem;
            text-shadow: 0.2px -0.2px 1px #000, -0.5px 0.5px 1px #000, 0.5px 0.5px 1px #000, -0.5px -0.5px 1px #000;
            margin: 1rem 0;
            color: rgb(194, 103, 129);
        }

        #frame {
            grid-template-areas:
            "p"
            "t"
            "i";
            grid-template-columns: auto;
        }

        #projects {
            font-size: 3rem;
            padding-top: 0;
        }

        #abouttext {
            font-size: 2.75rem;
        }

        #image2 {
            font-size: 2.75rem;
        }

        #image2:hover {
            font-size: 2.8rem;
        }
    }
</style>