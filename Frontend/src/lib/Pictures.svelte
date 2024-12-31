<script lang="ts">
    import Carousel from 'svelte-carousel';
    import mont from '../assets/woah.png'
    import piney from '../assets/woah2.png'
    import pineydawn from '../assets/pc.png'

    let carousel:Carousel;
    function click() {
        carousel.goToNext();
    }
    const imgList = [
        [mont, "Monterey"],
        [piney, "Piney Creek"],
        [pineydawn, "Piney Creek Dawn"]
    ]
</script>
<div id="background">
    <div id="title"> Pictures </div>
    <div id="disc">Disclaimer: Random pictures I am not a good photographer.</div>
    <Carousel bind:this={carousel} autoplay=true on:click={click}>
        {#each imgList as imgData}
            <img src={imgData[0]} class="slideImage" alt={imgData[1]} />
        {/each}
    </Carousel>
</div>

<style>
    #background {
        width: 100%;
        height: 100%;
        background-size: cover;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    #title {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: 0.1em;
        font-family: 'Cool';
        font-size: 9vw;
        font-weight: bold;
        color: white;
        text-shadow: 0.1rem 0.1rem 5px rgba(83, 83, 83, 0.7), -0.1rem -0.1rem 5px rgba(83, 83, 83, 0.7);
    }

    #disc {
        color: white;
        font-size: 2vw;
        padding: 1rem;
        font-family: 'Nostalgia'
    }

    .slideImage {
        height: 32rem;
    }

    #background > :global(div:last-child)  {
        width: 75%;
    }
</style>