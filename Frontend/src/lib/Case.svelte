<script lang="ts">
    export let project;
    export let n;
    n *= 695
    n += 174
</script>

<div id="case" style="top: {n}px">
    <div id="project">{project.title}</div>
    <div id="imgdiv"><img src={project.img} alt="Project did not load" id="img"/></div>
    <div id="side">
        {#each project.side as side}
        <span>{side}</span>
        {/each}
    </div>
    <div id="dsc">{project.desc}</div>
    <div id="a"><a id="l" target="_blank" href={project.link}>- Project Link -</a></div>
</div>

<style>
    #case {
        position: absolute;
        transform: translateX(-50%);
        left: 50%;
        text-align: center;
        border: 20px groove cyan;
    }

    #project {
        font-size: 30px;
        font-weight: bold;
        background-color: aquamarine;
        border: 6px solid blue;
    }

    #imgdiv {
        width: 100%;
        height: 400px;  
    }

    #img {
        width: 100%;
        height: 100%;
    }
    
    #side {
        font-size: 22px;
        border: 4px solid darkblue;
        background-color: cyan;
        padding: 6px 0;
        display: flex;
        justify-content: space-evenly;
    }

    #dsc {
        font-size: 20px;
        background-color: mediumaquamarine;
        padding: 6px 0;
        max-height: 75px;
        overflow-y: auto;
    }

    #dsc::-webkit-scrollbar {
        width: 1px;
    }

    #a {
        background-color: black;
    }
    
    #l {
        color: white;
        font-size: 15px;
        padding: 10px 0;
        text-decoration: none;
    }

    #l:hover {
        font-size: 16px;
    }
</style>