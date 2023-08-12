<template>
    <div class="wrapper">
        <h2>Biz bilan bog'laning!</h2>
        <div class="item">
            <img src="../assets/icons/mobile-button-solid.svg" class="icony">
            <a href="tel:+998001112233">Qo'ng'iroq qiling</a>
        </div>
        <div class="item">
            <img src="../assets/icons/envelope-open-solid.svg" class="icony">
            <a href="mailto:bir@nima.ekan">E-xat yozing</a>
        </div>
        <div class="item">
            <img src="../assets/icons/telegram.svg" class="icony">
            <a href="http://t.me/judazornik">Telegramdan murojaat</a>
        </div>
        <h4>yes</h4>

    </div>
</template>

<style scoped>
    wrapper{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 500px;
    }

    .wrapper a{
        font-size: 25px;
        padding: 15px;
        border-radius: 14px;
    }

    .item{
        display: flex;
        width: 450px;
        height: 100px;
        justify-content: flex-start;
        align-items: center;
    }

    .icony{
        width: 60px;
        padding-right: 20px;
    }
    .item:nth-child(1){
        background: lime;
    }
</style>