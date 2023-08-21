<template>
    <div class="group">
        <div>
            <p>Ijtimoiy sahifalarimiz:</p>
            <span><a href="https://t.me/sharafmebeluz"><i class="fa-brands fa-telegram"></i>  Telegram</a></span>
            <span><a href="https://instagram.com/sharafmebel"><i class="fa-brands fa-instagram"></i>  Instagram</a></span>
            <span><a href="https://fb.com/sharafmebel"><i class="fa-brands fa-facebook"></i>  Facebook</a></span>
            <!-- <li><a href="#"><i class="fa-brands fa-tiktok"></i>  Tiktok</a></li>
            <li><a href="#"><i class="fa-brands fa-youtube"></i>  Youtube</a></li> -->
        </div>
    </div>
</template>

<style scoped>
    .group div{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-content: center;
        text-align: center;
        height: 180px;
        padding-bottom: 1rem;
    }

    div p{
        font-weight: 800;
    }

    a{
        padding: 10px;
        font-size: 20px;
        margin-bottom: 10px;
    }

    @media only screen and (max-width: 600px){
        .group div{
            height: 100px;
            padding-bottom: 0.5rem;
        }
    }
</style>

<script>
export default {
    
}
</script>