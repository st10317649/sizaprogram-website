function validate(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 4){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if(subject.length < 10){
      text = "Please Enter Correct Subject";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length != 10){
      text = "Please Enter valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 50){
      text = "Please Enter More Than 50 Characters";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  }

 // Google form

   // Function to validate the form
   function validateForm() {
    // Get the values of the name and email input fields
    var name = document.getElementById("fullName").value;
    var email = document.getElementById("googleEmail").value;
    
    // Check if the name is empty
    if (name.trim() === "") {
      alert("Please enter your full name.");
      return false;
    }
    
    // Check if the email is empty or not a valid email address
    if (email.trim() === "" || !isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    
    // Check if the checkbox is checked
   // var newsletterCheckbox = document.getElementById("newsletter-checkbox");
   // if (!newsletterCheckbox.checked) {
   //   alert("Please check the box to receive the newsletter.");
  //    return false;
   // }
    
    // If all checks pass, the form is valid
    return true;
  }

  // Function to check if an email address is valid
  function isValidEmail(email) {
    // A simple email validation regex
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  }

  // Add a form submit event listener
  document.getElementById("botton").addEventListener("click", function (event) {
    if (!validateForm()) {
      event.preventDefault(); // Prevent form submission if validation fails
    }
  });
