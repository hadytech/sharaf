<template>
    <div class="producty">
        <ul>
            <li v-for="(item, index) in project_name_fil" :key="index">
            <img :src=item.img :alt=item.altText>
            <h2>{{ item.name }}</h2>
            </li>
        </ul>
    </div>
</template>

<style scoped>
    .producty{
        font-family: 'Courier New';
        font-size: 50px;
        text-transform: uppercase;
        letter-spacing: 0.01px;
        line-height: 60px;
        margin-top: 8rem;
        height: 100vh;
        width: 100vw;
        text-align: center;
        padding: 3rem 5rem;
        background: rgb(131,58,180);
background: radial-gradient(circle, rgba(131,58,180,1) 0%, rgba(0,0,0,1) 0%, rgba(75,75,75,1) 100%);
}

li img{
    width: 50px;
}
</style>

<script>
import img from '../assets/carousel/1.jpg'
import img2 from '../assets/carousel/2.jpg'
import img3 from '../assets/carousel/3.jpg'
import qobil from '../assets/products/beds/qobil.jpg'
// import qobil1x1 from '../assets/products/beds/qobil1x1.jpg'
import qobil2 from '../assets/products/beds/qobil2.jpg'
// import qobil2_1x1 from '../assets/products/beds/qobil2_1x1.jpg'
import quyosh from '../assets/products/beds/quyosh.jpg'
import zour from '../assets/products/beds/zour.jpg'
import fayz from '../assets/products/closets/fayz.jpg'
// import fayz1x1 from '../assets/products/closets/fayz1x1.jpg'
import lola from '../assets/products/closets/lola.jpg'
// import lola1x1 from '../assets/products/closets/lola1x1.jpg'
import nur from '../assets/products/closets/nur.jpg'
// import nur1x1 from '../assets/products/closets/nur1x1.jpg'
import oydin3 from '../assets/products/closets/oydin3.jpg'
// import oydin3_1x1 from '../assets/products/closets/oydin3_1x1.jpg'
import umid from '../assets/products/closets/umid.jpg'
// import umid1x1 from '../assets/products/closets/umid1x1.jpg'
import umid2 from '../assets/products/closets/umid2.jpg'
// import umid2_1x1 from '../assets/products/closets/umid2_1x1.jpg'
import xon from '../assets/products/closets/xon.jpg'
// import xon1x1 from '../assets/products/closets/xon1x1.jpg'

    export default{
        name: 'allTheData',
        data(){
            return{
            projects:[
                {
                    name: '"Bahor" shkafi',
                    img: img,
                    link: '#',
                },
                {
                    name: '"Omad" shkafi',
                    img: img2,
                    link: '#',
                },
                {
                    name: '"Bahor" krovati',
                    img: img3,
                    link: '#',
                },
                {
                    name: '"Qobil" krovati',
                    img: qobil,
                    link: '#',
                },
                {
                    name: '"Qobil 2" krovati',
                    img: qobil2,
                    link: '#',
                },
                {
                    name: '"Quyosh" krovati',
                    img: quyosh,
                    link: '#',
                },
                {
                    name: '"Zo`r" krovati',
                    img: zour,
                    link: '#',
                },
                {
                    name: '"Fayz" shkafi',
                    img: fayz,
                    link: '#',
                },
                {
                    name: '"Lola" shkafi',
                    img: lola,
                    link: '#',
                },
                {
                    name: '"Nur" shkafi',
                    img: nur,
                    link: '#',
                },
                {
                    name: '"Oydin 3" shkafi',
                    img: oydin3,
                    link: '#',
                },
                {
                    name: '"Umid" shkafi',
                    img: umid,
                    link: '#',
                },
                {
                    name: '"Umid 2" shkafi',
                    img: umid2,
                    link: '#',
                },
                {
                    name: '"Xon" shkafi',
                    img: xon,
                    link: '#',
                },
            
            ]}},
            methods:{
                search_project_name(){
                    this.project_name_fil = []
                    this.projects.filter(elem => {
                        if (elem.name.toLowerCase().includes(this.project_name)){
                            this.project_name_fil.push(elem),
                            console.log(elem);
                        }
                    })}
            },
            
  mounted() {
    this.search_project_name()
  }
}
</script>