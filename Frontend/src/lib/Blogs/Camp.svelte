<script lang="ts">
    import { Link } from "svelte-navigator";

    const overviewText = "Four years ago, I had no idea how to pack my backpack for a hike or even set up a simple tent. Now, thanks to the experience from being a volunteer at White Stag Leadership Development Camp in Monterey for a few years, I’ve learned outdoor skills like those and much, much more (especially leadership skills of course)."
    const lastText = "As a volunteer, I attend most monthly outdoors meetings and help my patrolmates with planning the summer week of camp. White Stag is a place where you get to see people shine, grow, and share surreal moments. Although sometimes it is hard work and struggles, we always find a way through it. \nYou can find their website by searching up White Stag Monterey."
</script>
<div id="background">
    <div class="back"> <Link to="/Blogs"> Go back </Link> </div>
    <div id="title"> Camp </div>
    <div id="textcont">
        <p class="gametext">{overviewText}</p>
        <p class="gametext">{lastText}</p>
    </div>
</div>

<style>
    #background {
        width: 100%;
        height: 100%;
        background: black;
        padding-top: 0.5rem
    }

    #title {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: 0.05em;
        font-family: 'Qarkine';
        font-size: 8vw;
        color: white;
        text-shadow: 0.2rem 0.2rem 1px black;
    }

    .back {
        width: 4rem;
        box-sizing: border-box;
        text-decoration: none;
        background: rgb(130, 181, 181);
        font-family: Nostalgia;
        font-size: 0.8rem;
        border: 0.1em solid black;
        text-align: center;
        border-radius: 2px;
        margin-left: 0.5rem;
        padding: 0.1rem;
    }

    .back:hover {
        text-decoration: underline;
    }

    .back > :global(a) {
        color: black;
    }

    #textcont {
        display: grid;
        padding: 0 2rem 2rem 2rem;
        color: gainsboro;
        font-size: 1rem;
        font-family: 'NK57';
        text-indent: 2em;
    }

    @media screen and (max-width: 414px) {
        
    }
</style>