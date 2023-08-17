<template>
  <div class="wrapper">
    <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" v-for="(item, index) in caruselInfo" :key="index">

      <img :src="item.img" class="d-block w-100" alt="...">
      <a href="">
      <div class="carousel-caption d-none d-md-block">
        <h5>{{ item.name }}</h5>
        <p>{{ item.info }}</p>
      </div>

      </a>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Avvalgi</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Keyingi</span>
  </button>
</div>
  </div>
   
</template>

<script>
import myImage1 from '../assets/carousel/1.jpg'
import myImage2 from '../assets/carousel/2.jpg'
import myImage3 from '../assets/carousel/3.jpg'
export default{
  data(){
    return{
      caruselInfo:[
        {
          "img":myImage1,
          "name":"Bahor",
          "info":"Some representative placeholder content for the first slide."
        },
        {
          "img":myImage2,
          "name":"Bahor",
          "info":"Some representative placeholder content for the first slide."
        },
        {
          "img":myImage3,
          "name":"Bahor",
          "info":"Some representative placeholder content for the first slide."
        },
      ]
    }
  },
  methods:{
    search_product(data){
      console.log('data',data)
    }
  },
  mounted() {
    this.$root.$on('searchProduct', (data)=> {
      this.search_product(data)
    })
  }
}
</script>

<style scoped>
    .slide{
      margin: 10rem 0rem;
      width: 70vw;
      box-shadow: 30px 30px 30px gray;
    }

    .carousel-item{
      border-radius: 50px;
    }

    .carousel-caption{
      background-color: #220303a8;
    }

    .carousel-caption h5{
      text-transform: uppercase;
    }

    @media only screen and (max-width: 600px) {
      .slide{
        margin-top: 6.5rem;
        width: 100vw;
      }
      
    }

</style>