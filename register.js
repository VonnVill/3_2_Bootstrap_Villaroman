document.addEventListener("DOMContentLoaded", function () {
    
  
    
    var registerButton = document.querySelector(".btn-primary");
    registerButton.addEventListener("click", function () {
    
  
     
      var nameInput = document.getElementById("form3Example1c").value;
      var emailInput = document.getElementById("form3Example3c").value;
      var passwordInput = document.getElementById("form3Example4c").value;
      var repeatPasswordInput = document.getElementById("form3Example4cd").value;
      var agreeCheckbox = document.getElementById("form2Example3c").checked;
      var gender = document.getElementById("gender").value;
  
      
      console.log("Name:", nameInput);
      console.log("Email:", emailInput);
      console.log("Password:", passwordInput);
      console.log("Repeat Password:", repeatPasswordInput);
      console.log("Agree Checkbox:", agreeCheckbox);
      console.log("Gender: " + gender);
    });
  });
  