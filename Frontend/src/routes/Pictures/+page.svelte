<script lang="ts">
    import Carousel from 'svelte-carousel';
    import mont from '../../assets/pictures/woah.png'
    import piney from '../../assets/pictures/woah2.png'
    import pineydawn from '../../assets/pictures/pc.png'

    const imgList = [
        [mont, "Monterey"],
        [piney, "Piney Creek"],
        [pineydawn, "Piney Creek Dawn"]
    ]

    let carousel:Carousel;
    function click() {
        carousel.goToNext();
    }
</script>
<div id="background">
    <div id="title"> Pictures </div>
    <div id="disc">Some places I've been to. Not a great photographer tho lol</div>
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
        background-color: #7e97a1;
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
        letter-spacing: 0.075em;
        font-family: 'Nostalgia';
        font-size: 7vw;
        margin-top: 1.35rem;
        font-weight: bold;
        color: rgb(225, 225, 225);
        text-shadow: 0.1rem 0.1rem 8px rgba(83, 83, 83, 0.7), -0.1rem -0.1rem 5px rgba(83, 83, 83, 0.7);
    }

    #disc {
        color: rgb(222, 224, 227);
        text-shadow: 0.1rem 0.1rem 8px rgba(83, 83, 83, 0.7), -0.1rem -0.1rem 5px rgba(83, 83, 83, 0.7);
        font-size: 2.4vw;
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