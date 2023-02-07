const express = require('express');
const app = express();
const firebase = require('firebase-admin');
const credentials = require('./yescape-chall48h-firebase-adminsdk-koqi2-8af1ca978f.json');
const editJsonFile = require("edit-json-file");
const users = require('./users.json');

app.get('/users', (req, res) => {
  res.send(users);
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvZmUIdxfYmyH_4OfElSNNVVIepgmIY9M",
  authDomain: "yescape-chall48h.firebaseapp.com",
  projectId: "yescape-chall48h",
  storageBucket: "yescape-chall48h.appspot.com",
  messagingSenderId: "631510947847",
  appId: "1:631510947847:web:bf17ce36d09fd2f8b132a2",
  measurementId: "G-ZBXW0FKGWB"
};



firebase.initializeApp({
    credential: firebase.credential.cert(credentials),
    databaseURL: "https://yescape-chall48h-default-rtdb.europe-west1.firebasedatabase.app",
  });
  
  module.exports = firebase;

// LECTURE DE LA BDD 
// var db = firebase.database();
// var usersRef = db.ref("user");

// usersRef.once("value", function(snapshot) {
//   console.log(snapshot.val());
// });


  
  // Route to handle sign up
  // app.post('/signup',  (req, res) => {
  //   const { email, password, confirmPassword } = req.body;
  
  //   // Validate user input
  //   if (!email || !password || !confirmPassword) {
  //     return res.status(400).json({ error: 'Merci de renseigner votre email et votre mot de passe' });
  //   }
  //   if (password !== confirmPassword) {
  //     return res.status(400).json({ error: 'Les mots de passe ne correspondent pas' });
  //   }
  
  //   // Hash password
  //   bcrypt.hash(password, 10, (err, hashedPassword) => {
  //     if (err) {
  //       return res.status(500).json({ error: 'Mot de passe non haché' });
  //     }
  
    
  //     // Creation du user via firebase
  //     firebase.auth().createUserWithEmailAndPassword(email, hashedPassword)
  //       .then(() => {
  //         res.json({ message: 'Sign up successful' });
  //       })
  //       .catch((error) => {
  //         res.status(400).json({ error: error.message });
  //       });

  //   });


    // usersRef.push({
    //   name: req.body.name,
    //   email: req.body.email,
    //   password: req.body.hashedPassword
    // });


  
  // Route du sign in
  // app.post('/signin', async (req, res) => {
  //   const { email, password } = req.body;
  //   console.log('COUCOu');
  
  //   // validation du champ user
  //   if (!email || !password) {
  //     return res.status(400).json({ error: 'Merci de renseigner les champs' });
  //   }


    // connection du user à firebase
    // firebase.auth().signInWithEmailAndPassword(email, password)
    //   .then(() => {
    //     res.json({ message: 'Connexion réussie' });
    //   })
    //   .catch((error) => {
    //     res.status(400).json({ error: error.message });
    //   });


// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.post("/login", (req, res) => {
//   const { email, password } = req.body;
  
//   // Vérification des données d'identification (email et mot de passe)
//   if (email === "test@example.com" && password === "secret") {
//     // Connecté avec succès
//     res.send("Connexion réussie");
//   } else {
//     // Échec de la connexion
//     res.send("Email ou mot de passe incorrect");
//   }
// });
// })
  
    
//   });

///////////////////////////////////////////////////////


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

// app.get("/signin", (req, res) => {
//   if (!req.query.username || !req.query.password) {
//       return res.status(400).json({ message: 'Veuillez entrer un login et un mot de passe' })
//   }

//   var users = require('./users.json');
//   const user = users.find(u => u.username === req.query.username && u.password === req.query.password)

//   if (!user) {
//       return res.status(400).json({ message: 'Mauvais login ou mot de passe' });
//   }
//   console.log("Connexion réussie");
// });


const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
