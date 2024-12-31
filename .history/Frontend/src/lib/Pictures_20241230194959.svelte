<script lang="ts">
    import Carousel from 'svelte-carousel';
    import mont from '../assets/woah.png'
    import temp from '../assets/woah2.png'

    let carousel:Carousel;
    function click() {
        carousel.goToNext();
    }
    const imgList = [
        [mont, "Monterey"]
    ]
</script>
<div id="background">
    <div id="title"> Pictures </div>
    <div id="disc">Disclaimer: Random pictures I am not a good photographer.</div>
    <Carousel bind:this={carousel} autoplay=true on:click={click}>
        <img class="slideImage" src={mont} alt="Monterey"/>
        <img class="slideImage" src={temp} alt="Temp"/>
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
        font-size: 0.6rem;

        font-family: 'Nostalgia'
    }

    .slideImage {
        height: 32rem;
    }

    #background > :global(div:last-child)  {
        width: 75%;
    }
</style>