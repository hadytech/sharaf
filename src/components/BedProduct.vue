<template>
    <div class="any">
        <div class="product" v-for="(item, index) in prod">
        <div class="thing">
            <a href="#" class="oneproduct">
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
        height: auto;
        width: 100%;
        height: auto;
        flex-direction: row;
        justify-content: space-around;
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

    @media only screen and (max-width: 600px){
        .any{
        display: flex;
        height: auto;
        width: 100%;
        height: auto;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
}

</style>

<script>
import img3 from '../assets/carousel/3.jpg'
let altText = 'Tarmog`ingiz holati chaladur'
    export default{
        data(){
            return{
                prod:[
                {
                    class: 'bed',
                    name: '"Bahor" krovati',
                    img: img3,
                }
                ]
            }
        }
    }
</script>