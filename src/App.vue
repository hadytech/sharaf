<template>
  <div class="wrapper">
    <header-view class="header"/>
    <router-view class="whole"/>
    <thus-footer class="footy"/>
  </div>
</template>

<script>
import HeaderView from './components/HeaderView.vue';
import MyCarousel from './components/MyCarousel.vue';
import ThusFooter from './components/ThusFooter.vue';
export default{
  data(){
    return{

    }
  },

  components:{
    HeaderView,
    MyCarousel,
    ThusFooter,
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
*{
  font-family: 'Poppins', sans-serif;
}
/* .wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: auto;
} */
  .header{
    position: fixed;
    z-index: 99;
    top: 0;
  }

.footy{
  margin-top: 6rem;
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
