<template>
    <div class="wrapperF">
        <div class="brand">
            <img src="../assets/logo.png" class="fadliddin">
            <div class="one">
                <span class="brandName">Sharaf Mebel</span>
                <span>Since 2013</span>
            </div>
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
        /* width: 100vw; */
        /* height: 300px; */
        /* background-color: black; */
        color: white;
        padding: 1.5rem;

    }
    img{
       width: 120px;
    }

    .one{
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .one span:nth-child(2){
        color: gray;
        padding-top: -5px;
    }
    .calls{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-content: center;
        height: 150px;
        text-align: center;
    }

    .calls a, span{
        padding: 5px;
        font-size: 15px;
        font-weight: 400;
    }
    .calls span{
        font-weight: 800;
    }
    span{
        padding-top: 0;
    }

    .brand{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        height: 220px;
        font-size: 18px;
    }
    @media only screen and (max-width: 600px){
        .wrapperF{
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
        }
        .calls{
            height: 100px;
            margin-top: 2rem;
            margin-bottom: 1rem;
        }

    }
</style>