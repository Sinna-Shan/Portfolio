document
  .querySelector(".main-nav-list")
  .addEventListener("click", function (e) {
    e.preventDefault();
    //matching
    if (e.target.classList.contains("nav-link")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });

// *******************
//    EMAIL SCRIPT
// *******************

const from = document.getElementById("from_name");
const email = document.getElementById("email_id");
const message = document.getElementById("msg");

document.querySelector(".btn-form-sub").addEventListener("click", (e) => {

  if(!(from.value || from.value || message.value)) {
    alert("Please fill all the fields");
    return;
  }

  const params = {
    from_name: from.value,
    email_id: email.value,
    message: message.value,
  };


  emailjs
    .send("service_xl3e22g", "template_z6f5vuo", params)
    .then((response) => {
      alert("I am glad to here from you. get in touch with you soon!");
    });


});
