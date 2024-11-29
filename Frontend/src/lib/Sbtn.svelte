<script lang="ts">
    export let stuff:any;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<svg width="35" height="35" class="otherBtn" on:click={function(){window.open(stuff.link)}}>
    <image href={stuff.img} width="35" height="35"><title>{stuff.title}</title></image>
</svg>

<style>
    .otherBtn {
        margin-right: 10px;
        filter: opacity(60%);
    }

    .otherBtn:hover {
        cursor: pointer;
        filter: none;
    }

    @media screen and (max-width: 414px) {
        svg {
            width: 15px;
            height: 15px;
        }
        image {
            width: 15px;
            height: 15px;
        }
    }
</style>