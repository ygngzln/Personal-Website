<main>
    <div><span class="u">L</span><span class="d">O</span><span class="u">A</span><span class="d">D</span><span class="u">I</span><span class="d">N</span><span class="u">G</span><span class="d">.</span><span class="u">.</span><span class="d">.</span></div>
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200&display=swap');
    
    div {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: 25px;
        position: fixed;
        font-size: 160px;
        font-weight: bold;
        text-align: middle;
        z-index: 99;
        background-color: black;
        color: darkblue;
        margin-top: -10px;
        margin-left: -10px;
        font-family: 'Titillium Web', sans-serif;
    }

    .u {
        animation-duration: 0.3s;
        animation-name: up;
        animation-iteration-count: infinite;
    }

    .d {
        animation-duration: 0.3s;
        animation-name: down;
        animation-iteration-count: infinite;
    }

    @keyframes up {
        0% {
            margin-bottom: 20px
        }

        50% {
            margin-bottom: -20px
        }

        100% {
            margin-bottom: 20px
        }
    }

    @keyframes down {
        0% {
            margin-top: 15px
        }

        50% {
            margin-top: -20px
        }

        100% {
            margin-top: 15px
        }
    }
</style>