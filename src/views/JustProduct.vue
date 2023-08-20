<template>
    <div class="overall">
        <img :src="projects.img" alt="Couldn't load">
        <h2>Product name to dynamized</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque atque ex corporis repellendus debitis id est aspernatur molestias, minus porro?</p>
    </div>
</template>

<style scoped>
    .overall{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: space-around;
        width: 100vw;
    }

    .overall img{
        width: 80%;
        border-radius: 20px;

    }

    h2{
        color: black;
    }
</style>

<script>
    import {reactive} from 'vue'
    import SearchResult from './SearchResult.vue';

</script>