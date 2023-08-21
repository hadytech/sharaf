<template>
    <div class="producty">
        <div class="details">
            <img src="../assets/products/closets/xon1x1.jpg" alt="Rasm yuklana olmadi, qayta urining">
        </div>
        <div class="veryDetails">
            <h2>"Xon" shkafi</h2>
            <h3>Ma'lumotlar:</h3>
        <!-- <p>
            <span class="indicator">Fasad:</span>
            <span class="indicated">akril</span>
        </p> -->
        <p>
            <span class="indicator">Bo`yi:</span>
            <span class="indicated">200sm</span>
        </p>
        <p>
            <span class="indicator">Eni:</span>
            <span class="indicated">85sm</span>
        </p>
        <p>
            <span class="indicator">Chuqurlik:</span>
            <span class="indicated">50sm</span>
        </p>
        <p>
            <span class="indicator">Xomashyo:</span>
            <span class="indicated">LDSP</span>
        </p>

        <hr>
        <p class="price">
            <span class="indicator">Narxi:</span>
            <span class="indicated">1 600 000 so'm</span> 
            <a href="tel:+998884964444">Harid qilish</a>
        </p>
        </div>
        
    </div>
</template>

<style scoped>


    .producty{
        font-family: 'Poppins';
        font-size: 30px;
        letter-spacing: 0.01px;
        line-height: 30px;
        margin-top: 7rem;
        padding: 2rem;
        text-align: center;
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 100vh;
        width: 100vw;
        color: black;
        padding: 2rem 5rem;
        background: white;
}

.details img{
    width: 600px;
    }

.details{
    border: 1px solid rgba(128, 128, 128, 0.232);
    height: 100vh;
    display: flex;
    flex-direction: center;
    justify-content: center;
    align-items: center;
}

.veryDetails{
    border: 1px solid rgba(128, 128, 128, 0.116);
    height: 100vh;
    display: flex;
    padding-bottom: 3rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 3rem;
}

.details{
    width: 60%;
}

.veryDetails{
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start ;
    padding: 0.5rem;
}

p{
    font-size: 24px;
    display: flex;
    text-align: left;
    flex-direction: column;
    background-color: #ffffff3d;
    border-radius: 20px;
}

.indicator{
    font-weight: 600;
    color: gray;
}

.indicated{
    font-weight: 800;
    color: black;
}

.price{
    background-color: rgba(128, 128, 128, 0.188);
    /* padding: 1rem; */
    line-height: 2rem;
    text-align: center;
    padding: 1rem;
}

.price .indicated{
    color: black;
    font-size: 50px;
    font-weight: 500;
    padding: 1rem;
}

.price .indicator{
    color: black;
}

h2{
    font-weight: 800;
    text-align: center;
    width: 100%;
}

.price a{
    color: white;
    background-color: goldenrod;
    border-radius: 10px;
    padding: 1rem;
}

.price a:hover{
    background-color: gold;
}

@media only screen and (max-width: 720px){
    .producty{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 170vh;
        margin-top: 0;
        padding-top: 0;
        padding-bottom: 0;
        margin-bottom: 0;
    }

    .producty img{
        width: 350px;
    }

    .producty .details{
        height: 25%;
        border: none;
    }

    .veryDetails{
        width: 450px;
    }
}
</style>

<script>
    export default{
        components:{
}
    }
</script>