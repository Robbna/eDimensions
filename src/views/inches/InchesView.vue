<template>
    <div class="flex justify-center items-center flex-col h-screen overflow-auto">
        <div id="tv-container">
            <input type="number" v-model="inches" />
            <label id="inch-symbol">"</label>
            <h4 class="centimeters" id="width">{{ width }} <small>cm</small></h4>
            <h4 class="centimeters" id="height">{{ height }} <small>cm</small></h4>
            <label :hidden="!showError" id="error-label">Only inches below <span>99</span>!</label>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const inches = ref<number>(0);
const height = ref<number>(0);
const width = ref<number>(0);

const showError = ref<boolean>(false);

watch(inches, () => {

    showError.value = inches.value > 99

    if (inches.value <= 99) {
        height.value = parseFloat((inches.value * 2.21).toFixed(2));
        width.value = parseFloat((inches.value * 1.245).toFixed(2));
    }

})

</script>

<style scoped>
#tv-container {
    position: absolute;
    box-sizing: border-box;

    background-image: url(@/assets/inches/tv.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

    height: 600px;
    width: 900px;

    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

    box-shadow: 0px 0px 50px black;
}

#tv-container #inch-symbol {
    position: relative;
    color: var(--brand-color-1);
    top: 300px;
    right: -430px;
}

#tv-container #error-label {
    position: relative;
    top: 285px;
    right: -410px;

    color: red;
    font-size: 14px;
    font-weight: 600;
}

#tv-container #error-label::before {
    content: "⚠️";
}

#tv-container input {
    position: relative;
    top: 305px;
    right: -422px;

    width: 50px;

    border: 1px solid var(--brand-color-1);
    border-radius: 5px;
    background: none;
    text-align: center;
    color: var(--brand-color-1);
}

#tv-container input::-webkit-outer-spin-button,
#tv-container input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}


.centimeters {
    position: relative;
    text-align: center;
    display: block;

    font-size: 23px;

    width: 120px;
}

#tv-container #width {
    top: 265px;
    right: -640px;

    text-align: left;
}

#tv-container #height {
    top: 105px;
    right: -405px;
}

@media (max-width: 768px) {


    #tv-container {
        background-size: cover;
        height: 400px;
        width: 375px;
    }

    .centimeters {
        font-size: .8rem;
        width: 100px;
        font-weight: bold;
    }

    #tv-container input {
        width: 30px;
    }

    #tv-container #width {
        top: 170px;
        right: -310px;

        text-align: left;
    }

    #tv-container #height {
        top: 65px;
        right: -140px;
    }

    #tv-container input {
        top: 200px;
        right: -170px;
    }

    #tv-container #inch-symbol {
        top: 200px;
        right: -176px;
    }

    #tv-container #error-label {
        top: 180px;
        right: -130px;

        font-size: .7rem;
    }

}
</style>