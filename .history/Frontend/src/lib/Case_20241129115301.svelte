<script lang="ts">
    export let project:any;
    let link = import.meta.env.VITE_BACKEND + "api/v1/imgs/" + project.img

    function openLink() {
        window.open(project.project, '_blank').focus();        
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<span id="case">
    <div id="clickable" on:click={openLink}>
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <div id="imgdiv"><img src={link} loading="lazy" alt="Project image" id="img"/></div>
        <div id="title">{project.name}</div>
        <div id="dsc">{project.description}</div>
    </div>
</span>

<style>
    #case {
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        padding: 1rem 2rem;
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
        border: 0.1rem solid rgba(0, 0, 0, 0.7);
        box-sizing: border-box;
    }

    #img {
        width: 100%;
        height: 100%;
    }

    #title {
        font-size: 1.5rem;
        width: 100%;
        font-weight: bold;
        color: rgb(160, 172, 225);
        background-color: rgba(30, 80, 107, 0.839);
        text-shadow: 0px 0px 8px rgb(14, 31, 88);
        font-family: 'Dynapuff', monospace;
        border-left: 0.1rem solid rgba(0, 0, 0, 0.7);
        border-right: 0.1rem solid rgba(0, 0, 0, 0.7);
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #dsc {
        font-size: 1rem;
        background-color: rgb(132, 171, 194);
        padding: 0.3rem 0.2rem;
        height: 5.5rem;
        overflow-y: auto;
        font-family: 'Cool';
        letter-spacing: 0.09em;
        box-sizing: border-box;
        border: 0.1rem solid rgba(0, 0, 0, 0.7);
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