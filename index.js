 function handleSubmit() {

    const firstName = document.getElementById("First Name").value;
    const secondName = document.getElementById("Second Name").value;
    const mobileNumber = document.getElementById("Mobile Number").value;
    const email = document.getElementById("Email").value;
    const message = document.getElementById("Message")



    console.log("First Name:", firstName);
    console.log("Second Name:", secondName);
    console.log("Mobile Number:", mobileNumber);
    console.log("Email:", email);
    console.log("Message:", message);

    alert(`Thank you, ${firstName}! Your message has been submitted.`);

 
    document.querySelector("form").reset();
  }