<script lang="ts">
    interface Project {
        img: string;
        language: string;
        project?: string | null;
        name: string;
        description: string;
    }

    export let project: Project;
    export let src:string;
    import js from '../assets/icons/js.png'
    import cpp from '../assets/icons/cpp.png'
    import godot from '../assets/icons/godot.png'

    const icons: Record<string, string> = {
        js,
        cpp,
        godot
    };

    function openLink() {
        if(project.project != null){
            let tab = window.open(project.project, '_blank')
            tab?.focus();
        }
    }
</script>

<!-- {#await preload() then _} -->
<span id="case">
    <button id="clickable" type="button" on:click={openLink}>
        <div id="title">
            <img src={icons[project.language.toLowerCase()]} alt="projlang" aria-hidden="true" id="icon" />
            {project.name}
        </div>
        <!-- <div id="imgdiv"> -->
        <img {src} loading="lazy" alt={`${project.name} cover`} id="img"/>
        <!-- </div> -->
        <div id="dsc">{project.description}</div>
    </button>
</span>
<!-- {/await} -->

<style>
    #case {
        --case-border: 0.1rem solid rgba(0, 0, 0, 1);
        width: 100%;
        height: 100%;
        position: relative;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
    }

    #clickable {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        background: none;
        border: none;
        border-radius: 0;
        position: relative;
    }

    #clickable:hover {
        cursor: pointer;
    }

    #img {
        width: 100%;
        height: 12rem;
        box-sizing: border-box;
        background: rgba(0, 0, 0, 0.795);
        border: var(--case-border);
        margin: 0;
        display: block;
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
        #title {
            font-size: 1.1rem;
            flex: 2;
            padding: 0.3rem 0 0.3rem 0.4rem;
        }

        #icon {
            margin-right: 0.6rem;
            width: 1.4rem;
            height: 1.42rem;
        }

        #case {
            padding: 0.15rem;
            height: 100%;
        }

        #img {
            height: 6rem;
        }

        #dsc {
            font-size: 1rem;
            overflow-y: scroll;
        }
    }
</style>