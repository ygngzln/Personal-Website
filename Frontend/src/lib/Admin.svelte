<script>
    let us, pass, link, rank, date, msg;
    import axios from 'axios';
    let fhilts = 'https://backendyigeng.herokuapp.com/api/v1/fhilts'
    let blogs = 'https://backendyigeng.herokuapp.com/api/v1/blogs/'
    function submit(){
        if(us.value != import.meta.env.VITE_USER && pass.value != import.meta.env.VITE_PASS){ return; }
        console.log("valid")
        if(link.value.trim() != "" || rank.value.trim() != ""){
            axios.post(fhilts, {
                imgLink: link.value,
                rank: rank.value,
                ttokem: import.meta.env.VITE_TTOKEM
            })
            .catch(function(err){
                console.log(err)
            })
            link.value = ""
            rank.value = ""
        }

        if(date.value.trim() != "" || msg.value.trim() != ""){
            console.log("valid2")
            axios.post(blogs, {
                date: date.value,
                message: msg.value,
                ttokem: import.meta.env.VITE_TTOKEM
            })
            .catch(function(err){
                console.log(err)
            })
            date.value = ""
            msg.value = ""
        }
    }
</script>

<div id="c">

    <div id="login">
        <div>LOGIN</div>
        <input id="us" bind:this={us} type="text" autocomplete="off" placeholder="Username" />
        <input id="pass" bind:this={pass} type="password" autocomplete="off" placeholder="Password" />
    </div>

    <div id="fhilt">
        <div>FHILTS</div>
        <input id="link" bind:this={link} type="text" autocomplete="off" placeholder="Image link"/>
        <input id="rank" bind:this={rank} type="number" autocomplete="off" placeholder="Rank" /> <br />
    </div>

    <div id="blog">
        <div>BLOGS</div>
        <input id="date" bind:this={date} type="text" autocomplete="off" placeholder="Date" />
        <input id="msg" bind:this={msg} type="text" autocomplete="off" placeholder="Message"/><br />
    </div>

</div>

<button id="sub" on:click={submit}>Submit Data</button>

<style>
    #c {
        text-align: center;
        display: flex;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        flex-direction: column;
        top: 174px;
        border: 16px groove cyan;
        padding: 20px;
        background-color: skyblue;
    }

    #login {
        color: darkred;
        font-size: 40px;
        text-align: center;
        margin: 20px 0;
        font-weight: bold;
    }

    #fhilt {
        color: rgb(216, 162, 0);
        font-size: 40px;
        text-align: center;
        margin: 20px 0;
        font-weight: bold;
    }

    #blog {
        color: darkblue;
        font-size: 40px;
        text-align: center;
        margin: 20px 0;
        font-weight: bold;
    }

    #us {
        border: 2px solid blue;
        background-color: aqua;
    }

    #pass {
        border: 2px solid darkred;
        background-color: orange;
    }

    #link, #date {
        border: 2px solid green;
        background-color: lawngreen;
    }

    #rank, #msg {
        border: 2px solid gray;
        background-color: silver;
    }

    #sub {
        border: 3px solid darkgoldenrod;
        background-color: yellow;
        bottom: 20px;
        font-size: 30px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        font-family:fantasy;
    }

    #sub:hover {
        font-size: 31px;
        cursor: pointer;
    }

    #pass:focus, #link:focus, #rank:focus, #us:focus, #msg:focus, #date:focus {
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
</style>