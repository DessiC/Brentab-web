const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".links");
  /*  const navLinks = document.querySelectorAll(".links li"); */

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
};

navSlide();

$(document).ready(function () {
  $(".submit").click(function (event) {
    console.log("clicked button");

    var fname = $(".fname").val();
    var lname = $(".lname").val();
    var email = $(".email").val();
    var subject = $(".subject").val();
    var message = $(".textarea").val();
    /*  var input = $(".inPut"); */
    /* var statusElm = $(".status");
    statusElm.empty(); */

    if (fname.length >= 2) {
      console.log("Name is valid");
    } else {
      event.preventDefault();
      fname.style.backgroundColor = "yellow";
      console.log("Name is not valid");
    }
    if (lname.length >= 2) {
      console.log("Name is valid");
    } else {
      event.preventDefault();
      console.log("Name is not valid");
    }

    if (email.length > 5 && email.includes("@") && email.includes(".")) {
      console.log("Name is valid");
    } else {
      event.preventDefault();
      console.log("Name is not valid");
    }

    if (subject.length >= 2) {
      console.log("Name is valid");
    } else {
      event.preventDefault();
      console.log("Name is not valid");
    }

    if (message.length >= 10) {
      console.log("Name is valid");
    } else {
      event.preventDefault();
      console.log("Name is not valid");
    }
  });
});
