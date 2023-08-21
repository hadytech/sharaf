<template>
  <div class="wrapper">

    <div class="first" v-for="(item, index) in caruselInfo" :key="index">
      <div class="a">
        <img :src="item.img" alt="">
      </div>
      <div class="b">
        <a :href=item.link>
        <h3>{{ item.name }}</h3>
        <p>{{ item.info }}</p>
      </a>
      </div>
      
    </div>

    <!-- <div v-for="(item, index) in caruselInfo" :key="index">

      <img :src="item.img" alt="...">
      <a :href=item.link>
      <div class="carousel-caption d-none d-md-block">
        <h5>{{ item.name }}</h5>
        <p>{{ item.info }}</p>
      </div>

      </a>
    </div> -->
  </div>
   
</template>

<script>
import myImage1 from '../assets/carousel/1.jpg'
import myImage2 from '../assets/products/beds/qobil.jpg'
import myImage3 from '../assets/products/chester/chester.jpg'
export default{
  data(){
    return{
      caruselInfo:[
        {
          "img":myImage1,
          "name":"Bahor shkafi",
          "info":"X-245sm  Y-190sm  Z-60sm, LDSP LMDF",
          link: '/BahorCloset',
        },
        {
          "img":myImage2,
          "name":"Qobil krovati",
          "info":"X-217sm Y-180sm Z-118sm, LDSP",
          link: '/qobilbed'
        },
        {
          "img":myImage3,
          "name":"Chester",
          "info":"X-90sm Y-90sm Z-40sm, LDSP LMDF, Akril",
          link: '/justchester',
        },
      ]
    }
  },
  // methods:{
  //   search_product(data){
  //     this.project_name = data
  //   }
  // },
  // mounted() {
  //   this.$root.$on('searchProduct', (data)=> {
  //     this.search_product(data)
  //   })
  // }
}
</script>

<style scoped>
   .first{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    background-color: #e9e7e8;
    color: #000;
   }
   .first a{
    color: #000;
    border-radius: 20px;
    border: 1px black solid;
   }

   .a{
    width: 50%;
   }

   a{
    transition: 03.s ease-in-out;
  }

   a:hover{
    color: #000000a0;
   }

   .b{
    width: 50%;
    text-align: center;
   }
   h3{
    font-size: 40px;
  }
   .first img{
    width: 100%;
    height: 100%;
   }

   .first a{
    width: 50vh;
   }

   .first:nth-child(2){
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
   }

    @media only screen and (max-width: 720px) {
      .first{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    padding: 2rem;
   }

   .first:nth-child(2){
    flex-direction: column;
   }

   a{
    transition: 03.s ease-in-out;
  }

   a::after{
    color: #000000a0;
   }
      
    }

</style>