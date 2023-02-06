<template>
    <div class="timer_hook">
        <p>{{ hours }}</p>
        <p>{{ hours % 24 }}</p>
        <p>{{ minutes % 60 }}</p>
        <p>{{ seconds % 60 }}</p>
    </div>
</template>


<script>
import { defineComponent } from "vue";
import { ref } from '@vue/reactivity';

export default {
    setup(){
        const hours = ref(0);
        const minutes = ref(0);
        const seconds = ref(0);
        const launchDate = new Date('1 janvier 2023').

        setInterval(() => {
            const currDate = new Date();
            const launchTime = launchDate - currDate

            seconds.value = parseInt(launchTime/1000);
            minutes.value = parseInt(seconds.value/60);
            hours.value = parseInt(minutes.value/60);
        },1000);
        return (hours, minutes, seconds)
    },
}
</script>

<style>
.timer_hook {
    width: 50%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    transform: translateY(100px);

}
.timer_hook p {
    width: 100px;
    height: 100px;
    line-height: 100px;
    background-color: whitesmoke;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    
}
</style>