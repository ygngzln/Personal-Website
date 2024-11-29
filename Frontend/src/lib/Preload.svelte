<main>
    <div>LOADING<span class="d">.</span><span class="u">.</span><span class="d">.</span><span class="u">.</span><span class="d">.</span></div>
</main>

<style>
    div {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: 0.75rem;
        position: fixed;
        font-size: 4.9rem;
        font-weight: bold;
        text-align: middle;
        background-color: black;
        color: skyblue;
        font-family: 'Titillium Web', sans-serif;
    }
    
    div > span {
        letter-spacing: 0.25rem;
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
            margin-bottom: 0.6rem
        }

        50% {
            margin-bottom: -0.6rem
        }

        100% {
            margin-bottom: 0.6rem
        }
    }

    @keyframes down {
        0% {
            margin-top: 0.6rem
        }

        50% {
            margin-top: -0.6rem
        }

        100% {
            margin-top: 0.6rem
        }
    }
</style>