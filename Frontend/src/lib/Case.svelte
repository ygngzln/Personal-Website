<script lang="ts">
    export let project:any;
    import js from '../assets/icons/js.png'
    import cpp from '../assets/icons/cpp.png'
    import godot from '../assets/icons/godot.png'

    let icons = {
        "js": js,
        "cpp": cpp,
        "godot": godot
    };
    let link = import.meta.env.VITE_BACKEND + "api/v1/imgs/" + project.img

    function openLink() {
        if(project.project != null){
            window.open(project.project, '_blank').focus();
        }
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<span id="case">
    <div id="clickable" on:click={openLink}>
        <!-- svelte-ignore a11y-img-redundant-alt -->
         <div id="title"><img src={icons[project.language.toLowerCase()]} alt="Project icon" id="icon"/>{project.name}</div>
        <div id="imgdiv"><img src={link} loading="lazy" alt="Project image" id="img"/></div>
        <div id="dsc">{project.description}</div>
    </div>
</span>

<style>
    
    #case {
        --case-border: 0.1rem solid rgba(0, 0, 0, 1);
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        padding: 1rem 1rem;
    }

    #clickable {
        display: inline-block;
    }

    #clickable:hover {
        cursor: pointer;
    }

    #imgdiv {
        width: 100%;
        height: 12rem;
        background: rgba(0, 0, 0, 0.795);
        border: var(--case-border);
        box-sizing: border-box;
    }

    #img {
        width: 100%;
        height: 100%;
    }

    #icon {
        width: 1.8rem;
        height: 1.8rem;
        margin-right: 0.75rem;
    }

    #title {
        font-size: 1.72rem;
        width: 100%;
        letter-spacing: 0.12rem;
        font-weight: bold;
        color: white;
        text-shadow: 0px 0px 8px rgb(14, 31, 88);
        font-family: 'Nostalgia';
        background: rgba(0,0,0,1);
        box-sizing: border-box;
        text-align: left;
        padding: 0.55rem 0 0.55rem 0.85rem;
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: center;
    }

    #dsc {
        font-size: 1.3rem;
        background-color: rgb(132, 171, 194);
        padding: 0.2rem 0.5rem 0.15rem 0.5rem;
        height: 5.5rem;
        overflow-y: auto;
        font-family: 'Alice';
        box-sizing: border-box;
        text-align: left;
        border-bottom: var(--case-border);
        border-right: var(--case-border);
        border-left: var(--case-border);
    }

    #dsc::-webkit-scrollbar {
        width: 0.75px;
    }

    @media screen and (max-width: 414px) {
        #case {
            padding: 2rem 1rem;
        }
        #title {
            height: 3.8rem;
        }
        #dsc {
            letter-spacing: 0.01rem;
        }
    }
</style>