const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const message = document.getElementById("message");


// Sending Message
document
  .getElementById("message_form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let messageData = { fullname: fullname.value, email: email.value, message: message.value };
    console.log(messageData)

    fullname.value = "";
    email.value = "";
    message.value = "";
    // alert("hamza    ")
  });

 
//   Application
