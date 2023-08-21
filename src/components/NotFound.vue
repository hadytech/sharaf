<template>
    <div class="notFound">
        <h1>404</h1>
        <p>Bunday sahifa vayo mahsulot mavjud emas</p>
        <a href="/">Asosiy sahifaga qaytish</a>
    </div>
</template>

<script>
    export default{

    }
</script>

<style scoped>
    .notFound{
        font-family: 'Courier New';
        font-size: 50px;
        text-transform: uppercase;
        letter-spacing: 0.01px;
        line-height: 60px;
        margin-top: 5rem;
        height: 100vh;
        width: 100vw;
        padding: 3rem 5rem;
        transition: 1.4s ease;
        background-image: url(../assets/404.jpg);
    }

    .notFound:hover{
        transform: rotate(5deg);
    }

    h1{
        font-size: 200px;
    }
    a{
        color: white;
        font-weight: 700;
    }

    @media only screen and (max-width: 720px){
        *{
            font-size: 25px;
        }

        .notFound:hover{
        transform: none;
    }

        .notFound::after{
        transform: rotate(5deg);
    }
    }
</style>