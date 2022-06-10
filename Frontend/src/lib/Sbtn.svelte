<script lang="ts">
    export let stuff;
</script>

<svg width="40" height="40" class="otherBtn" on:click={function(){window.open(stuff.link)}}>
    <image href={stuff.img} width="40" height="40"><title>{stuff.title}</title></image>
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
</style>