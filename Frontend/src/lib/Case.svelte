<script lang="ts">
    export let project:any;
    let link = import.meta.env.VITE_BACKEND + "api/v1/imgs/" + project.img
</script>

<div id="case">
    <div id="project">{project.name}</div>
    <div id="imgdiv"><img src={link} alt="Project did not load" id="img"/></div>
    <div id="side">
        <span>Date: <br/>{project.date}</span>
        <span>Language: <br/>{project.language}</span>
        <span>Status: <br/>{project.status}</span>
        <span>Type: <br/>{project.type}</span>
    </div>
    <div id="dsc">{project.description}</div>
    <div id="projLink"><a id="l" target="_blank" rel="noreferrer" href={project.project}>- Project Link -</a></div>
</div>

<style>
    #case {
        position: relative;
        width: 50%;
        text-align: center;
        border: 20px groove cyan;
    }

    #project {
        font-size: 30px;
        font-weight: bold;
        background-color: aquamarine;
        border: 6px solid blue;
        font-family: 'Dynapuff', monospace;
    }

    #imgdiv {
        width: 100%;
        height: 400px;
        background: rgb(0,0,0,0.2);
    }

    #img {
        width: 100%;
        height: 100%;
        position: relative;
        z-index: -1;
    }
    
    #side {
        font-size: 20px;
        border: 4px solid darkblue;
        background-color: cyan;
        padding: 6px 0;
        display: flex;
        justify-content: space-evenly;
    }

    #dsc {
        font-size: 20px;
        background-color: mediumaquamarine;
        padding: 6px 4px;
        max-height: 140px;
        overflow-y: auto;
    }

    #dsc::-webkit-scrollbar {
        width: 1px;
    }

    #projLink {
        background-color: black;
    }
    
    #l {
        color: white;
        font-size: 15px;
        padding: 10px 0;
        text-decoration: none;
        position: relative;
        width: 100%;
        display: block;
    }

    #l:hover {
        font-size: 16px;
    }
</style>