<template>
    <div class="producty">
        <SingleProduct/>
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
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        text-align: center;
        padding: 3rem;
        background: rgb(131,58,180);
        background: radial-gradient(circle, rgba(131,58,180,1) 0%, rgba(0,0,0,1) 0%, rgba(75,75,75,1) 100%);
}

@media only screen and (max-width: 720px){
    .producty{
        margin-top: 5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100vw;
    }
}

</style>

<script>
import SingleProduct from '../components/SingleProduct.vue';
    export default{
        components:{
            SingleProduct
        }
    }
</script>