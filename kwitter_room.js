
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDXYRuPkKMeN4Lq4MU-GxWl158q8KhfR2M",
      authDomain: "kwitter-b9a4f.firebaseapp.com",
      databaseURL: "https://kwitter-b9a4f-default-rtdb.firebaseio.com",
      projectId: "kwitter-b9a4f",
      storageBucket: "kwitter-b9a4f.appspot.com",
      messagingSenderId: "842511713879",
      appId: "1:842511713879:web:a72a2cfeaf11bf138c4512"
    };
    
    // Initialize Firebase
    var app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
