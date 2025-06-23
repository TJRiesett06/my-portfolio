
/*
function checkForm(){
const form = document.getElementById('email-form');
  form.addEventListener('submit', function(event) {
    if (!form.checkValidity()) {
      event.preventDefault();
      console.log('hello2');
      alert('Please fill in all required fields.');
    }else{
      console.log('hello5');
      sendMail();
    }
  });
}
  */

function sendMail() {
  console.log('hello4');

  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_kr7692h";
  const templateID = "template_omlagnh";



  emailjs.send(serviceID, templateID, params)
  .then(
    res =>{
      console.log('hello');
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message was sent successfully. Thank you!");
    })
  .catch ((err) => console.log(err));
}

