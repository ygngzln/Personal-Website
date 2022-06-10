<script lang="ts">
    import Hometab from './Hometab.svelte'
    import {createEventDispatcher} from 'svelte'
    import {Router, Link} from 'svelte-routing'
    import F from '../assets/fhilt.png'
    
    const dispatcher = createEventDispatcher()

    let msg1 = [
        "This is my new personal website. My previous personal website, EggSite 1, was created with the JS library reactJS. This website was made with SvelteJS. Out of the two (common to popular opinion), I liked Svelte better. I hope that this website is an improvement and I continue to make more websites and side projects as time goes on and my mind has ideas."
    ]

    let msg2 = [
        "Cleaner + Better",
        "\u00A0",
        "Added:",
        "\u00A0",
        "+ Animations",
        "+ Dynamic Blog Updating",
        "+ Goals With Blog",
        "+ Project Page",
        "+ Other Accounts Buttons",
        "+ Other Pages",
        "+ Flameshot Hilt Collection Page (Wynncraft)",
        "+ New Site Theme",
        "+ Github Hosting",
        "\u00A0",
        "Removed:",
        "\u00A0",
        "- Old Previous Theme",
        "- Wynncraft Weapon Poll (This will remain in version ONE)",
        "- Eggburger Page",
        "- ReactJS",
        "- Heroku Hosting"
    ]

    let msg3 = [
        "I'm Egg and I'm just a kid that likes coding. Creating and using products (not drugs lmao) give me a feeling of accomplishment. I know a lot of JS but I haven't gotten to the point where I can easily complete medium problems on Leetcode. My HTML and CSS skills are... ok... I guess? I also have some (a bit of) knowledge of Typescript, Python, Lua, Ruby, C++, Java, C#, and weirdly, BrainF. I intend on expanding mostly Lua, C++, and Java as I'm going to use those three the most for pretty much everything (Lua for Roblox programming). In terms of JS website libraries and frameworks, I have used only Svelte and React so far. In the future, I am mostly likely going to try Vue (I have heard about Nuxt3) and React Native. Have a good day!"
    ]
</script>

<Hometab tabmsg="About My Website" msg={msg1} left=27 top=181/>
<Hometab tabmsg="Changes" msg={msg2} left=73 top=181/>
<Hometab tabmsg="About Me" msg={msg3} left=27 top=460/>
<Router url="">
    <Link to="/Fhilts"><img src="{F}" id="fhilt" on:click={function(){ dispatcher("fhiltpage") }} width=40 height=40 alt="Fhilt"/></Link>
</Router>

<style>
    #fhilt {
        position: absolute;
        right: 2%;
        transform: transalteX(-50%);
        border: 8px groove mediumaquamarine;
        background-color: darkcyan;
        padding: 6px;
        top: 174px;
    }

    #fhilt:hover {
        border: 10px groove mediumaquamarine;
        cursor: pointer;
    }
</style>