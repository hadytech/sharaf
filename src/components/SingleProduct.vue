<template>
    <div class="product" v-for="(item, index) in prod">
        <div class="thing">
            <a href="#" class="oneproduct">
            <img :src="item.img" :alt="item.altText">
            <h2>{{ item.name }}</h2>
            </a>
        </div>
        
    </div>
</template>

<style scoped>
    .oneproduct{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
    }

    .product{
        display: flex;
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


</style>

<script>
import img from '../assets/carousel/1.jpg'
import img2 from '../assets/carousel/2.jpg'
let altText = 'Tarmog`ingiz holati chaladur'
    export default{
        data(){
            return{
                prod:[
                 {
                    name: 'Shkaf Pro Max 2023',
                    img: img,
                },
                {
                    name: 'Shkaf Galaxy S24 Plus',
                    img: img2,
                }
                ]
            }
        }
    }
</script>