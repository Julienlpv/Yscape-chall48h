<template>
  <form action="/signup" method="post">
      <h1>Y-scape challenge</h1>
        <div>
            <label for="name">Nom du groupe:</label>
            <input type="text" id="name" name="name">
        </div>
        
        <router-link to="/Home"><button type="submit">Sign Up</button></router-link>
    </form>
</template>


<script>
import { defineComponent } from 'vue';
import Home from './Home.vue';

export default defineComponent({
  name: 'auth',
  components: { Home },
 
});

</script>


<style>

</style>
