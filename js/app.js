window.addEventListener("scroll", () => {
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
$(document).ready(function () {
  // Toggle menu on click
  $("#menu-toggler").click(function () {
    toggleBodyClass("menu-active");
  });

  function toggleBodyClass(className) {
    document.body.classList.toggle(className);
  }
});
// function validateFormlogin() {
//     var x = document.forms["loginformm"]["emaillogin"].value;
//     var y = document.forms["loginformm"]["passlogin"].value;
//     if (x == "" && y == "") {
//       alert("Name must be filled out");
//       return false;
//     }
//     else{
//  window.location.href = "user-dashboard.html";
//     }

// }
//  $("#logimbtnid").click(function () {
  
//  });

