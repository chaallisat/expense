 
 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyBuOew1yKEUV8ujZVbHYMr5Ngd5kxRoXH4",
    authDomain: "expense-tracker-e6c92.firebaseapp.com",
    databaseURL: "https://expense-tracker-e6c92.firebaseio.com",
    projectId: "expense-tracker-e6c92",
    storageBucket: "",
    messagingSenderId: "223219772691",
    appId: "1:223219772691:web:5cf76d61d19e4f19"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();

  $("#add-expense").on("click", function(event) {
    event.preventDefault();

    
  });