<template>
  <form action="/signup" method="post">
      <h1>Y-scape challenge</h1>
        <div>
            <label for="name">Nom du groupe:</label>
            <input type="text" id="name" name="name">
        </div>
        
        <router-link to="/Home"><button type="submit" @click="valideGroupe">Sign Up</button></router-link>
    </form>
</template>


<script>
import { defineComponent } from 'vue';
import Home from './Home.vue';

export default defineComponent({
  name: 'auth',
  components: { Home },
  methodes: {
    methModiStyle(){
      app.get("/signup", (req, res) => {
  if (!req.query.username) {
      return res.status(400).json({ message: 'Veuillez entrer un nom de groupe' })
  }

  const usrs = require("./users.json");
  const user = usrs.find(u => u.username === req.query.username)

  if (user) {
      return res.status(400).json({ message: 'Utilisateur existe déjà' })
  }

  let file = editJsonFile('./users.json');
  var user_data = { "username": req.query.username, "points": 0 };
  file.append("", user_data);
  file.save();

  return res.json({ message: 'Utilisateur créé' });

 
});

    }
  }
 
});

</script>


<style>

</style>
