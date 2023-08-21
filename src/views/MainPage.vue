<template>
  <div class="wrapperA">
    <my-carousel/>
  </div>
</template>

<script>
import HeaderView from '../components/HeaderView.vue';
import MyCarousel from '../components/MyCarousel.vue';
import ThusFooter from '../components/ThusFooter.vue';
export default{
  data(){
    return{

    }
  },

  components:{
    HeaderView,
    MyCarousel,
    ThusFooter
  },
  
  mounted(){
    console.log('mounted ishladi');
  },
  beforeMount(){
    console.log('beforemounted ishladi');
  },
  created(){
    console.log('created ishladi');
  },
  
  
}
</script>

<style scoped>

.wrapperA{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  margin-top: 5rem;
  /* sTART */
  background: linear-gradient(282deg, #000000, #ffffff, #2b3035);
    background-size: 600% 600%;

    animation: AnimationName 9s ease infinite;
}

@keyframes AnimationName {
    0%{background-position:0% 11%}
    50%{background-position:100% 90%}
    100%{background-position:0% 11%}
  /* fINISH */
}
  .header{
    position: fixed;
    z-index: 99;
  }

  @media only screen and (max-width: 600px){
    .wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: auto;
}
      }
</style>