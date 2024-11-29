<main>
    <div>LOADING<span class="d">.</span><span class="u">.</span><span class="d">.</span><span class="u">.</span><span class="d">.</span></div>
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200&display=swap');
    
    div {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: 15px;
        position: fixed;
        font-size: 95px;
        font-weight: bold;
        text-align: middle;
        background-color: black;
        color: skyblue;
        font-family: 'Titillium Web', sans-serif;
    }
    
    div > span {
        letter-spacing: 5px;
    }

    .u {
        animation-duration: 1s;
        animation-name: up;
        animation-iteration-count: infinite;
    }

    .d {
        animation-duration: 2s;
        animation-name: down;
        animation-iteration-count: infinite;
    }

    @keyframes up {
        0% {
            margin-bottom: 15px
        }

        50% {
            margin-bottom: -15px
        }

        100% {
            margin-bottom: 15px
        }
    }

    @keyframes down {
        0% {
            margin-top: 15px
        }

        50% {
            margin-top: -15px
        }

        100% {
            margin-top: 15px
        }
    }
</style>