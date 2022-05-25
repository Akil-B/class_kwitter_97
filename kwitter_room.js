var firebaseConfig = {
      apiKey: "AIzaSyCjZnMRlhhB2F1_pB5YTU21jLdogSdv4tY",
      authDomain: "kwitter-252ba.firebaseapp.com",
      databaseURL: "https://kwitter-252ba-default-rtdb.firebaseio.com",
      projectId: "kwitter-252ba",
      storageBucket: "kwitter-252ba.appspot.com",
      messagingSenderId: "716260051274",
      appId: "1:716260051274:web:4862e707d02d3f0fca99b3",
      measurementId: "G-271YEL8MHK"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
 user_name=localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";

 function addroom(){
   
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
  });
localStorage.setItem("room_name",room_name);
window.location="Kwitter_page.html";

 }


function getData()
{firebase.database().ref("/").on('value', function(snapshot) 
{document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) 
{childKey  = childSnapshot.key;
 Room_names = childKey;
      //Start code
       console.log("room name-"+Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
 { console.log(name); 
      localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html"; }

function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location="index.html";
}