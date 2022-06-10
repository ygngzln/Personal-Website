<script>
    import axios from 'axios'
    const uri = 'http://localhost:4000/api/v1/fhilts/'
    let maxpages;
    let flist = [];
    let loaded = false;
    let us, pass, link, rank;
    async function maxpg(){
        maxpages = await axios.get(uri)
        for(let x=0;x<maxpages.data.length;x++){
            console.log(maxpages.data[x])
            flist.unshift(maxpages.data[x])
        }
        maxpages = maxpages.data[0].rank
        loaded = true;
    }
    maxpg()

    let page = 1;

    function left(){
        if(page-1 == 0){
            page = maxpages;
            return;
        }
        page--
    }
    function right(){
        if(page+1 > maxpages){
            page = 1
            return;
        }
        page++
    }

    function submitData(){
        if(us.value != import.meta.env.VITE_USER && pass.value != import.meta.env.VITE_PASS){ return; }
        axios.post(uri, {
            imgLink: link.value,
            rank: rank.value
        })
        .catch(function(err){
            console.log(err)
        })
        link.value = ""
        rank.value = ""
    }
</script>

<div id="mid">
    <button id="left" class="b" on:click={left}>←</button>
    {#if loaded}
    <img src={flist[page-1].imgLink} alt="Fhilt did not load" width=480 height=570/>
    {/if}
    <button id="right" class="b" on:click={right}>→</button>
</div>
<div id="bottom">
    <input id="us" bind:this={us} type="text" autocomplete="off" placeholder="Username" />
    <input id="pass" bind:this={pass} type="password" autocomplete="off" placeholder="Password" />
    <input id="link" bind:this={link} type="text" autocomplete="off" placeholder="Image link"/>
    <input id="rank" bind:this={rank} type="number" autocomplete="off" placeholder="Rank" /> <br />
    <button id="sub" on:click={submitData}>Submit</button>
</div>

<style>
    #mid {
        top: 172px;
        position: absolute;
        display: flex;
        align-items: center;
        left: 50%;
        transform: translateX(-50%);
    }
    
    #bottom {
        text-align: center;
        bottom: 15px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
    
    #us {
        border: 2px solid blue;
        background-color: aqua;
    }

    #pass {
        border: 2px solid darkred;
        background-color: orange;
    }

    #link {
        border: 2px solid green;
        background-color: lawngreen;
    }

    #rank {
        border: 2px solid gray;
        background-color: silver;
    }

    #sub {
        border: 3px solid darkgoldenrod;
        background-color: yellow;
        margin-top: 5px;
        font-family:fantasy;
    }

    #sub:hover {
        font-size: 15px;
        cursor: pointer;
    }

    #pass:focus, #link:focus, #rank:focus, #us:focus {
        outline-width: 0;
        border: 2px solid black;
    }

    input::placeholder {
        font-family: Georgia, 'Times New Roman', Times, serif;
    }

    input {
        border: 1px solid black;
        color: black;
    }

    input:focus {
        border: 2px solid black;
        outline-width: 0;
    }

    #right {
        margin-left: 40px;
        background-color: darkcyan;
        border: 4px solid darkblue;
    }

    #left {
        margin-right: 40px;
        background-color: darksalmon;
        border: 4px solid darkred;
    }

    .b {
        font-size: 80px;
        font-family:Verdana, sans-serif
    }

    .b:hover {
        font-size: 85px;
        cursor: pointer;
    }
</style>