<template>
    <div class="any">
        <div class="product" v-for="(item, index) in prod">
        <div class="thing">
            <a :href=item.link class="oneproduct">
            <img :src="item.img" :alt="item.altText">
            <h2>{{ item.name }}</h2>
            </a>
        </div>
        
    </div>
    </div>
</template>

<style scoped>
   .any{
        display: flex;
        width: 100%;
        flex-direction: row;
        flex-wrap: wrap;
        background-color: none;
        background-size: cover;

    }
    .oneproduct{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
    }

    .product{
        display: flex;
        height: auto;
        width: 400px;
        height: auto;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    .oneproduct:hover{
        transform: scale(1.07);
    }

    a:hover{
        background: none;
    }
    .product img{
        width: 350px;
        height: 230px;
        border-radius: 20px;
        padding: 1rem;
    }

    @media only screen and (max-width: 600px){
        .any{
        display: flex;
        height: auto;
        width: 100%;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
}
</style>

<script>
import img from '../assets/carousel/1.jpg'
import bahor1x1 from '../assets/products/closets/bahor_1x1.jpg'
import img2 from '../assets/carousel/2.jpg'
import omad1x1 from '../assets/products/closets/omad1x1.jpg'
import fayz from '../assets/products/closets/fayz.jpg'
import fayz1x1 from '../assets/products/closets/fayz1x1.jpg'
import lola from '../assets/products/closets/lola.jpg'
import lola1x1 from '../assets/products/closets/lola1x1.jpg'
import nur from '../assets/products/closets/nur.jpg'
import nur1x1 from '../assets/products/closets/nur1x1.jpg'
import oydin3 from '../assets/products/closets/oydin3.jpg'
import oydin3_1x1 from '../assets/products/closets/oydin3_1x1.jpg'
import umid from '../assets/products/closets/umid.jpg'
import umid1x1 from '../assets/products/closets/umid1x1.jpg'
import umid2 from '../assets/products/closets/umid2.jpg'
import umid2_1x1 from '../assets/products/closets/umid2_1x1.jpg'
import xon from '../assets/products/closets/xon.jpg'
import xon1x1 from '../assets/products/closets/xon1x1.jpg'

    export default{
        data(){
            return{
                prod:[
                {
                    link: '/bahorcloset',
                    class: 'closet',
                    name: '"Bahor" shkafi',
                    img: img,
                },
                // {
                //     class: 'closet',
                //     name: '"Bahor 1x1" shkafi',
                //     img: bahor1x1,
                // },
                {
                    link: '/OmadCloset',
                    class: 'closet',
                    name: '"Omad" shkafi',
                    img: img2,
                },
                // {
                //     class: 'closet',
                //     name: '"Omad 1x1" shkafi',
                //     img: omad1x1,
                // },
                
                {
                    link: '/fayzcloset',
                    class: 'closet',
                    name: '"Fayz" shkafi',
                    img: fayz,
                },
                // {
                //     class: 'closet',
                //     name: '"Fayz 1x1" shkafi',
                //     img: fayz1x1,
                // },
                {
                    class: 'closet',
                    name: '"Lola" shkafi',
                    img: lola,
                },
                
                // {
                //     class: 'closet',
                //     name: '"Lola 1x1" shkafi',
                //     img: lola1x1,
                // },
                {
                    class: 'closet',
                    name: '"Nur" shkafi',
                    img: nur,
                },
                
                // {
                //     class: 'closet',
                //     name: '"Nur 1x1" shkafi',
                //     img: nur1x1,
                // },
                {
                    class: 'closet',
                    name: '"Oydin 3" shkafi',
                    img: oydin3,
                },
                
                // {
                //     class: 'closet',
                //     name: '"Oydin 3 1x1" shkafi',
                //     img: oydin3_1x1,
                // },
                {
                    class: 'closet',
                    name: '"Umid" shkafi',
                    img: umid,
                },
                
                // {
                //     class: 'closet',
                //     name: '"Umid 1x1" shkafi',
                //     img: umid1x1,
                // },
                {
                    class: 'closet',
                    name: '"Umid 2" shkafi',
                    img: umid2,
                },
                
                // {
                //     class: 'closet',
                //     name: '"Umid 2 1x1" shkafi',
                //     img: umid2_1x1,
                // },
                {
                    class: 'closet',
                    name: '"Xon" shkafi',
                    img: xon,
                },
                // {
                //     class: 'closet',
                //     name: '"Xon 1x1" shkafi',
                //     img: xon1x1,
                // },
                
                ]
            }
        }
    }
</script>