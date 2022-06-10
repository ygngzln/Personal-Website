<script lang="ts">
    import Case from './Case.svelte'
    import E1 from '../assets/p1.png'
    import E2 from '../assets/p2.png'
    import E3 from '../assets/p3.png'
    import E4 from '../assets/p4.png'
    import E6 from '../assets/p6.png'
    import E7 from '../assets/p7.png'
    import E8 from '../assets/p8.png'
    import E9 from '../assets/p9.png'
    import E10 from '../assets/p10.png'
    import E11 from '../assets/p11.png'
    import E12 from '../assets/p12.png'
    import E13 from '../assets/p13.png'
    import E14 from '../assets/p14.png'
    import E15 from '../assets/p15.png'
    import E16 from '../assets/p16.png'
    import E17 from '../assets/p17.png'
    import E18 from '../assets/p18.png'
    import E19 from '../assets/p19.png'
    import E20 from '../assets/p20.png'
    import E21 from '../assets/p21.png'

    let projects = [
        {
            n: 0,
            title: "Wormotron Boss Fight",
            img: E1,
            side: ["Difficulty: Easy", "Language: Scratch", "Status: Finished", "Type: Boss Fight", "Rating: Meh"],
            desc: "One of my first games. Surprisingly, it was only created three years ago in 2019. I feel like I have climbed so high since then. Man. Enjoy this Undertale-type boss fight with cringe-worthy dialogue. And ignore my other cringe-worthy games on my Scratch account. This project was actually pretty good for a kid. 6/10, cringe, uninteractive/uninteresting, not fun",
            link: "https://scratch.mit.edu/projects/353962868/"
        },
        {
            n: 1,
            title: "Craze Boss Fight",
            img: E2,
            side: ["Difficulty: Easy", "Language: Scratch", "Status: Not Working", "Type: Boss Fight", "Rating: Meh"],
            desc: "Another one of my games, similar to the Wormotron Boss Fight. It was made shortly after the Wormotron boss fight and started a sort of storyline (that was unfinished). It's much harder but the health does not work. It also has cringe dialogue and is like an Undertale-boss fight. Pretty fleshed out and not bad. 6.5/10, health not working, nice boss fight, good graphics",
            link: "https://scratch.mit.edu/projects/354782402/"
        },
        {
            n: 2,
            title: "RPG Island",
            img: E3,
            side: ["Difficulty: Easy", "Language: Scratch", "Status: Unfinished", "Type: RPG", "Rating: Potential"],
            desc: "A really interesting game that could've been really fun if I worked on it more. I do not know why I decided to not finish it. Has many cool RPG concepts and nice graphics. Had a lot of potential and was really good for me two years ago. 8/10 beautiful but sadly unfinished",
            link: "https://scratch.mit.edu/projects/360743709/"
        },
        {
            n: 3,
            title: "2-Player Battle",
            img: E4,
            side: ["Difficulty: Medium", "Language: Scratch", "Status: Buggy", "Type: Fighting Game", "Rating: Impressive"],
            desc: "Ok. Wow. I am amazed at how a literal 10 year old created this. I still wonder to this day how a lazy, unintelligent ten year old could accomplish this. This is by far the best game I have ever created in Scratch. Also unironically the most popular and viewed. This game, as the name implies, is a two-player fighting game using two sets of keys on one keyboard. The characters are well drawn out and extremely unique, artistic, and creative. The maps are weird but alright. The game is balanced and the graphics are great. I can tell a lot of effort went into this. 9/10 project, used to work but I don't know why there are bugs. Lovely project otherwise.",
            link: "https://scratch.mit.edu/projects/355985054/"
        },
        {
            n: 4,
            title: "Python Platformer",
            img: "none",
            side: ["Difficulty: Easy", "Language: Python", "Status: Unknown", "Type: Platformer", "Rating: Basic"],
            desc: "A python platformer that I remember creating. I do not have the file or the game anymore so there is no link or image. I do not remember when exactly it was created but it must've been in 2019. It was basically a spinoff of the dinosaur game, but created with Python and Pygame. It was a pretty good project and it was a nice introduction to get me out of block coding. 4/10 Messy, boring, but it's solid",
            link: ""
        },
        {
            n: 5,
            title: "Derpknight Dungeons",
            img: E6,
            side: ["Difficulty: Medium", "Language: JS (with processingJS)", "Status: Finished", "Type: Dungeon", "Rating: Meh"],
            desc: "A game made with processingJS and is one of the first games I remember making with JS at all. I started it February 17th, 2020. One of the first programs I made with JS anyways. I also used p5play. The game is about a knight who is in a dungeon. There is only one room of the dungeon and your objective is to kill the lizard with your sword/lance (idk) and retrieve the coin. 7/10 nice, solid, lacking in content",
            link: "https://openprocessing.org/sketch/843164"
        },
        {
            n: 6,
            title: "Flatformer",
            img: E7,
            side: ["Difficulty: Medium-Hard", "Language: JS (with processingJS)", "Status: Finished", "Type: Platformer", "Rating: Pretty good"],
            desc: "Shows a good understanding of JS. Started July 3rd, 2020. However, there is some spaghetti code that messes up the platform generation, boulders, arrows, and clouds. Other than that, really good game. I was proud of this and accomplishing using OpenProcessing's version of localstorage for highscores. 7.5/10 spaghetti code, boring",
            link: "https://openprocessing.org/sketch/926165"
        },
        {
            n: 7,
            title: "3D World Parkour",
            img: E8,
            side: ["Difficulty: Hard", "Language: JS (with processingJS)", "Status: Finished", "Type: 3D Platformer", "Rating: Impressive"],
            desc: "My first 3D program using webGL started in the 25th of January of 2021. I was basically carried by my coding teacher for this one. There was a lot of math used for collisions and camera. Both of which I had no understanding of because I had no idea what a sine, cosine, or unit circle was. 7/10 Not bad, lacks graphics, not much content but cool",
            link: "https://openprocessing.org/sketch/1075845"
        },
        {
            n: 8,
            title: "Guessing Game",
            img: E9,
            side: ["Difficulty: Baby", "Language: NodeJS", "Status: Finished", "Type: Guessing Game", "Rating: Bad"],
            desc: "Since I had only done ProcessingJS and stuff like that, I had not seen much of websites (though I did make one in 2019) or less object oriented JS. I had only been using JS for games and stuff so I decided to teach myself the other ways to use JS, like logic, etc. Discovered LeetCode later for that, but that's another story. Simple game, just guess the number. 1/10 classic, bland, self explanatory.",
            link: "https://replit.com/@yilitcs2/Guessing-Game"
        },
        {
            n: 9,
            title: "Multiplayer Cube Fighting Game",
            img: E10,
            side: ["Difficulty: Hard", "Language: NodeJS", "Status: Unfinished", "Type: 2D Fighting", "Rating: Impressive"],
            desc: "My first game that uses clients and servers to make a multiplayer game. In this game, you can choose your color and name and enter a Smash bros-like stage. You have a sword which you can swing to take off health of other players. There is also dashing and movement boosts. Used p5play, nodeJS, and socketIO. Hard to read code, I don't even understand some of it because my teacher wrote a lot of it. Extremely laggy and buggy however and has problems due to libraries and REPLIT not drawing/updating offscreen or not doing it fast enough. 8.5/10",
            link: "https://replit.com/@yilitcs2/socket-test"
        },
        {
            n: 10,
            title: "Aim Trainer",
            img: E11,
            side: ["Difficulty: Medium", "Language: Vanilla JS", "Status: Finished", "Type: Targets", "Rating: Meh"],
            desc: "Game where there are targets and you click on them. Returns your reaction time and accuracy. Early teenager me decided he wanted to do something by himself and so in late 2021, he created Aim Trainer. Pretty good, simply click on targets. Had a lot of trouble making targets spawn within the map and moving them around. My DOM skills were messy and the DOM code is a complete mess. 7.5/10 kind of lacking but at least I made it myself.",
            link: "https://replit.com/@yilitcs2/AimTrainer"
        },
        {
            n: 11,
            title: "BrainF Inputs",
            img: E12,
            side: ["Difficulty: 💀", "Language: BrainF", "Status: Unfinished", "Type: Simple Printing", "Rating: Meh"],
            desc: "Yes, I decided to do a dumb and use BrainF for fun. It isn't that hard honestly. Just keep in mind which memory pointers you are at or it gets reaaaal messy. Anyways, it was supposed to be a text adventure but I was not energetic enough to complete that fully. Ended up making a \"What's your name\" type of program. 2/10 Useless, bland, bad but points for using brainF I guess.",
            link: "https://replit.com/@yilitcs2/BrainF-Inputs"
        },
        {
            n: 12,
            title: "Bonfire",
            img: E13,
            side: ["Difficulty: Hard", "Language: NodeJS", "Status: Unfinished", "Type: Chatting", "Rating: Impressive"],
            desc: "Funny 13 year old was not satisfied with Aim Trainer and decided to create Bonfire on March 14th, 2022. Huge success: Made one of my first programs that didn't make me feel like a feeble basement dweller. Basically a chat room. I decided not to go through with the entire project because I basically started my coding skills up there. Bonfire was the beginning of my career. 9.5/10 Bad color and unfinished emojis",
            link: "https://replit.com/@yilitcs2/Bonfire"
        },
        {
            n: 13,
            title: "EggSite",
            img: E14,
            side: ["Difficulty: Hard-Extreme", "Language: NodeJS with ReactJS", "Status: Finished", "Type: Personal Website", "Rating: Impressive"],
            desc: "Funny 13 year old saw all the other programmers had personal websites and made one himself. Self-explanatory. Used MERN stack. Implemented MongoDB into my poll as a database. Discovered APIs, databases, server hosting, and basically the entirety of backend with JS. 6/10 ugly + lacking in content + ratio + didn't ask + EggSite2 is better.",
            link: "https://eggsite.herokuapp.com"
        },
        {
            n: 14,
            title: "NaidBot",
            img: E15,
            side: ["Difficulty: Medium-Hard", "Language: JS", "Status: In-Progress", "Type: Discord Bot", "Rating: Pretty Good - Impressive"],
            desc: "A discord bot that does all kinds of stuff. Reaction roles, ban commands, kick commands, profile picture command, random insult command, and wynncraft API access commands. Started testing it in my server on March 28th, 2022. Was a nice success and I learned more about APIs when accessing the Wynncraft API. 8/10 Useful, solid, no bugs, could be more",
            link: "https://github.com/ygngzln/NaidBot"
        },
        {
            n: 15,
            title: "First Svelte Website",
            img: E16,
            side: ["Difficulty: Easy", "Language: JS (SvelteJS)", "Status: Finished", "Type: Website", "Rating: Bad"],
            desc: "A really simple Svelte website that I created on Replit to understand the bare minumum of Svelte. Basically put my favorite Pokemon in the middle of the website and made code that makes it spin on click. Also used some other animations for other stuff. 11/10 Spinny mega aerodactyl go brrrr",
            link: "https://replit.com/@yilitcs2/Svelte"
        },
        {
            n: 16,
            title: "Svelte Spring Break Schedule Website",
            img: E17,
            side: ["Difficulty: Easy", "Language: JS (SvelteJS)", "Status: Finished", "Type: Website", "Rating: Bad"],
            desc: "A little schedule I made to make sure I stay productive over my Spring Break. The schedule eventually was not a sucess but I still did more than half the things I planned on there. Learned a lot. Got some imposter syndrome but benefited myself in the end with much knowledge. Worth. 2/10 Bland, no content, didn't work out as expected but not all things can come true as perfect as we expect them to, just accept what you have, and ask yourself why you needed so much in the first place.",
            link: "https://github.com/ygngzln/MySvelteSpringBreakSchedule"
        },
        {
            n: 17,
            title: "Inaccurate Java Wynncraft Boss Kill Time Calculator",
            img: E18,
            side: ["Difficulty: Easy-Medium", "Language: Java", "Status: Unfinished", "Type: Calculator", "Rating: Bad"],
            desc: "A really inaccurate calculator on boss-kill time in Wynncraft. Nothing more to explain here. 2/10 barley any content and basically unusable.",
            link: "https://replit.com/@yilitcs2/Inaccurate-Java-Wynncraft-Boss-Kill-Time-Calculator-IJWBKTC"
        },
        {
            n: 18,
            title: "WynnBoss",
            img: E19,
            side: ["Difficulty: Hard", "Language: JS (SvelteJS)", "Status: Unfinished", "Type: Calculator", "Rating: Not Bad"],
            desc: "Basically the project above, a boss kill time calculator for Wynncraft, except I made it into a functioning website in Svelte. Many features do not work, like build copying, spells, blundering, choking, etc. There was way too much math that would've taken way too long. And with the addition of the upcoming Wynncraft 2.0, I decided to scrap the website because Wynncraft 2.0 would create too many boss fight possibilities. 7.5/10 Bad math, good graphics.",
            link: "https://github.com/ygngzln/Unfinished-WynnBoss"
        },
        {
            n: 19,
            title: "2048",
            img: E20,
            side: ["Difficulty: Easy-Medium", "Language: Vanilla JS", "Status: Unfinished", "Type: Minigame", "Rating: Meh"],
            desc: "I speedran this project in about an hour and 30 minutes. Was pretty simple, however, I did some stuff wrong so the 2048 game does not function correctly. I was heading in the right direction and could've fixed it given more time, but I decided to abandon the idea to work on bigger projects. Did pretty well. 5.5/10 Unfinished, unworking",
            link: "https://replit.com/@yilitcs2/2048"
        },
        {
            n: 20,
            title: "Lenk Defenders",
            img: E21,
            side: ["Difficulty: Medium-Hard", "Language: Vanilla JS", "Status: Finished", "Type: Wave Defense", "Rating: Impressive"],
            desc: "Started on May 24th. I started this project for an elective in school where I had the option to make a program out of any language of my choice. So, I used the language I'm best at, JS, and got to work. The game is pretty simple. Keep killing the mobs and getting through waves and prestige every 10 waves. The game is pretty short in terms of progress, but I used a lot of concepts I had seen before. Creating the movement for the mobs had problems for me because I did not know what way I should have them follow and ended up with some weird movement. The hardest part for me was creating collisions, as I had never done side-specific collisions. 8.5/10 Really good game",
            link: "https://replit.com/@yilitcs2/Lenk-Defenders"
        }
    ]
</script>

<div id="buttons">
    <div id="github">
        <a href="https://github.com/ygngzln?tab=repositories" target="_blank">Github Project Repositories</a>
    </div>
</div>

{#each projects as x}
    <Case project={x} n={x.n}/>
{/each}

<style>
    a {
        color: turquoise;
        text-decoration: none;
    }

    #buttons {
        margin-top: 172px;
        display: inline-block;
        position: fixed;
    }

    #github {
        background-color: darkblue;
        border-radius: 8px;
        padding: 7px;
        font-size: 24px;
        font-weight: bold;
    }

    #github:hover {
        font-size: 25px;
        background-color: rgb(0, 0, 200);
    }
</style>