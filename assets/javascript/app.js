 
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

  const database = firebase.database()

$("#add-expense").on("click", function(event) {
    event.preventDefault();

//Store all info gathered from UI
const exCategory = $("#category").val().trim();
const exName = $("#ex-name").val().trim();
const exAmount = $("#amount").val().trim();
const exDate = moment($("#ex-date").val().trim(), "MM/DD/YYYY").format("X");

const newExpense = {
    category: exCategory,
    name: exName,
    amount: exAmount,
    dateX: exDate
};

database.ref().push(newExpense);

//Log everthing to console
console.log(newExpense.category);
console.log(newExpense.name);
console.log(newExpense.amount);
console.log(newExpense.dateX);

alert("Expense successfully added");

//Clears all of the text boxes
$("#category").val("");
$("#ex-name").val("");
$("#amount").val("");
$("#ex-date").val("");
});

database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());

    const exCategory = childSnapshot.val().category;
    const exName = childSnapshot.val().name;
    const exAmount = childSnapshot.val().amount;
    const exDate = childSnapshot.val().dateX;

    console.log(exCategory);
    console.log(exName);
    console.log(exAmount);
    console.log(exDate);

    //let exDatePretty = moment.unix(exDate).format("MM/DD/YYYY");

    let newRow = $("<tr>").append(
        $("<td>").text(exCategory),
        $("<td>").text(exName),
        $("<td>").text(exAmount),
        $("<td>").text(exDate),
    );

    $("#expense-table > tbody").append(newRow);
})


















/*$("#add-expense").on("click", function(event) {
    event.preventDefault();
})*/
//Display info in table

//Export info into excel spreadsheet