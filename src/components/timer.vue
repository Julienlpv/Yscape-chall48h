<template>
    <div class="timer_hook">
        <p>00</p>
        <p>00</p>
        <p>00</p>
        <p>00</p>
    </div>
</template>


<script>
import { defineComponent } from "vue";

export default {
    name:"timer",
    components: {},
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