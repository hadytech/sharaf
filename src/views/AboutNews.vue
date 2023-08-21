<template>
    <div class="wrapperB">
        <div class="itemz">
            <img src="../assets/icons/mobile-button-solid.svg" class="icony">
            <div class="string">
              <a href="tel:+998884964444">Qo'ng'iroq qiling</a>
              <span>+998 88 496 4444</span>
            </div>
        </div>
        <div class="itemz">
            <img src="../assets/icons/envelope-open-solid.svg" class="icony">
            <div class="string">
                <a href="mailto:mamur@sharafmebel.uz">E-xat yozing</a>
                <span>mamur@sharafmebel.uz</span>
            </div>
        </div>
        <div class="itemz">
            <img src="../assets/icons/telegram.svg" class="icony">
            <div class="string">
                <a href="http://t.me/nurkhujaev">Telegramdan murojaat</a>
                <span>t.me/nurkhujaev</span>
            </div>
            
        </div>

    </div>
</template>

<style scoped>
    .wrapperB{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 5rem;
        padding: 2rem;
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
        font-weight: 700;
        padding: 0.8rem;
        transition: 0.3s ease;
        color: black;
    }

    .wrapperB a:hover{
        color: white;
        background-color: black;
    }

    .itemz{
        border: 1px solid gold;
        border-radius: 2rem;
        background-color: #fff;
        color: black;
        padding: 15px;
        display: flex;
        flex-direction: row;
        width: 400px;
        height: 100px;
        justify-content: center;
        align-items: center;
        margin: 1rem;
        text-align: center;
    }

    .itemz .string{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .itemz:nth-child(1){
        color: rgba(137, 43, 226, 0.867);
    }

    .itemz:nth-child(2){
        color: rgb(46, 40, 6);
    }

    .itemz:nth-child(3){
        color: rgba(0, 90, 224, 0.753);
    }

    span{
        font-size: 18px;
    }

    .icony{
        width: 60px;
        padding: 20px;
        background-color: #fff;
        border-radius: 20px;
    }

    @media only screen and (max-width: 720px){
        .wrapperB{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 5rem;
        }
    }
</style>