<script lang="ts">
    import Hometab from './Hometab.svelte'
    import CurrentProj from './CurrentProj.svelte'
    import {createEventDispatcher, onMount} from 'svelte'
    import DataLoading from './DataLoading.svelte'
    import axios from 'axios'
    import {fly} from 'svelte/transition'
    
    const dispatcher = createEventDispatcher()
    let ss: string;
    if(import.meta.env.VITE_NODE_ENV === "development") {
        ss = "http://localhost:4000/"
    } else {
        ss = import.meta.env.VITE_BACKEND
    }
    let uri: string = ss + 'api/v1/currentproject/'
    let err: boolean = false;

    let currentproject: any;
    let loaded:boolean = false;
    onMount(async() => {
        window.scrollTo(0,0);
        currentproject = await axios.get(uri).catch((error) => {
            err = true;
        });
        if(err) return;
        currentproject = currentproject.data[0];
        loaded = true;
    });
    let msgs:any[] = [
        {
            msg: "This is my website. This website is made with Svelte and hosted with Vercel. Uses a NodeJS Rest API for a backend because it's simple. Feel free to leave a suggestion or tell me if there's a bug or somewhere I could improve on! I'm always looking for things to fix!",
            name: "About The Website"
        },
        {
            msg: "I enjoy coding. I know JS and I intend on expanding mostly C++ and maybe Swift. I also want to become skilled in competitive programming because I'm currently not the best at it but am always looking to improve. Have a good day! :)",
            name: "About Me"
        }
    ]

    let splashmsgs:string[] = ["Burning His Eyes Out By Programming", "Petting A Really Large Felis Catus", "Consuming Not Water", "Adjusting That One Image", "Deciding What Project To Make"]
</script>

<div id="image" in:fly={{x:-500, duration: 350}}>
    <div class="opacity">
        <div id="text">
            <div id="title">
                Yigeng Lin
            </div>
            Some Sophomore Who's {splashmsgs[Math.floor(Math.random()*splashmsgs.length)]} <br>
            Currently Inhabits California <br>
            Funny Cats 👍 <br>
        </div>
    </div>
<!-- </div> -->

<!-- <div id="currentprojectImage"> -->
    {#if loaded}
        <!-- <div class="rel" in:fly={{y:-150, duration: 500}}> -->
            <div class="opacity2">
                <span id="currentproject">
                    CURRENTLY WORKING ON:
                </span>
                <CurrentProj currentproject={currentproject}/>
            </div>
        <!-- </div> -->
    {:else}
    <div id="staticspace">
        {#if err}
            <div class="error">There was an error retrieving data. Try reloading. If this problem persists, please tell me.</div>
        {:else}
            <DataLoading />
        {/if}
    </div>
    {/if}
<!-- </div> -->

<span class="tabs" in:fly={{x:-500, duration: 350}}>
    {#each msgs as msg}
        <Hometab tabmsg={msg.name} msg={msg.msg}/>
    {/each}
</span>

</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=PT+Sans');

    #currentprojectImage {
        min-height: 6em;
        position: relative;
        text-align: center;
        background: url('../assets/blackbrick.jpeg');
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .tabs {
        margin-top: 1.5em;
        position: relative;
        min-height: 263.5px;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        display: flex;
        justify-content: center;
    }

    #image {
        position: relative;
        width: 100%;
        text-align: center;
        padding: 10px 0 10px 0;
        background: url('../assets/pc.png');
        background-size: cover;
    }

    .rel {
        background: url('../assets/t.jpeg');
        background-size: cover;
        position: relative;
        text-align: center;
        width: 100%;
    }

    .opacity {
        background-color: rgb(0,0,0,0.55);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4em;
    }

    .opacity2 {
        background-color: rgb(0,0,0,0.6);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin: 2em 2em 2em 2em;
        border-radius: 4em;
    }

    #title {
        font-size: 80px;
        font-family: 'BhuTuka Expanded One', cursive;
        font-weight: bold;
        margin-bottom: 15px;
    }

    #text {
        font-size: 39px;
        line-height:140%;
        font-family: 'PT Sans', sans-serif;
    }

    #currentproject {
        font-size: 40px;
        margin-top: 25px;
        margin-bottom: 10px;
        color: red;
        font-family: 'Aboreto', cursive;
    }

    #staticspace {
        text-align: center;
    }

    .error {
        text-align: center;
        color: white;
        background: rgb(0, 0, 0, 0.3);
        font-family: 'Aboreto', cursive;
    }

    @media screen and (max-width: 414px) {
        #image {
            text-align: center;
            padding: 5px 0 5px 0;
        }

        .opacity {
            padding: 4px;
        }

        .opacity2 {
            margin: 14px;
        }

        #title {
            font-size: 42px;
        }

        #text {
            font-size: 24px;
            font-family: 'PT Sans', sans-serif;
        }

        #currentproject {
            font-size: 16px;
            margin-top: 24px;
            color: red;
            font-family: 'Aboreto', cursive;
        }

        .tabs {
            margin-top: 1em;
        }
    }
</style>