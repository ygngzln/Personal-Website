<script lang="ts">
    import Carousel from 'svelte-carousel';

    let carousel;
    function click() {
        carousel.goToNext();
    }
</script>
<div id="background">
    <div id="title"> Pictures </div>
    <Carousel bind:this={carousel} autoPlay=true>


    </Carousel>
</div>

<style>
    #background {
        width: 100%;
        height: 100%;
        background-size: cover;
    }

    #title {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: 0.1em;
        font-family: 'Cool';
        font-size: 7rem;
        font-weight: bold;
        color: white;
        text-shadow: 0.1rem 0.1rem 5px rgba(83, 83, 83, 0.7), -0.1rem -0.1rem 5px rgba(83, 83, 83, 0.7);
    }
</style>