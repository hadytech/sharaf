<template>
    <div class="producty">
        <ChesterThing/>
    </div>
</template>

<style scoped>
    .producty{
        font-family: 'Courier New';
        font-size: 50px;
        text-transform: uppercase;
        letter-spacing: 0.01px;
        line-height: 60px;
        margin-top: 5rem;
        height: 100vh;
        width: 100vw;
        text-align: center;
        padding: 3rem 5rem;
        background: rgb(131,58,180);
background: radial-gradient(circle, rgba(131,58,180,1) 0%, rgba(0,0,0,1) 0%, rgba(75,75,75,1) 100%);
}
@media only screen and (max-width: 600px){
    .producty{
        margin-top: 5rem;
    }
}
</style>

<script>
import ChesterThing from '../components/ChesterThing.vue';
    export default{
        components:{
    ChesterThing,
}
    }
</script>