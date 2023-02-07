<template>
  <form @submit.prevent="submitForm">
    <div class="containerLog">
      <h1 id="titleLog">Y-scape challenge</h1>
        <div>
            <label for="name">Nom du groupe:</label>
            <input class="inputLog" type="text" v-model="FormData.name">
        </div>
        <router-link to="/Home"><button type="submit" >Entrer</button></router-link>
  
      </div>
    </form>
  
</template>


<script>
import { defineComponent } from 'vue';
import Home from './Home.vue';


export default defineComponent({
  name: 'auth',
  components: { Home },
  data (){
    return {
    FormData: {
      name:'',
    }
  }
  },
  methods: {
    async submitForm() {
      try {
       
        const response = await axios.post('http://localhost:3000', this.formData)
        console.log(response.data)
      } catch (error) {
        console.error(error)
      }
    }}
 
  
 
});

</script>


<style>
#titleLog {
  color: hsla(160, 100%, 37%, 1);
  font-size : 50px;
  margin: 20px;
}

.containerLog {
  margin: 0 5%;
  text-align: center;
}

.inputLog {
  margin: auto;
  height: 40px;
  width: 25%;
  border-radius: 10px;
  margin-top: 20px;
}

.EnterBtn {
  margin-top: 50px;
  background-color: hsla(160, 100%, 37%, 1);
    border: 1px solid hsla(160, 100%, 37%, 1) ;
    border-radius: 10px;
    height: 40px;
    width: 10%;
    cursor: pointer;
    transition: background-color 0.3s;
    color:white;
}

.EnterBtn:hover {
  background-color: rgb(0, 59, 40) ;
  
}



</style>
