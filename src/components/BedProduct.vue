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
        justify-content: center;
        align-items: center;

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

    @media only screen and (max-width: 720px){
        .any{
        display: flex;
        height: auto;
        width: 100%;
        flex-direction: column;
    }
}
</style>

<script>
import img3 from '../assets/carousel/3.jpg'
import qobil from '../assets/products/beds/qobil.jpg'
import qobil1x1 from '../assets/products/beds/qobil1x1.jpg'
import qobil2 from '../assets/products/beds/qobil2.jpg'
import qobil2_1x1 from '../assets/products/beds/qobil2_1x1.jpg'
import quyosh from '../assets/products/beds/quyosh.jpg'
import zour from '../assets/products/beds/zour.jpg'

    export default{
        data(){
            return{
                prod:[
                {
                    class: 'bed',
                    name: '"Bahor" krovati',
                    img: img3,
                },
                {
                    link: '/qobilbed',                    class: 'bed',
                    name: '"Qobil" krovati',
                    img: qobil,
                },
                {
                    link: '/q2bed',
                    class: 'bed',
                    name: '"Qobil 2" krovati',
                    img: qobil2,
                },
                {
                    link: '/quyoshbed',
                    class: 'bed',
                    name: '"Quyosh 2" krovati',
                    img: quyosh,
                },
                {
                    link: '/zour2bed',
                    class: 'bed',
                    name: '"Zo`r 2" krovati',
                    img: zour,
                },

                ]
            }
        }
    }
</script>