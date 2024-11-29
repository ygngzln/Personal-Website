<script lang="ts">
    import { Link } from "svelte-navigator";
    import games from '../assets/games.png'
    import woah2 from '../assets/woah2.png'
</script>
<div id="background">
    <div id="blogTitle"> Blogs </div>
    <div id="blogContainer">
        <div class="blogLink">
            <Link to="/Blogs/Games">
                <img class="blogImg" src={games} alt="Games"/>
                <h2>Gaming ˙✧˖°🎮⋆｡˚</h2>
                <h3>My experiences with the multiple games I've played over the years and my opinions on them</h3>
            </Link>
        </div>
        <div class="blogLink">
            <Link to="/Blogs/Camp">
            <img class="blogImg" src={woah2} alt="Camp"/>
            <h2>☾˖✧°𖤓🏕 Camping and White Stag Leadership</h2>
            <h3>Experience of being on Monterey White Stag Youth Leadership and the camping opportunities it gives</h3>
            </Link>
        </div>
    </div>
</div>

<style>
    #background {
        width: 100%;
        height: 100%;
        background: url('../assets/moonclouds.jpeg');
        background-size: cover;
    }

    #blogTitle {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: 0.1em;
        font-family: 'Mirage';
        font-size: 7rem;
        font-weight: bold;
        color: rgb(1, 37, 84);
        text-shadow: 0.1rem 0.1rem 5px rgba(83, 83, 83, 0.7), -0.1rem -0.1rem 5px rgba(83, 83, 83, 0.7);
    }

    #blogContainer {
        width: 100%;
        box-sizing: border-box;
        padding: 2% 0;
        display: flex;
        align-items:start;
        flex-direction: row;
        justify-content: center;
    }

    .blogImg {
        width: 100%;
        height: 18em;
        box-sizing: content-box;
    }

    .blogLink {
        width: 40%;
        padding: 0.75em 0.8em 0.75em 0.8em;
        margin: 0.2em 0.4em;
        box-sizing: border-box;
        background-color: rgb(213, 234, 249);
    }

    .blogLink:hover {
        text-decoration: underline;
        cursor: pointer;
    }

    h2 {
        margin: 0.4rem 0 0.1rem 0;
        font-size:1.4rem;
        color: black;
    }
    
    h3 {
        color: dimgrey;
        line-height: 1.3rem;
        font-size: 0.9rem;
        margin: 0.4rem 0 0.1rem 0;
    }

    @media screen and (max-width: 414px) {
        .blogLink {
            width: 45%;
        }
        .blogImg {
            height: 10em;
        }
    }
</style>