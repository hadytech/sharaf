<template>
    <div class="wrapperB">
        <h2>Biz bilan bog'laning!</h2>
        <div class="itemz">
            <img src="../assets/icons/mobile-button-solid.svg" class="icony">
            <a href="tel:+998884964444">Qo'ng'iroq qiling</a>
        </div>
        <div class="itemz">
            <img src="../assets/icons/envelope-open-solid.svg" class="icony">
            <a href="mailto:bir@nima.ekan">E-xat yozing</a>
        </div>
        <div class="itemz">
            <img src="../assets/icons/telegram.svg" class="icony">
            <a href="http://t.me/judazornik">Telegramdan murojaat</a>
        </div>

    </div>
</template>

<style scoped>
    .wrapperB{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin-top:7rem;
        padding: 5rem;
        width: 100vw;
        height: 100vh;
        background-color: black;
        background-image: url(../assets/Call-center-operators.jpg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .wrapperB a{
        font-size: 20px;
        border-radius: 14px;
        color: white;
        padding: 20px;
        margin-left: 10px;
        font-weight: 700;
    }

    .wrapperB a:hover{
        color: black;
    }

    .itemz{
        border: 1px solid gold;
        border-radius: 2rem;
        padding: 15px;
        display: flex;
        width: 350px;
        height: 100px;
        justify-content: flex-start;
        align-items: center;
    }

    .itemz:nth-child(2){
        margin-top: 20px;
        background-color: rgba(137, 43, 226, 0.867);
    }

    .itemz:nth-child(3){
        background-color: rgba(255, 217, 0, 0.747);
    }

    .itemz:nth-child(4){
        background-color: rgba(0, 90, 224, 0.753);
    }

    .icony{
        width: 40px;
        padding-left: 20px;
    }

    h2{
        background-color: #fff;;
    }
</style>