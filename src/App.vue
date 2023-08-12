
<template>
  <div class="wrapper">
    <header-view class="header"/>
    <my-carousel/>
    <router-view/>
    <about-news/>
  </div>
</template>

<script>
import HeaderView from './components/HeaderView.vue';
import MyCarousel from './components/MyCarousel.vue';
export default{
  data(){
    return{

    }
  },

  components:{
    HeaderView,
    MyCarousel
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

.wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
}
  .header{
    position: fixed;
    z-index: 2;
  }
</style>
