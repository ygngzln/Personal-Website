<script lang="ts">
    import { Router, Link, Route } from "svelte-navigator";

    const overviewText:String = "First off, I\'d like to say that I am not a hardcore gamer despite having a lot of hours spilled out into some games. I never had any prodigious skill at any because I lose motivation easily and end up staying casual. Kinda sucks because I play a lot but it is what it is."
    const overviewText2:String = "Secondly, this is mostly going to be opinionated so feel free to disagree. I have bad opinions. Enjoy";
    const present:String = "Currently, I really just play Minecraft, and have been since 2017 (and probably even before because of my Wii-U). All I've done in Minecraft to my memory is play some servers and SMPs, not much singleplayer. This game makes up a pretty fat portion of my childhood and means a lot to me. I recommend it to everyone with the time and money (for making the account). Playing with friends or joining communities of online servers makes the experience a lot better.";
    const mcServers:String = "For Minecraft, the two biggest servers (and pretty much only I can remember) are Hypixel and Wynncraft. Hypixel is hella fun with friends, the small minigames are very fun and skyblock is mostly pretty fun. Wynncraft is Minecraft's biggest MMORPG and by just a glance at their map, you can see how crazy it is and how much effort they've put into the game. Both games have their pros and cons but I still recommend both."
    const terraria:String = "I've also played 2D Minecraft, or Terraria, which was gifted to me by my friends who bought a bundle pack thingy (idk how Steam works). It's very different from Minecraft and is so fun, I recommend playing with friends (it's on Steam for a price). Modded is also super easy to set up and my playthroughs of Calamity and 3/4 of Thorium were really fun. If my computer wasn't a Mac (which is kinda bad with Terraria and Steam in general), I definitely would've enjoyed the harder bosses more and tried out Infernum at some point."
    const tetris:String = "Another game I play on my laptop is Tetris. I'm kinda low-skilled at it (I play on Tetrio and Jstris) but when I have the time and patience I do plan on improving and getting at least near Tetrio U rank or something like that. It's pretty fun and a nice flex but might not be for if you're looking for a game with more in it. It has a pretty high skill ceiling and watching pro players will blow your mind."
    const ssbu:String = "Although, I rarely play on my consoles much these days, I have played a lot of Super Smash Bros Ultimate (and 4 but no memory of it) and Breath of the Wild. If you're not going to play online, Smash does get kind of boring but if you and your friends know how to play then it is very fun and has a lot of comedic moments. Recommend if you have the money for a console and have friends (or you could play online but I'm not sure how the state of it is anymore)."
    const botw:String = "Breath of the Wild was one of the first games that amazed me and I thought it was really cool and mysterious. I probably will play Tears of the Kingdom (sequel) some day but right now too lazy. I definitely do recommend it if you're into Zelda games and exploring and stuff."
    const end:String = "That sums up the major games I've played. Obviously, I've played other games that I probably forgot like small browser games. Balancing games and work is very hard for me so I do abstain from playing new things."
    const load:Array<String> = [overviewText, overviewText2, present, mcServers, terraria, tetris, ssbu, botw, end];
</script>
<div id="background">
    <div class="back"> <Link to="/Blogs"> Go back </Link> </div>
    <div id="title"> Games </div>
    <div id="textcont">
        {#each load as text, x}
        <p class="gametext">{text}</p>
        {/each}
    </div>
</div>

<style>
    #background {
        width: 100%;
        height: 100%;
        background-color: black;
        padding-top: 0.5rem
    }

    .back {
        width: 4rem;
        box-sizing: border-box;
        text-decoration: none;
        background: rgb(130, 181, 181);
        font-family: Nostalgia;
        font-size: 0.8rem;
        border: 0.1em solid rgb(69, 108, 108);
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

    #title {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: 0.05em;
        font-family: 'Qarkine';
        font-size: 7rem;
        color: white;
        text-shadow: 0.3rem 0.3rem 1px rgb(58, 58, 58);
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