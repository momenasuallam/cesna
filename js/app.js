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

  $(".mainchatbox").click(function () {
    $(".chatdiv").show();
    // alert("ok");
  });
  $(".closechatbox").click(function () {
    $(".chatdiv").hide();
  });

});

$(document).ready(function () {
  $("#rollbackform").validate({
    // initialize the plugin
    rules: {
      finame: {
        required: true,
      },
      liname: {
        required: true,
      },
      emaiil: {
        required: true,
        email: true,
      },
      jobititle: {
        required: true,
      },
      Companyiname: {
        required: true,
      },
      Companyiadd: {
        required: true,
      },
      countryiCode: {
        required: true,
        min: 1,
      },
      phonei: {
        required: true,
      },
      messagei: {
        required: true,
      },
      messages: {
        emaiil: "Please enter the correct email address",
        finame: "Please fill out this field",
        liname: "Please fill out this field",
        jobititle: "Please fill out this field",
        Companyiname: "Please fill out this field",
        Companyiadd: "Please fill out this field",
        countryiCode: "Please fill out this field",
        phonei: "Please fill out this field",
        messagei: "Please fill out this field",
      },
    },
  });
});

        // wow Animation
        new WOW().init();