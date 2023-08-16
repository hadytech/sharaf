<template>
    <div class="wrapperF">
        <div class="brand">
            <img src="../assets/logo.png" class="fadliddin">
            <span class="brandName">Sharaf Mebel 2023</span>
        </div>
        <social-media/>
        <div class="calls">
            <span>Aloqa raqamlari:</span>
            <a href="tel: +998977494938">+998 97 749 4938</a>
            <a href="tel: +998884964444">+998 88 496 44 44</a>
        </div>
        <google-maps/>
    </div>
</template>

<script>

import GoogleMaps from './GoogleMaps.vue';
import SocialMedia from './SocialMedia.vue';

export default{
    components:{
        GoogleMaps,
        SocialMedia,
    }
}
</script>

<style scoped>

    .wrapperF{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 100vw;
        background-color: black;
        color: white;
        padding: 2.5rem;

    }
    img{
       width: 120px;
    }

    .calls{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-content: center;
        height: 200px;
        text-align: center;
    }

    .calls a, span{
        padding: 10px;
        font-size: 18px;
        font-weight: 500;
    }

    span{
        padding-top: 0;
        text-transform: uppercase;
    }

    .brand{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        height: 200px;
        font-size: 18px;
    }
    @media only screen and (max-width: 600px){
        .wrapperF{
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            height: auto;
        }
        

    }
</style>